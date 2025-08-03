class UserCard extends HTMLElement { // 1. Define a new class 'UserCard' that extends the built-in(web API) HTMLElement.
    constructor() { // 2. Constructor runs when an instance of the element is created.
        super(); // 3. Calls the parent HTMLElement constructor.

        //Attach shadow DOM
        /**Shadow DOM is a web standard that provides a way to encapsulate the internal DOM structure, styles, and behavior of a web component, isolating it from the main document's DOM. 
         * This encapsulation prevents CSS styles from "leaking" out of the component and affecting other parts of the page, and similarly, prevents external styles from affecting the component's internal elements.
         * Notice that 'card' class is defined in styles.css and in this component's shadow DOM. But while the styles are similar, they are completely isolated from each other due to shadow DO's encapsulation. */
        this.attachShadow({ mode: 'open' }); // 4. Creates a shadow DOM for encapsulation. 'open' allows JS access.

        //Create template
        this.shadowRoot.innerHTML = ` // 5. Sets the inner HTML of the shadow root to the component's template.
            <style>
                .card {
                    border: 1px solid #ddd;
                    padding: 1rem;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-family: sans-serif;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            </style>
            <div class="card">
                <img id="avatar" src="" alt="Avatar"> // 6. Image element for user's avatar.
                <div>
                    <h2 id="name"></h2> // 7. Heading for user's name.
                </div>
            </div>
        `;
    }

    static get observedAttributes() { // 8. Tells the browser which attributes to watch for changes.
        return ['name', 'avatar']; // 9. Watches 'name' and 'avatar' attributes.
    }

    attributeChangedCallback(name, oldValue, newValue) { // 10. Called when observed attributes change.
        if(name==='name') {
            this.shadowRoot.getElementById('name').textContent = newValue; // 11. Updates name in shadow DOM.
        } else if(name==='avatar') {
            this.shadowRoot.getElementById('avatar').src = newValue; // 12. Updates avatar image src.
        }
    }

    connectedCallback() { // 13. Called when the element is added to the DOM.
        this.shadowRoot.getElementById('name').textContent = this.getAttribute('name'); // 14. Sets initial name.
        this.shadowRoot.getElementById('avatar').src = this.getAttribute('avatar'); // 15. Sets initial avatar.
    }
}
// Define the custom element
customElements.define('user-card', UserCard); // 16. Registers the 'user-card' tag with the browser.