# AI Learning Buddy - Comprehensive Documentation

## 📚 Project Overview

AI Learning Buddy is a Telegram Mini App designed to serve as an educational companion for students. It integrates several learning tools into a single, accessible interface within the Telegram messaging platform. The app leverages modern web technologies and the Telegram Bot API to deliver a seamless educational experience.

### Core Concept

The mini app bridges the gap between educational resources and everyday communication tools by bringing an AI-powered learning environment directly into Telegram, which many students already use daily. By combining DeepSeek AI's capabilities with custom educational tools, the app creates a powerful studying companion accessible without leaving the messaging platform.

## ✨ Features and Functionality

### 1. DeepSeek AI Integration

- **Mini Browser**: Embedded browser that loads DeepSeek AI's interface
- **Login Support**: Users can log in with their existing DeepSeek accounts
- **Full AI Functionality**: Access to DeepSeek's AI capabilities within Telegram
- **Seamless Experience**: No need to switch between apps for AI assistance

### 2. Custom Prompts Library

- **Curated Educational Prompts**: Pre-written prompts optimized for learning
- **Subject Categories**: Organized by academic subjects (Math, Science, Writing, etc.)
- **Search Functionality**: Find relevant prompts quickly with search
- **Save Favorites**: Users can save useful prompts for later use
- **Copy to Clipboard**: One-click copying to use with DeepSeek AI

### 3. Khmer-English Academic Dictionary

- **Bilingual Terminology**: Technical terms in both English and Khmer
- **Phonetic Pronunciation**: Audio support for correct pronunciation
- **Subject Filtering**: Find terms by academic subject
- **Detailed Definitions**: Clear explanations and usage examples
- **Search in Both Languages**: Query in either Khmer or English

### 4. Past Exam Papers Repository

- **Organized Archive**: Exam papers categorized by subject, grade level, and year
- **Quick Search**: Find specific exam papers with search function
- **Favorites**: Mark important papers for quick access
- **Download Option**: Download papers for offline study
- **Filtering System**: Filter by multiple criteria simultaneously

### 5. Homework and Exam Reminders

- **Calendar Integration**: Add important academic deadlines
- **Notifications**: Get reminders about upcoming assignments and exams
- **Subject Tagging**: Organize reminders by subject
- **Priority Levels**: Set importance levels for different tasks
- **Past/Upcoming Views**: Toggle between past and upcoming deadlines

## 🔧 Technical Architecture

### Frontend Framework

- **React**: Component-based UI development with React 18
- **React Router**: Client-side routing for single-page application experience
- **Tailwind CSS**: Utility-first CSS framework for custom "pixel" UI design
- **React Icons**: Icon library for consistent visual elements

### Data Management

- **Local Storage**: Client-side persistence for user preferences and saved items
- **Context API**: React's Context system for state management across components
- **JSON Data Storage**: Structured data for dictionary terms and sample exam papers

### Telegram Integration

- **Telegram Web App SDK**: Integration with Telegram's Mini App platform
- **Telegram Bot API**: Bot functionality for launching and interacting with the mini app
- **WebApp Features**: Back button handling, theme integration, and user data access

### Deployment

- **Express Server**: Simple server to serve static files in production
- **Railway Deployment**: PaaS deployment with continuous integration
- **Environment Configuration**: Production-ready environment setup

## 📁 Project Structure

🔍 Customization Options
Visual Customization
Tailwind Theme

Modify tailwind.config.js to change the color scheme
Update primary and secondary colors in the theme section
Changes will affect the entire application
Component Styling

The pixel-card, pixel-btn, and pixel-input classes in tailwind.css define the core UI style
Modify these classes to change the appearance of UI elements
Content Customization
Dictionary Terms

Edit public/assets/data/dictionary.json to add or modify terms
Follow the existing format for new entries
Sample Prompts

Modify the SAMPLE_PROMPTS array in PromptsPage.jsx
Add new categories by updating the categories array
Exam Papers

Edit the SAMPLE_PAPERS array in ExamPapersPage.jsx
Add new papers or modify existing ones
Functional Customization
Adding New Features

Create new components in the appropriate directory
Update App.jsx to include new routes
Add navigation items in Navigation.jsx
Modifying DeepSeek Integration

Change the URL in BrowserPage.jsx to use a different AI service
Update iframe sandbox permissions as needed
Extending Storage Capabilities

Modify AppContext.jsx to include additional data types
Update the corresponding components to use the new data
❓ Troubleshooting
Common Issues and Solutions
Telegram WebApp Not Initializing

Check that the Telegram JavaScript SDK is properly loaded
Ensure telegram-web-app.js is included in index.html
Verify WebApp initialization in App.jsx
DeepSeek Browser Not Loading

Check network requests for any blocked resources
Verify the DeepSeek URL is correct and accessible
Ensure iframe has proper sandbox permissions
Package Dependency Issues

Create or update .npmrc with legacy-peer-deps=true
Run npm install with the --force flag if necessary
Check for version conflicts in package.json
Deployment Failures

Review build logs for specific errors
Ensure all environment variables are properly set
Verify the start script in package.json is correct
Mini App Not Appearing in Telegram

Confirm the Web App URL is correctly set in BotFather
Check that your bot has the Mini App properly configured
Test direct URL access to confirm the app is deployed correctly