# **CalendarAI**

A React Native app that integrates with Google Calendar and uses GPT to create tasks.
--

## **Prerequisites**

- Node.js >= 18.x.x
- Xcode (for iOS development)
- CocoaPods

---

## **Installation**

### Clone the repository
git clone https://github.com/MrOmarHegazy/CalendarAI.git

### Navigate into the project directory
cd CalendarAI

### Install dependencies
npm install

### Install iOS dependencies
cd ios
pod install
cd ..



## **Running The App**

### 1: Start Metro Bundler
'''bash
npx react-native start
'''

### 2: Run on iOS Simulator (in a seperate terminal)
'''bash
npx react-native run-ios
'''

## **Project Structure**

- App.js: Entry point of the app.
- screens/: Contains screen components.
- components/: Contains reusable components.

## **Contributing**

Feel Free to submit issues and pull requests.

### **Environment Variables**

- If you're using API keys (like OpenAI's API key), do not commit them to GitHub.
- Use a `.env` file and a library like `react-native-dotenv` to manage environment variables.

**Example `.gitignore` Entry:**

```gitignore
.env

