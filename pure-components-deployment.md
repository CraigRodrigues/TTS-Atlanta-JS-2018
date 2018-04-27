# Pure Components, Firebase Deployment and Extra Resources

## Pure Components

`React.PureComponent` is similar to `React.Component` but the difference between the two is that `React.Component` does not implement `shouldComponentUpdate()` on its own, but Pure Components implement is automatically with a shallow prop and state comparison.

By default, a plain `React.Component` has `shouldComponentUpdate` set to always return true. This is good because it means React errs on the side of always updating the component in case there’s any new data to show. However, it’s bad because it means React might trigger unnecessary re-renders. One way to deal with these extra re-renders is to change the `shouldComponentUpdate` function to check when your component needs to update.

If your React component’s `render()` function renders the same result given the same `props` and `state`, you can use `React.PureComponent` for a performance boost in some cases.

### Shallow Comparison

A shallow equality check means that JS only checks that the value’s object ids (as in, the memory address for where JS stores the information for that particular object) are the same, not that their content is the same. So here’s an example where shallow equality is what you and I would usually think of as “equal”:

```javascript
const value = 'cat';

const item1 = value;
const item2 = value;

console.log(item1 === item2); // true
```

And here’s an example where JS’s definition of “equal” and our definition might differ:

```javascript
const value = 'cat';

const array1 = [value];
const array2 = [value];

console.log(array1 === array2); // false
```

Even though we can clearly see the content of array2 is the same as array1 JS registers them as different since their ids are different. In this case we created two completely separate arrays, that just happened to have the same data in them.

### `shouldComponentUpdate(nextProps, nextState)`

Use `shouldComponentUpdate()` to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

`shouldComponentUpdate()` is invoked before rendering when new props or state are being received. Defaults to true.

Returning false does not prevent child components from re-rendering when their state changes.

Currently, if `shouldComponentUpdate()` returns false, then `componentWillUpdate()`, `render()`, and `componentDidUpdate()` will not be invoked.

### Pure Component Pitfalls

[Link Here to Blog Post](https://blog.shakacode.com/react-purecomponent-pitfalls-d057882f4b6e)

## Firebase Deployment

[https://youtu.be/jsRVHeQd5kU](https://youtu.be/jsRVHeQd5kU)

### Initialize

The very first thing we need to do is to install Firebase CLI (Command Line Interface) globally so that we can access firebase from any directory. Make sure you have node.js and npm installed. Open terminal or command prompt and run the following command.

`npm install -g firebase-tools`

Make sure you are in the root folder of your project. Now run the below command:

`firebase init`

Running the above command will walk you through the setup process. First of all, it will ask you to select Firebase CLI features.

There are only 2 we care about here:

1.  Firestore
1.  Hosting

You can select an option by pressing Space key on your keyboard.

![Firebase CLI](./images/firebase-deploy-01.png)

Next, Firebase will ask you to select a project from among the one’s you have already created or just create a new one. I already have my project on Firebase, so I will just select that one.

Then, Firebase will ask you to name the firestore rules file. Just press Enter and Firebase will create a `firestore.rules.json` file in the project root directory. If you have already specified firestore rules in Firebase, then those will be copied to `firestore.rules.json` file.

Lastly, Firebase will ask to specify a folder which will contain all the files to be deployed to Firebase Hosting. By default directory name will be `public` but you can type in a different name. In our case Create React App provides a simple command `npm run build` to create a compressed version of the app into the build folder.

So type in `build` for the Firebase public folder. Press Enter and Firebase setup should complete successfully.

![Firebase CLI Build](./images/firebase-deploy-02.png)

### Deploy

To deploy your app, type the below command in terminal and press Enter.

`firebase deploy`

If everything goes well, you should see `$ deploy complete` and you should get hosting URL (live app URL). Firebase also provides an option to use custom URL which we won’t be covering.

The dashboard on `www.firebase.google.com` allows for easy rollbacks and usage stats.

## Extra Resources

- [Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap)
- [React/Redux Resources](https://github.com/mlubovac/react-redux-resources)
- [React/Redux Links](https://github.com/markerikson/react-redux-links)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [JavaScript Understanding the Weird Parts](https://www.udemy.com/understand-javascript/)
- [Syntax Podcast](https://syntax.fm/)
- [Javascript Jabber Podcast](https://devchat.tv/js-jabber)
- [Code Newbie Podcast](https://www.codenewbie.org/podcast)
- [Professional JavaScript for Web Developers](https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas-ebook/dp/B006PW2URI)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [Atlanta JS Meetup](https://www.meetup.com/AtlantaJavaScript/)
- [Frontend Masters](http://www.frontendmasters.com)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
