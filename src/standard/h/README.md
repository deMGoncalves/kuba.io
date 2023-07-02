# h

The h package provides a lightweight and efficient h rendering library for use in your projects. This package is designed to be used in a project that utilizes Yarn workspaces.

### Usage

To use the h package in your project, follow these steps:

1. Import the necessary dependencies:

```js
import { paint } from '@kuba/h'
import component from './component'
```

2. Decorate your class using the `@paint` decorator:

```js
@paint(component)
class MyClass {
  // Class implementation
}
```

The `@paint` decorator wraps your class with the specified component, enabling rendering using h.

3. Define your component using h:

```js
import h, { Fragment } from '@kuba/h'

function component() {
  return (
    <div />
  )
}

export default component

```

In this example, we define a `component` function that returns a h element `<div />`. The h function is imported from the `@kuba/h` package.

### h Rendering and Decoration

The `h` function provided by the h package allows you to render h elements without the need for a specific rendering library. It simplifies the process of creating and rendering h elements.

The `@paint` decorator wraps your class with the specified component, enabling rendering using h. This allows you to utilize the functionality provided by the component when rendering your class.

### Contributing

Contributions to the h package are welcome! If you encounter any issues, have suggestions, or would like to contribute new features or improvements, please open an issue or submit a pull request on the GitHub repository.

### License

The h package is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
