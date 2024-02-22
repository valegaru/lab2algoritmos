//abuelo
import * as components from './components/index.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
			<card-destacados></card-destacados>
			<my-banner></my-banner>
			`;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
