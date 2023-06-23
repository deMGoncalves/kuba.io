# css

The CSS package is a lightweight utility that simplifies working with CSS code in JavaScript projects. It provides a convenient way to write CSS directly in your JavaScript code using tagged template literals.

### Usage

To use the CSS package, you can import the `css` function and use it as a tagged template literal. Here's an example of how to use it:

```js
import css from '@kuba/css';

const styles = css`
  .container {
    margin: 0 auto;
    padding: 16px;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
  }
`;

// Use the generated CSS code as desired
console.log(styles);
```

The `css` function allows you to write your CSS code directly within the template literal, just like writing regular CSS. It provides a convenient way to encapsulate your styles and ensures they are properly scoped within your components.

### Benefits

- **Simplicity**: The CSS package simplifies the process of writing and managing CSS code in JavaScript projects. You can write CSS styles directly within your JavaScript code using tagged template literals, eliminating the need for separate CSS files.
- **Encapsulation**: The styles defined using the css function are automatically scoped to the component or module where they are used. This helps prevent style leakage and naming conflicts across different parts of your application.
- **Code Organization**: By keeping your CSS code within your JavaScript files, you can keep related styles and logic together, leading to improved code organization and easier maintenance.
- **Performance**: The CSS package optimizes the generated CSS code by removing unnecessary whitespace and applying other performance optimizations. This results in smaller file sizes and faster loading times for your web applications.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
