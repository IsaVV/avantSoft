This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Requirements
Please Install:
- Xcode
- Android Studio
- Node.js 
- JDK (tip: install with sdkman)

- HomeBrew
- watchman (tip: install with brew)
- cocoapods (tip: install with brew)

  Note: please update to newer version if you already have some of the requirements above

# Getting Started


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```
yarn android
```

### For iOS

```
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Git Flow

**Branchs:** 

- Main: developers will open PRs here
- QA: PRs test
- Stage: after tested all modifications will be present here
- Prod: Live For Users

Always update your branch with develop before commit

- On develop brach use Git Pull
- go to a branch desired git rebase develop
- git commit -m "Write a message that makes sense with what you made”
- git push
- on PR please make a video of your changes and describe
- open PR
