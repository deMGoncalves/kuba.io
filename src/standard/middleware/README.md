# Middleware

The middleware function is a utility that allows you to apply middleware to a class constructor. It provides a way to execute custom logic before or after the instantiation of the class, enabling you to modify or augment the instance as needed.

### Usage

To use the middleware function, you need to import it into your code:

```js
import middleware from '@kuba/middleware'
```

### Applying Middleware

The `middleware` function takes a middleware function as its argument and returns a decorator function. This decorator function can be applied to a class constructor using the `@` syntax.

Here's an example of how to apply middleware to a class:

```js
function myMiddleware(instance, next) {
  // Custom logic goes here
  // Modify or augment the instance as needed
  next(); // Call the next middleware or resolve the promise
}

@middleware(myMiddleware)
class MyClass {
  // Class definition goes here
}
```

In the example above, the `myMiddleware` function is applied to the `MyClass` constructor using the `@middleware` decorator. The `myMiddleware` function receives the instance of the class and a `next` callback function. Inside the middleware function, you can perform any custom logic on the instance, such as adding properties or invoking methods. The `next` function is used to indicate when the middleware has finished its execution. If there are multiple middleware functions, the `next` function should be called to pass control to the next middleware or resolve the promise.

### Accessing Class Methods and Properties

The `middleware` function preserves access to the class methods and properties. You can use them within the middleware function by referencing the `instance` parameter.

```js
function myMiddleware(instance, next) {
  // Access class methods and properties
  instance.myMethod();
  console.log(instance.myProperty);
  next();
}
```

### Asynchronous Middleware

If the middleware function needs to perform asynchronous operations, you can use `async`/`await` or return a promise. The middleware execution will wait for the asynchronous operations to complete before moving on to the next middleware or resolving the promise.

```js
async function myAsyncMiddleware(instance, next) {
  // Perform asynchronous operations
  await someAsyncOperation();
  next();
}
```

### Example

Here's a complete example to illustrate the usage of the `middleware` function:

```js
import middleware from 'middleware';

function myMiddleware(instance, next) {
  console.log('Before instantiation');
  instance.myMethod();
  next();
  console.log('After instantiation');
}

@middleware(myMiddleware)
class MyClass {
  myMethod() {
    console.log('Hello from myMethod');
  }
}

const instance = new MyClass();
// Output:
// Before instantiation
// Hello from myMethod
// After instantiation
```

In the example above, the middleware function `myMiddleware` logs a message before and after the instantiation of the `MyClass` instance. The `myMethod` method of `MyClass` is invoked within the middleware.

### Conclusion

The `middleware` function provides a flexible way to apply middleware to class constructors. By using this utility, you can easily incorporate custom logic before or after the instantiation of a class, allowing you to modify or enhance the behavior of the instances.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
