# Paragraph

The paragraph component is a component that displays a `p` or a text text placeholder.

To display text placeholder you should set the prop `loading` to true and set the `placeholder` prop options.

Example

```jsx
<P loading={this.state.loading} placeholder={{
	rows: 5, //numbers of fake rows to display
    justify: false, //expand or not the lines to 100% width
 	lineSpacing: 15, //in pixels
    fontSize: 16, //in pixels
    color: 'rgba(0,0,0,0.05)', //default font color
    rounded: false //this will add a border radius to rows
}}>{this.state.text}</P>
```