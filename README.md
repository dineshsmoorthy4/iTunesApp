This is a iTunesApp (React Native CLI + TypeScript) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

A white-labeled album viewer mobile app built using React Native CLI and TypeScript. The app fetches albums from iTunes API, supports offline usage with Redux persist, and is optimized for multiple device sizes and orientations.

- 🎨 White-labeled product structure (SDK-ready)

- 📱 Supports portrait & landscape modes (phone + tablet/iPad)

- 🌐 Fetches album list from iTunes public API

- 💾 Works in offline mode using persisted Redux store

- 🔎 View album details

- ✅ Fully typed with TypeScript

- 🧪 Includes unit tests using Jest


# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start 
```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npx
npx react-native run-android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
npx pod-install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npx
npx react-native run-ios

# OR using Yarn
yarn ios
```
### 3rd Party Frameworks Used
| Library	| Purpose	| Pros	| Cons	| Alternatives |
| :---: | :---: | :---: | :---: | :---: |
| axios	| API handling	| Simpler syntax, interceptors |	Slightly larger than fetch	| fetch |
| redux, @reduxjs/toolkit	| State management	| Scalable, DevTools	| Slight boilerplate	| context API, Zustand |
| redux-persist	| Offline storage for Redux	| Seamless storage	| Initial complexity	| SQLite, MMKV |
| @react-navigation/native	| Navigation	| Community standard	| Requires setup	| react-native-router-flux |
| @react-native-async-storage/async-storage	| Local storage	| Easy persist integration	| No encryption	| SecureStore |
| jest, @testing-library/react-native	| Unit testing	| Native testing API	| Requires mocks	| Mocha, Detox (E2E) |
| react-native-reanimated	| UI performance improvements	| Great animations	| Requires Babel config	| react-native-animatable |

### Project Structure
```
iTunesApp/
├── src/
│   ├── api/
│   │   ├── albumService.ts
|    ├── assets/
│   ├── features/
│   │   ├── albums/
│   │   │   ├── AlbumDetails.tsx
│   │   │   └── AlbumList.tsx
│   │   │   └── albumSlice.ts
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   ├── redux/
│   │   └── store.ts
├── App.tsx
├── jest.config.js
├── babel.config.js
├── metro.config.js
├── package.json
└── README.md
```

### Device Compatibility

- Tested on iPhone 13 (iOS 15), Pixel 6 (Android 13)

- Supports Portrait & Landscape

- Optimized using Flexbox and SafeAreaView

- Responsive layout using percentage widths and Dimensions API

###  Future Improvements

- Add image caching for offline album thumbnails

- Dark mode theming

- UI polish with reusable components

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
