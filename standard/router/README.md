# Router

The `router` package is a JavaScript library that allows you to create and manage routes in an application. It provides a simple and intuitive way to define routes and associate them with specific actions or components.

### Usage

Here's a basic example of how to use the `router` package:

```js
import router from '@kuba/router'

router.get('/', (request, env, ctx) => /* code here */)

export default {
  fetch: router.handle
}
```

In this example, we import the router module from the `router` package and define a route for the root URL ('/'). The associated callback function, home, will be executed when a GET request is made to the root URL. The `router.handle` function is exported as `fetch`, allowing it to be used as a fetch handler.

### API

#### router

The router object is the main interface provided by the "Router" package. It has the following methods:

- `get(path: string, handler: Function)`: Defines a route for GET requests.
- `post(path: string, handler: Function)`: Defines a route for POST requests.
- `put(path: string, handler: Function)`: Defines a route for PUT requests.
- `delete(path: string, handler: Function)`: Defines a route for DELETE requests.
- `handle(request: Request, env: Environment, ctx: Context)`: Handles incoming HTTP requests and routes them to the appropriate handlers based on the defined routes.

```js
import router from '@kuba/router'
import home from './home'

router.get('/', home)

export default {
  fetch: router.handle
}
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
