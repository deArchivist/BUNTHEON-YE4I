/**
 * This script adds the missing formatMinimum and formatMaximum keywords to ajv-keywords
 * It resolves the common error: "Unknown keyword formatMinimum"
 */

const fs = require('fs');
const path = require('path');

// Define paths to check for the ajv-keywords module
const possiblePaths = [
  path.join(__dirname, 'node_modules/ajv-keywords'),
  path.join(__dirname, 'node_modules/webpack/node_modules/ajv-keywords'),
  path.join(__dirname, 'node_modules/fork-ts-checker-webpack-plugin/node_modules/ajv-keywords'),
  path.join(__dirname, 'node_modules/schema-utils/node_modules/ajv-keywords'),
];

// Check which path exists
let ajvKeywordsPath = null;
for (const testPath of possiblePaths) {
  if (fs.existsSync(testPath)) {
    ajvKeywordsPath = testPath;
    break;
  }
}

if (!ajvKeywordsPath) {
  console.error('Could not find ajv-keywords package');
  process.exit(1);
}

// Path to the keywords index file
const keywordsIndexPath = path.join(ajvKeywordsPath, 'keywords/index.js');

if (!fs.existsSync(keywordsIndexPath)) {
  console.error(`Could not find keywords index file: ${keywordsIndexPath}`);
  process.exit(1);
}

try {
  // Read the index file content
  let content = fs.readFileSync(keywordsIndexPath, 'utf8');

  // Check if format-related keywords are already present
  if (!content.includes('formatMinimum') && !content.includes('formatMaximum')) {
    // Add the missing keywords
    const lastExportLine = content.lastIndexOf("module.exports = [");
    
    if (lastExportLine !== -1) {
      // Create a backup
      fs.writeFileSync(`${keywordsIndexPath}.backup`, content);
      
      // Add the format keywords to the exports array
      const updatedContent = content.replace(
        "module.exports = [",
        "module.exports = [\n  'formatMinimum',\n  'formatMaximum',"
      );
      
      fs.writeFileSync(keywordsIndexPath, updatedContent);
      console.log('Successfully added formatMinimum and formatMaximum keywords to ajv-keywords');
    } else {
      console.error('Could not find export line in keywords index file');
    }
  } else {
    console.log('Format keywords already present in ajv-keywords');
  }
  
  // Create the format keywords files if they don't exist
  const keywordsDir = path.dirname(keywordsIndexPath);
  
  const formatMinFile = path.join(keywordsDir, 'formatMinimum.js');
  const formatMaxFile = path.join(keywordsDir, 'formatMaximum.js');
  
  if (!fs.existsSync(formatMinFile)) {
    fs.writeFileSync(formatMinFile, `
'use strict';
module.exports = function(ajv) {
  ajv.addKeyword('formatMinimum', {
    type: 'string',
    compile: function (schema, parentSchema) {
      return function (data) {
        return data >= schema;
      };
    }
  });
  return ajv;
};
    `);
    console.log('Created formatMinimum.js');
  }
  
  if (!fs.existsSync(formatMaxFile)) {
    fs.writeFileSync(formatMaxFile, `
'use strict';
module.exports = function(ajv) {
  ajv.addKeyword('formatMaximum', {
    type: 'string',
    compile: function (schema, parentSchema) {
      return function (data) {
        return data <= schema;
      };
    }
  });
  return ajv;
};
    `);
    console.log('Created formatMaximum.js');
  }
  
} catch (err) {
  console.error('Error fixing ajv-keywords:', err);
  process.exit(1);
}
