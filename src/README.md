# src

The `src` folder contains the main files and components of the project. This is where most of the development and implementation of the application takes place.

### Files

- `index.js`: The main entry file of the project. Here, initial configurations are made, and essential modules are imported. Additionally, routing is handled through the `@standard/router` module.

### Modules

- `@pixel/reset`: Module that contains reset styles to ensure a consistent base for styling all elements of the application.
- `@pixel/tokens`: Module containing CSS tokens, such as color variables, spacing, typography, and other settings that can be reused throughout the application.

### Pages

- `@pages/home`: Module that contains the home page of the application. This is the page displayed to users when they access the website.

### Export

The object exported in the `index.js` file is a configuration for the application's entry point. It defines an object with a `fetch` property, which is assigned to the handle method of the `@standard/router` module. This configuration allows for handling route requests at the application's entry point.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
