# Scripts

The Scripts package provides a set of scripts to be imported on your web page.

### Usage

To use the Scripts package, import the component function from the package. This function returns a string representation of the rendered <script> elements.

**Example usage**:

```js
import scripts from '@standard/scripts';

// ...

const scriptsHTML = scripts();
console.log(scriptsHTML); // Output: <script src='prelude/htmx.js' async></script>
```

### Customization

The `component` function can be modified to include additional `<script>` elements as needed. Simply add the desired `<script>` elements within the function body using JSX syntax.

**Example**:

```jsx
import h, { Fragment } from '@standard/h';

function component() {
  return (
    <>
      <script src='prelude/htmx.js' async />
      <script src='custom-script.js' defer />
    </>
  );
}

export default component;
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
