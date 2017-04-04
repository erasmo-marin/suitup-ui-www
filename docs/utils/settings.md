# Settings

The Settings util is an object wich you can use to change and suscribe to Settings changes. Ussually you would do this using the `Suitupable` HOC, that way the settings will be passed as a prop to your component. If you don't want to use a HOC for some reason, then the Settings util is available to implement the same behavior.

Settings event emmiter is implemented with the EventEmmiter from [fbEmmiter](https://github.com/facebook/emitter).

## Change the App settings

```jsx
import { Settings } from "suitup-ui";

let currentSettings = Settings.getSettings();

//mutate the setings object
currentSettings.Image.aspectRatios.square.width = 200;
currentSettings.Image.aspectRatios.square.height = 200;

//this always merge the passed settings object with the default settings
Settings.setSettings(currentSettings);

//restore to defaults
Settings.restoreToDefaults();
```



## Suscribing to Settings changes

Here is an implementation example that logs to the console settings changes.

```jsx
import { Settings } from "suitup-ui";

//do something when screen breakpoint changes
const onSettingsChange = (settings) => console.log("Settings changed! new settings are", settings);

//suscribe
let settingsListener = Settings.onSettingsChange(onSettingsChange);

//unsuscribe (you should always call this on componentWillUnmount)
settingsListener.remove();
```

