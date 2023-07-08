# Asset

The Asset module provides functionality for handling static assets in your application.

### Usage

The Asset module provides two main functions:

`handle(request, env, ctx)`

This function handles the request for a static asset. It takes the following parameters:

- `request` (Request): The request object.
- `env` (object): The environment variables.
- `ctx` (object): The context object.

The function returns a Promise that resolves to a Response object containing the requested asset.

`is(request)`

This function checks if the request matches a static asset. It takes the following parameter:

- `request` (Request): The request object.

The function returns true if the request matches a static asset, or false otherwise.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
