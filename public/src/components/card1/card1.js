class card1 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['lo que es dinamico'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangeCallback(propName, oldValue, newValue) {}

	render() {
		this.shadowRoot.innerHTML = <link rel='stylesheet' href='./src/components/card1/card1.css'></link>;
	}
}

customElements.define('card-destacados', card1);
export default card1;
