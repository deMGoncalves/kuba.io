# Master

The Kuba Master Template is a reusable component that serves as the base template for the Kuba website. It provides the basic structure and layout for the web pages and allows for easy integration of content.

### Usage

To use the Kuba Master Template, follow these steps:

1. Import the `component` function from the template module:

```js
import jsx from '@kuba/jsx'
import Master from '@kuba/master'
```

2. Use the `component` function to render the template:

```js
const App = () => {
  return (
    <Master>
      {/* Add your content components here */}
    </Master>
  )
}
```

3. Customize the template by adding your own content components inside the `<Master>` tags.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
