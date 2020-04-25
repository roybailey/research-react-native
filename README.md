# research-react-native

**Research mono-repo for react-native samples**

 Status        | Description
 ------------- | ------------- 
 **STATUS**    | _Experimental_ 
 **STRATEGY**  | _Experiment_


## Design

**Folder based react-native samples**  


## Prerequisites

* XCode for iOS simulator
* Android Developer Studio for Android Simulator
* expo-cli for better react-native framework


## Getting started

**Navigate into one of the project folders and follow the README.md instructions.**

Alternatively try the following

* `npm install`
* `npm start -c`


### Fixing react-navigation

1. Install React Navigation

`npm install react-navigation`

2. Install Dependencies

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

3. Install React Navigation Stack

`npm install react-navigation-stack @react-native-community/masked-view`

4. Start the app and clear cache with npm start -c

Errors?
If you are still seeing errors and complaints about packages, do the following:

1. `rm -r node_modules`
2. `rm package-lock.json`
3. `expo upgrade`
4. `npm start -c`

Update Imports
Our imports in the upcoming lecture will now look like this:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```


### Building and Testing locally

Replace this with step by step instructions to build and run locally or within a DEV or Docker environment.

### Key Configuration

Replace this with details of where key configuration files are stored in the repository and what purpose they have.  Include a table of anything that is commonly changed between environments that might be helpful for new starter (e.g. main database properties)

Property Name  | Description
 ------------- | ------------- 
 `database`    | e.g. main database url
 `username`    | e.g. username for access to external system    


## Handover Suggestions

_Nuggets of Knowledge and Thinking from last people to work on the project._
_e.g. suggestions for technical debt reduction, simplification or enhancements_

* Use at your own risk, experimental code intended for learning, not intended for teaching or production quality 


