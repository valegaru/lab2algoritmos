//abuelo
// importar todo de padre

import * as components from './components/index';

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
			<card-destacados>  hola </card-destacados>
			`;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
