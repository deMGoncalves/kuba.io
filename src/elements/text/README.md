# text

The `text` package is a utility for generating styled text components with dynamic styles based on the properties accessed. It leverages the `styled` module from the `@standard/styled` package and applies various text-related properties, such as `color`, `family`, `size`, `weight`, and `align`.

### Usage

Here's an example of how you can use the @standard/text package:

```js
import h from '@standard/h'
import text from '@standard/text'

const App = () => {
  return (
    <div>
      {/* Example of using text.H1 */}
      <text.H1 master darker xxxs base bold>
        kuba.io
      </text.H1>

      {/* More examples can be added here */}
    </div>
  )
}

export default App
```

In this example, we import the `text` object from the `@standard/text` package. We then use the `text.H1` component, which is one of the dynamically generated styled text components. The properties `master`, `darker`, `xxxs`, `base`, and `bold` are accessed via the Proxy object to apply specific styles to the `H1` component.

### Available Styled Text Components

The `@standard/text` package exposes several styled text components with dynamic styles based on the accessed properties:

- `text.H1`
- `text.H2`
- `text.H3`
- `text.H4`
- `text.H5`
- `text.H6`
- `text.P`
- `text.Span`

Each component accepts specific properties to control its styling.

### Component Properties

The styled text components accept the following properties:

- `color`: The text color.
- `family`: The font family.
- `size`: The font size.
- `weight`: The font weight.
- `align`: The text alignment.

Please refer to the component examples above for more details on how to use these properties.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
