Sort of forked-copied from [this repository](https://github.com/planetoftheweb/reactinterface/).

## Using Components

* Imported `react` and `react-dom`
* Added a component that uses JSX
* Rendered out component and added the div with the corresponding ID to the `index.html`

## Working with State

* Added a `state` to the `MainInterface` component and added an expression in the `render`'s `return` function to show it
* Used a ternary operator in the context of showing state (and then promptly erased it)
* Used a variable as an expression value
* modified CSS using react and variables

The ternary operator was deleted during the tutorial, here it is for example's sake:

```js
{this.state.show ? 'Pet': null}
```

## Complex Data

* Added a JSON list of items to the state
* Added JSX to the interface that pulls from the state json (using hard `data[0]` property access)
* Added a `filteredApts` variable which has a `map()` function, used to filter items
* Moved the repeatable JSX from the main `render` area to the `filteredApts`
* Because the code is within the `map` function, `this` takes a different meaning. (It now refers to the `Window` object.) This is fixed by using `.bind(this)` to the end of the `map`.
