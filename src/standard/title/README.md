# Title

The `Title` package is responsible for managing the title of the web page. It provides a convenient way to set and update the title dynamically, allowing developers to control what appears in the browser's title bar.

### Usage

The `Title` package provides a class called `Title`, which can be imported and used in your application. Here's how you can use it:

```js
import Title from '@standard/title'

// To set the initial content of the title
Title.change('My Web App')

// To update the title content dynamically
Title.change('New Page Title')
```

### How It Works

The `Title` class is decorated with the `@paint` decorator, which associates it with the `view` module for rendering purposes. This allows the `Title` class to be used as a component and its view to be rendered in the application.

The `Title` class contains a private property `#content` that holds the current title content. The `content` getter provides a way to access the title content and ensures that the default value **Kuba** is used if no content has been set.

The static method `change(newContent)` allows you to update the title content dynamically. Simply call `Title.change('New Title')` to change the title displayed in the browser's title bar.

Please note that the actual rendering of the title is handled by the view module, and you don't need to worry about that part in your application code.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
