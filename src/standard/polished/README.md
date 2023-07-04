# Polished

Polished is a JavaScript utility library that complements styled-components, a popular CSS-in-JS library, by providing a set of functions to work with colors, typography, and other styling operations. It aims to simplify and enhance your CSS-related tasks when using styled-components in JavaScript applications.

### Usage

To use Polished alongside styled-components in your project, import the functions you need and use them in your styled components:

```js
import { color } from '@standard/polished'
import styled from '@standard/styled'

const Button = styled.button`
  color: ${color};
`;
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
