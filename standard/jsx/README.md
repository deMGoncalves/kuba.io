# JSX

The JSX package provides a lightweight and efficient JSX rendering library for use in your projects. This package is designed to be used in a project that utilizes Yarn workspaces.

### Usage

To use the JSX package in your project, follow these steps:

1. Import the necessary dependencies:

```js
import { paint } from '@kuba/jsx'
import component from './component'
```

2. Decorate your class using the `@paint` decorator:

```js
@paint(component)
class MyClass {
  // Class implementation
}
```

The `@paint` decorator wraps your class with the specified component, enabling rendering using JSX.

3. Define your component using JSX:

```js
import jsx, { Fragment } from '@kuba/jsx'

function component() {
  return (
    <div />
  )
}

export default component

```

In this example, we define a `component` function that returns a JSX element `<div />`. The jsx function is imported from the `@kuba/jsx` package.

### JSX Rendering and Decoration

The `jsx` function provided by the JSX package allows you to render JSX elements without the need for a specific rendering library. It simplifies the process of creating and rendering JSX elements.

The `@paint` decorator wraps your class with the specified component, enabling rendering using JSX. This allows you to utilize the functionality provided by the component when rendering your class.

### Contributing

Contributions to the JSX package are welcome! If you encounter any issues, have suggestions, or would like to contribute new features or improvements, please open an issue or submit a pull request on the GitHub repository.

### License

The JSX package is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
