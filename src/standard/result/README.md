# Result

The `Result` package provides an enum-like object for representing result values in JavaScript. It includes symbols for error and success outcomes, allowing you to handle the result of a computation or operation in a concise and expressive way.

### Usage

The `Result` package exports an object with two symbols, `Error` and `Ok`, that represent error and success outcomes, respectively. You can use these symbols to indicate the result of a function or operation.

Here's an example of how to use the `Result` package:

```js
import Result from '@your-package/result';

function fetchData() {
  // Simulating an error condition
  if (/* error condition */) {
    return Result.Error;
  }

  // Successful result
  return Result.Ok;
}

const result = fetchData();

if (result === Result.Error) {
  console.log('An error occurred.');
} else if (result === Result.Ok) {
  console.log('Data retrieved successfully.');
}
```

In the above example, the `fetchData` function simulates a data retrieval operation. If an error condition is encountered, it returns the `Result.Error` symbol. Otherwise, it returns the `Result.Ok` symbol to indicate a successful result. You can then use a conditional statement to handle the different outcomes based on the returned result.

### API

`Result.Error`

Symbol representing an error outcome.

`Result.Ok`

Symbol representing a successful outcome.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
