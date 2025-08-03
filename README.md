# Web Component Demo: User Card

This demo showcases a simple custom web component called `<user-card>`, built using vanilla JavaScript. The component displays a user's avatar and name, and demonstrates encapsulation using the Shadow DOM.

## Features

- **Custom Element:** `<user-card>` tag for easy reuse.
- **Shadow DOM:** Styles and markup are encapsulated, preventing conflicts.
- **Dynamic Attributes:** Update the user's name and avatar via HTML attributes.
- **Responsive Design:** Simple, modern card layout.

## Usage

1. **Include the component script in your HTML:**

    ```html
    <script src="user-card.js"></script>
    ```

2. **Add the `<user-card>` element to your page:**

    ```html
    <user-card name="Jane Doe" avatar="https://randomuser.me/api/portraits/women/44.jpg"></user-card>
    ```

3. **Update attributes dynamically (optional):**

    ```javascript
    const card = document.querySelector('user-card');
    card.setAttribute('name', 'John Smith');
    card.setAttribute('avatar', 'https://randomuser.me/api/portraits/men/45.jpg');
    ```

## How It Works

- The `UserCard` class extends `HTMLElement` and attaches a shadow root.
- The template includes styles and markup for the card.
- The component observes `name` and `avatar` attributes and updates its display when they change.

## Files

- `user-card.js` – Defines the custom element.
- `index.html` – Example usage (create your own or use the snippet above).

## Requirements

- Modern browser with [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) support.

## How to run

- if your system has 'http-server' npm package installed then run 'http-server' command inside root folder. Then read the instruction in command-line to launch the app in the browser. Most probabely it'll run in localhost:8080. Double-click on 'index.html' will give a CORS error. When you double-click index.html, your browser opens the file using the folder protocol. Many browsers block JavaScript modules or fetch requests from loading local files due to security reasons (CORS policy). If user-card.js is loaded as a module or fetched, the browser treats it as a cross-origin request, which is not allowed from local files.

## License

MIT License
