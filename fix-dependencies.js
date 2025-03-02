/**
 * This script helps fix common dependency issues with the build process
 * Run with: node fix-dependencies.js
 */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Attempting to fix dependency issues...');

// Function to execute shell commands
function runCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

// Get the path to node_modules
const nodeModulesPath = path.join(__dirname, 'node_modules');

// Define the sequence of actions
async function fixDependencies() {
  try {
    // Clean npm cache
    await runCommand('npm cache clean --force');

    // Check if node_modules exists and remove it
    if (fs.existsSync(nodeModulesPath)) {
      console.log('Removing node_modules directory...');
      
      // On Windows, we need a different command to remove directories
      if (process.platform === 'win32') {
        await runCommand('rmdir /s /q node_modules');
      } else {
        await runCommand('rm -rf node_modules');
      }
    }

    // Install the specific versions of ajv and ajv-keywords
    await runCommand('npm install ajv@8.12.0 ajv-keywords@5.1.0 --save-dev');

    // Reinstall all dependencies
    await runCommand('npm install');

    console.log('Successfully fixed dependencies. Try building the project again.');
  } catch (error) {
    console.error('Failed to fix dependencies:', error);
    process.exit(1);
  }
}

// Run the fix process
fixDependencies();
