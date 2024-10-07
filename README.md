![ignite + freerasp boilerplate](https://github.com/talsec/react-native-boilerplate/blob/master/ignite%20%2B%20freerasp%20boilerplate.png)

# React Native Secure Boilerplate 2024: Ignite with freeRASP
[Read the full article](https://docs.talsec.app/appsec-articles/articles/react-native-secure-boilerplate-2024-ignite-with-freerasp)

## Overview

This project integrates the [Ignite framework by Infinite Red](https://infinite.red/ignite) with [freeRASP by Talsec](https://www.talsec.app/)  to create a secure and scalable mobile app using React Native. Ignite serves as a customizable boilerplate to speed up app development, while freeRASP provides runtime protection against various security threats, including tampering and unauthorized access.

## Key Features

- **Ignite Framework**: A highly customizable boilerplate that accelerates React Native app development with TypeScript, MobX, and many other modern tools.
- **freeRASP Integration**: A Runtime Application Self-Protection (RASP) solution that provides real-time threat detection and mitigation against tampering, reverse engineering, and unauthorized access.

This guide provides step-by-step instructions to get the project running, set up the security features, and build a small HelloWorld app using the combined Ignite and freeRASP toolset.

---

## Prerequisites

Make sure you have the following installed on your system:
- Node.js (v14 or later)
- Yarn or npm
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

---

## Project Setup

### Step 1: Install Ignite CLI

To create a new React Native project using Ignite:

```bash
npm install -g ignite-cli
ignite new HelloWorldApp
```

### Step 2: Install and Configure freeRASP

Next, you'll install the `freerasp-react-native` package to add runtime security to your app.

```bash
yarn add freerasp-react-native
```

Configure freeRASP.

Create a configuration file named `freerasp.config.js` in the root of your project. This file will hold your app's security and threat response settings.

### Step 2: Running the App

Navigate to the project directory.
```
cd HelloWorldApp
```

Run the app with these commands.

**IOS**
```
npx react-native run-ios
```

**Android**
```
npx react-native run-android
```


### Summary

By combining Ignite's development speed and freeRASP's security features, this boilerplate offers a foundation for developing secure React Native apps, especially for industries requiring heightened security (e.g., banking, fintech).

For more information, check out the [Talsec freeRASP documentation](https://docs.talsec.app/freerasp/integration).
