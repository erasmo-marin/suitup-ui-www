# Screen

The Screen util is an object wich you can use to suscribe to Screen  breakpoints changes. Ussually you would do this using the `Suitupable` HOC, that way the screen will be passed as a prop to your component. If you don't want to use a HOC for some reason, then the Screen util is available to implement the same behavior.

Screen event emmiter is implemented with the EventEmmiter from [fbEmmiter](https://github.com/facebook/emitter).

## Suscribing to Screen breakpoints changes

Here is an implementation example that logs to the console breakpoints changes.

```jsx
import { Screen } from "suitup-ui";

//do something when screen breakpoint changes
const onScreenChange = (screen) => console.log("Screen changed! current breakpoint is", screen);

//suscribe
let screenListener = Screen.onScreenChange(onScreenChange);

//unsuscribe (you should always call this on componentWillUnmount)
screenListener.remove();


```


## Methods

| Method         | Description                            | Args                                     | Returns                                  |
| -------------- | -------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| onScreenChange | Suscribe to Screen breakpoints changes | callback: the callback function when screen changes | a new [fbEmmiter](https://github.com/facebook/emitter) listener |