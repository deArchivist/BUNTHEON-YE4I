# AI Learning Buddy - Telegram Mini App

A comprehensive educational companion designed as a Telegram Mini App to help students learn and manage their academic tasks.

## Features

- **DeepSeek AI Integration**: Browse and interact with DeepSeek AI directly within the app
- **Custom Prompts Library**: Access curated educational prompts for different subjects
- **Khmer-English Dictionary**: Look up academic terminology with English-Khmer translations
- **Exam Papers Repository**: Access past exam papers for different subjects and grade levels
- **Homework and Exam Reminders**: Set and manage reminders for academic deadlines

## Technologies Used

- React.js
- Tailwind CSS
- Telegram Web App API
- React Router
- Local Storage for data persistence

## Setup Instructions

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- A Telegram bot token (obtained from BotFather)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BUNTHEON-YE4I.git
   cd BUNTHEON-YE4I
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your Telegram bot token:
   ```
   REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token_here
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Connect your Telegram bot to the Mini App:
   - Open Telegram and find BotFather
   - Set up a Mini App with `/newapp` command
   - Link the Mini App to your development URL

### Building for Production

## Railway Deployment

This application is configured to be deployed on Railway. Follow these steps to deploy:

1. Fork or clone this repository
2. Create a new project in Railway from your GitHub repository
3. Add the following environment variables in Railway:
   - `REACT_APP_OPENROUTER_API_KEY`: Your OpenRouter API key

Railway will automatically detect the configuration in `railway.json` and deploy your application.

### API Key Security

The OpenRouter API key should be set as an environment variable in Railway's dashboard. Do not commit your actual API key to the repository.

