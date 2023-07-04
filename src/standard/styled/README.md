# Styled

The `styled` package is a CSS-in-JS library that allows you to create and apply custom styles to JSX elements in a simple and dynamic way. It enables you to define styles using template literals and also supports the use of expressions to interpolate property values.

### Usage

To use the styled package, you can import it into your file and use the `styled.[tagName]` syntax to create and apply styles to JSX elements. See an example below:

```js
import styled from '@standard/styled'

// Define a styled component for a button
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`

// Use the styled component to render a button with different styles based on props
const App = () => {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  )
}
```

In this example, we created a styled component `Button` that takes a `primary` prop and applies a different style based on the value of this property. We used the `styled.button` syntax to create the component with styles defined in the template literal.

### How It Works

The `styled` package uses JavaScript Proxy functionality to intercept the calls and create the appropriate styled component for each tag. It combines the styles defined in the template literal with the interpolated expressions to create an object with CSS-style properties.

The result is a component that can be used in your JSX code, passing the necessary props and obtaining the applied styles as defined in the template literal.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
