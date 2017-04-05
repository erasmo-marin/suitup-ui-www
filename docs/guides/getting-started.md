# Getting Started

Some [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/index.html) and [React](https://facebook.github.io/react/) knowledge is required before you start writing awesome apps with Suitup. We recommend you to learn that first before start using Suitup. If you already know or you are just curious, you can move to the next step.

## Adding Suitup to my existing project

Installing suitup to your project is easy. The only requeriments are to install some [peer-dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) first.

```bash
$ npm install react react-dom react-router-dom --save
$ npm install suitup-ui --save
```

Then import the components you need:

```jsx
import { Layout, Box, Button } from "suitup-ui";

const myComponent = ({onClick}) => (
   <Layout>
    	<Box columns={12}>
          <Box.Child wide={12}>
            <Button flat inverted onClick={onClick}>
              Hi from Suitup!
            </Button>
          </Box.Child>
        </Box>
   </Layout>
)


```





## Usage 

Suitup contain 3 types of objects, Components, Containers and Utils. Components are React components that show something, an example of a Component is a `Button`. Containers are React components where you place components, an example of a Container is `Box`. Finally, Utils are collections of functions to do something useful. An example of Util is the `Scroll` util.

**Layout Container**

The most important container is Layout, it is the app container that will handle the mount and dismount of all the element that needs to be outside the app flow for different reasons. A very recurrent problem with React Components that needs to be drawn outside the parent container in an absolute positioning is the parent styling. For example, if you want to place a tooltip with an absolute positioning but relative to the parent, the parent must have `position: relative` and the overflow can't be hidden. But sometimes your components styles needs it. The same applies to modals and 

Suitup solves this issue by mounting those components in a container outside your app container. So, you can do things like this without worries, because the Modal component just request the mount to Layout instead mounting itself inside the div:

```jsx
<div style="overflow:hidden">
   <Modal></Modal>
</div>
```

**React router dependencie**

We choosed react-router-dom@4.0 as the Suitup router. If you are going to use any component that requires react-router-dom, then you will need to place the `Layout` component inside a `Router` component.

```jsx
<Router>
	<Layout>
		<MyRoutes/>
	</Layout>
</Router>
```

Components that require react-router-dom are:

1. **Menu.Item** and **Menu.SubItem**
2. **Navbar.Menu** and **Navbar.Submenu**

**Importing theme**

We include the default theme in the package. If you are using webpack, you can add the css loader to load it.

```jsx
import "suitup-ui/dist/suitup.ui.min.css";
```

Also, the less source code is included, so you can also load it if you have the less loader:

```jsx
import "suitup-ui/src/styles/index.less";
```



## Start from scratch using the boilerplate (comming soon)

We will provide a boilerplate with Suitup, Express framework, webpack 2 and hot reloading enabled and ready to work. Also, it's ready for production.

Just clone the project, install the dependencies and you are done. We recommend you to use yarn instead of npm, you will find that the scripts in the scripts section in package.json uses yarn, if you don't want to use yarn, just change it to npm.

```bash
$ git clone [repo] myProject
$ cd myProject
$ yarn
$ yarn run serve #Start in dev mode at port 3000
$ yarn start #Start in production mode with pm2 at port 3000
```

## Customize

