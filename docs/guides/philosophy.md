#Philosophy

Suitup philosophy is to allow you build apps faster with a strong enphasis on building responsive interfaces with an easy, intuitive and declarative api, but at the same time, offering the fexibility to allow you to customize your app to adapt to different requeriments.

## Intuitive Api

Everyone hates to check documentation every time you need to do something. Our components are not full of props or settings, it's easy to get the things done. If you want to extend the core components, you always can use composition and High Order Components.

## Flexibility

A goal is to offer the enough API or ways to do things that will allow you to extend or customize the functionallity for your use case.

**Small core**

Just the basic is provided. We encourage you to use composition to extend the Suitup components.

**Responsive**

Suitup puts strong enphasis on responsive, there are a lot of other React frameworks out there, but some of the famous doesn't offer good responsive tools. We tried to make this easier.

Suitup comes with "responsive inline styles", that means that you can specify styling for each screen breakpoint  in the style object, and also, you can customize your breakpoints, check the [responsive section](/responsive/devices) for more information.

The Box component, our base component to build grids, comes with responsive settings to specify the number of columns and the columns wide for every breakpoint.

Finally, every Suitup component can listen to the screen size changes. It is passes from a HOC as a prop called screen. Usually, suitup components will add a class with the same name as the breakpoint. This is useful to write responsive rules for the components without using media querys, making your code cleaner.

**Theming**

In Suitup, things like styling are done with native css (source code is written in less), while inline styling is used to implement specific functionallity that requires dinamic styles. Inline style specificity is higher than the css styling (!important is forbidden if you want to write a suitup theme), so you can override any style with pure inline styles, but at the same time, if you want to write your own css theme, you can.

*Wait, css is bad becase name collitions bla bla bla!!!?*

*Name collition is not a problem, since we don't use global utilities in our css (there are no global helpers like .right, .left, etc…), and all the css code is encapsulated in a class with the same name as the component that uses it. So, at least there is a collition name in the components names, there will be no problem with name collitions in suitup.*

Also, you can specify your color theme following the Material Design specification from the less source code, and at the same time, inject your own theme color from the settings (useful if you load your theme from an API). The color theme is not strict, if you want your app to follow this specification for all components but one, you can do it also by changing the specific per component theme file.

Is Suitup a Material Design implementation?

No! It's not, the default theme follows the Material Design specification, but the implementation is not strict at all, you can write your own not-material-design theme.

## Optimization

Suitup tries to be small, so we try to suply very basic building blocks that will allow you to build complex blocks with less code, that means, a smaller core than other frameworks. For example, this website is built using Suitup, and the gzipped bundle is only **150kb!**





