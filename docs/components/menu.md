# Menu

The Menu component implements a menu that can be hidden at left or right of the screen. It will render a vail over your content. Instead of using a trigger component, you can change the visibility of the menu by changing the `visible` prop to `true` or `false`.


```jsx
<Menu left visible={this.state.menuVisible} onHide={this.onMenuHide}>
    <Menu.Header title="Suitup UI" icon={logo}/>
    <Menu.Item hideOnRedirect href="/" text="Inicio"/>
    <Menu.Item text="Containers">
        <Menu.SubItem hideOnRedirect text="Layout" href="/layout"/>
        <Menu.SubItem hideOnRedirect text="Container" href="/container"/>
        <Menu.SubItem hideOnRedirect text="Box" href="/box"/>
    </Menu.Item>
</Menu>
```



## Props

| Prop    | Type | Description                             |
| ------- | ---- | --------------------------------------- |
| visible | bool | Make the menu visible, default is false |
| left    | bool | Display menu at left                    |
| right   | bool | Display menu at right                   |
| onHide  | func | Callback called on menu hide            |



## Subcomponents

The Menu components includes Menu.Header, Menu.Item and Menu.SubItem subcomponents. They are all optional.

### Menu.Header
Display `title` and `icon`, where the `icon` prop must be a `React.Component`.



| Prop  | type    | Description           |
| ----- | ------- | --------------------- |
| title | string  | The menu header title |
| icon  | element | The menu header icon  |





### Menu.Item
Represents a menu item that can have sub items inside or redirect.



| Prop           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| text           | string | The text in the menu item                |
| href           | string | The url to redirect                      |
| hideOnRedirect | bool   | Should hide the menu when the user clicks the item and is redirected? |



### Menu.SubItem
Represents a sub menu item. Should be children of `Menu.Item`.

| Prop           | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| text           | string | The text in the menu sub item            |
| href           | string | The url to redirect                      |
| hideOnRedirect | bool   | Should hide the menu when the user clicks the item and is redirected? |