# http

The `http` package is a lightweight utility for making HTTP requests in JavaScript. It provides a simple and intuitive interface for performing common HTTP operations such as GET, POST, and more. It also includes support for handling responses in various formats like JSON and Blob.

### Usage

To use the `http` package, you need to import it into your JavaScript or TypeScript file:

```js
import http from '@kuba/http'
```

### Making GET Requests

You can make GET requests using the `http.get()` method:

```js
const { data, errro } = await http.get('https://api.example.com/data').json()
```

### Making POST Requests

You can make POST requests using the `http.post()` method:

```js
const user = { name: 'John Doe', email: 'john.doe@example.com' };
const { data, error } = await http
  .post('https://api.example.com/users')
  .headers({ 'Content-Type': 'application/json' })
  .body(user)
  .json()
```

### Handling Blobs

You can handle Blob responses using the `http.blob()` method:

```js
const { data, error } = await http.get('https://api.example.com/image').blob()
```

### Additional Methods

The `http` package also supports additional methods like `cache()`, `mode()`, `signal()`, and more. These methods allow you to customize the request further based on your specific requirements.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
