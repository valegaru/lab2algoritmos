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
		<link rel='stylesheet' href='./src/index.css'></link>
		<nav>
		<header>
		<div id="logonintendo">
    <svg viewBox="0 0 97 24" xmlns="http://www.w3.org/2000/svg" width="69" role="presentation" alt="" data-testid="NintendoRacetrackLogoIcon" size="69" color="currentColor">
        <path d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z" fill="currentColor"></path>
    </svg>
</div>

			<form id="busqueda">
			<button aria-haspopup="dialog">
					<svg data-name="Magnifying glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" role="presentation" alt="" data-testid="MagnifyingGlassIcon" size="18" color="currentColor">
							<path d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z" fill="currentColor"></path>
					</svg>
					<span>Buscar</span>
			</button>
			<div>
					<div>
							Todas las categorias
							<input id="react-select-1058-input" tabindex="0" inputmode="none" value="" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" aria-label="Todas las categorias" role="combobox" aria-readonly="true">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="14" role="presentation" alt="" data-testid="ChevronDownIcon" size="14" color="currentColor">
									<path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path>
							</svg>
					</div>
			</div>
	</form>

	<a id="soporte">
    <span >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" role="presentation" alt="" data-testid="SupportIcon" size="18" color="currentColor">
            <path d="M28.126.862H3.876A3.904 3.904 0 0 0 0 4.757v17.838a3.905 3.905 0 0 0 3.875 3.896h8.375c.125 0 .125 0 .125.125l3.626 4.397a.122.122 0 0 0 .125.125c.125 0 .125 0 .25-.125L20 26.616a.122.122 0 0 1 .124-.125h8.001A3.904 3.904 0 0 0 32 22.595V4.757A3.903 3.903 0 0 0 28.126.862zM17.954 20.91a2.018 2.018 0 0 1-.438.64 2.062 2.062 0 0 1-1.446.58 2.092 2.092 0 0 1-.802-.154 1.944 1.944 0 0 1-.652-.43 1.98 1.98 0 0 1-.427-.642 2.119 2.119 0 0 1-.001-1.59 1.97 1.97 0 0 1 .43-.65 2.055 2.055 0 0 1 .643-.432 2.078 2.078 0 0 1 1.613 0 2.152 2.152 0 0 1 .64.428l.002.001a2.045 2.045 0 0 1 .438 2.25zm2.964-10.055a4.505 4.505 0 0 1-.662 1.159 5.04 5.04 0 0 1-.861.844l-.822.622a6.01 6.01 0 0 0-.626.538.766.766 0 0 0-.231.426l-.303 1.923h-2.517l-.222-2.13a1.824 1.824 0 0 1 .193-1.127 3.152 3.152 0 0 1 .648-.812 7.965 7.965 0 0 1 .838-.658 6.94 6.94 0 0 0 .782-.626 3.116 3.116 0 0 0 .574-.716 1.726 1.726 0 0 0 .208-.873 1.287 1.287 0 0 0-.112-.55 1.213 1.213 0 0 0-.318-.414 1.482 1.482 0 0 0-.506-.275 2.946 2.946 0 0 0-1.628.018 3.595 3.595 0 0 0-.666.277 8.824 8.824 0 0 0-.49.294.966.966 0 0 1-1.483-.33l-.872-1.378.24-.212a8 8 0 0 1 .86-.657 6.234 6.234 0 0 1 1.023-.55 6.4 6.4 0 0 1 1.192-.37 6.63 6.63 0 0 1 3.248.15 4.301 4.301 0 0 1 1.475.826 3.736 3.736 0 0 1 .966 1.314 4.161 4.161 0 0 1 .34 1.703 4.304 4.304 0 0 1-.268 1.584z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    </span>
    <span >
        Soporte
    </span>
</a>

<a id="deseos">
    <span >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" role="presentation" alt="" data-testid="HeartIcon" size="18" color="currentColor">
            <path d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
        </svg>
    </span>
    <span>
        Lista de deseos
    </span>
</a>

<a id="iniciosesion">
    <span >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" role="presentation" alt="" data-testid="UserIcon" size="18" color="currentColor">
            <path d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84" fill="currentColor"></path>
        </svg>
    </span>
    <span>
        Iniciar sesión / Regístrate
    </span>
</a>

<img
	src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagColombiaIconRegionSelect.png"
	alt="Flag of Colombia"
	loading="lazy"
/>

	</header>


	<section id="subnav">
	<button id="juegos">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="DPadIcon" size="16" color="currentColor">
            <path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
        </svg>
    </span>
    <span>
        Juegos
    </span>
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation" alt="" data-testid="ChevronDownIcon" size="12" color="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path>
        </svg>
    </span>
</button>

<button id="NintendoSwitch">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="SwitchIcon" size="16" color="currentColor">
            <path d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    </span>
    <span>
        Nintendo Switch
    </span>
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" role="presentation" alt="" data-testid="ChevronDownIcon" size="12" color="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path>
        </svg>
    </span>
</button>

<button id="noticias">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="NewsIcon" size="16" color="currentColor">
            <path fill="currentColor" d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"></path>
        </svg>
    </span>
    <span>
        Noticias y eventos
    </span>
</button>

	</section>
			</nav>

<section id="banner">
<img
	src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Mario-vs-Donkey-Kong/2200x2000___Mario_vs_Donkey_Kong_KeyArt_Centerstage_Mobile"
	class="Herostyles__ResponsivePicture-sc-125901u-8 fKrlqM hero-image"
	loading="eager"
/>


<div id="abajobanner">

	<h2>¡Una clásica rivalidad ha regresado!</h2>
	<button type="button" id="botonbanner">Disponible ya</button>


	<div id="foreveryone">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 45.35 68.03"
			width="45"
			height="68"
			role="img"
			title="Clasificado para niños y adultos"
		>
			<defs>
				<style>
					.cls-1 {
						fill: #fff;
					}
				</style>
			</defs>
			<g data-name="Layer 2">
				<g data-name="Layer 1">
					<path class="cls-1" d="M45.35 0H0v68.03h45.35V0z"></path>
					<path d="M44.7.7v66.63H.66V.7H44.7"></path>
					<path
						class="cls-1"
						d="M2.73 2.75h39.88v18.67H2.73zm0 20.76h39.88v34.17H2.73zm0 41.75v-5.49h8.01v1.29H5.95v.78H10v1.28H5.95v.86h4.98v1.28h-8.2zm15-3.89a.62.62 0 00-.47-.37 2.9 2.9 0 00-.83-.1c-.71 0-1 .12-1 .32 0 .81 5.64.3 5.64 2.3 0 1.27-1.89 1.89-4.59 1.89s-4.28-.85-4.35-1.84h3.08a.77.77 0 00.53.43 3 3 0 00.92.14c.8 0 1.34-.14 1.34-.4 0-.83-5.65-.26-5.65-2.35 0-1.17 1.8-1.75 4.25-1.75 2.73 0 4 .77 4.21 1.73zm8.14.78h1.27c1 0 1.52-.14 1.52-.52s-.54-.57-1.29-.57h-1.5zm0 1.2v1.91h-3.22v-5.48h4.64c3.27 0 4.34.5 4.34 1.56 0 .64-.5 1.16-1.64 1.35 1 .21 1.66.34 1.66 1.44 0 .72 0 1 .34 1v.17h-3.26a2.12 2.12 0 01-.16-1c0-.72-.22-.95-1.72-.95zm10.96-2.29V62h1.34c.64 0 1.1-.17 1.1-.48s-.63-.44-1.31-.44zm0 1.91v1h1.4c.8 0 1.4-.09 1.4-.5s-.75-.47-1.78-.47zm-3.22 2.29v-5.48h4.69c2.22 0 4 .29 4 1.38 0 .56-.65 1-1.28 1.19 1.06.15 1.63.67 1.63 1.25 0 1.23-1.67 1.66-4.22 1.66z"
					></path>
					<path
						d="M8.7 31.51l19.89-5.93 2 6.28-9.97 2.97.82 2.57 9.21-2.74 1.99 6.29-9.21 2.73.86 2.71 10.3-3.06 1.99 6.28-20.22 6.02L8.7 31.51M3.83 11.05V4.82h2.54v1H4.8v1.5h1.45v1H4.8v1.78h1.63v1zm2.86-6.23h1l.73 4.54.82-4.54h1L9 11.05H7.84zm3.97 6.23V4.82h2.55v1h-1.57v1.5h1.45v1h-1.45v1.78h1.62v1zm4.19 0h-1V4.82h1.8a.92.92 0 01.8.42 2.05 2.05 0 01.3 1.22 2.31 2.31 0 01-.2 1 .9.9 0 01-.67.52V8l.22.05a.62.62 0 01.28.16.91.91 0 01.24.36 1.61 1.61 0 01.11.66v1.49a2 2 0 00.06.33h-1a1.87 1.87 0 01-.1-.59V9.32a1.46 1.46 0 00-.06-.44.56.56 0 00-.21-.29.66.66 0 00-.42-.12h-.26zm0-3.53h.44a.34.34 0 00.24-.09.57.57 0 00.15-.22 1.32 1.32 0 00.09-.3V6.6a1.08 1.08 0 00-.12-.6.39.39 0 00-.36-.19h-.44zm3.41 1.38L17 4.82h1.07l.69 2.64.75-2.64h1L19.24 8.9v2.15h-1zm4.3 2.26a1.43 1.43 0 01-.93-.27 1.56 1.56 0 01-.48-.73 3.89 3.89 0 01-.17-1V6.77a3.89 3.89 0 01.17-1 1.53 1.53 0 01.48-.77 1.75 1.75 0 011.87 0 1.53 1.53 0 01.48.72 4.34 4.34 0 01.17 1v2.39a4.34 4.34 0 01-.17 1 1.56 1.56 0 01-.48.73 1.44 1.44 0 01-.94.32zm0-.93a.42.42 0 00.33-.14.79.79 0 00.19-.41 3.88 3.88 0 00.09-.68V7a3.88 3.88 0 00-.09-.71.75.75 0 00-.19-.41.42.42 0 00-.33-.14.45.45 0 00-.33.14.83.83 0 00-.18.41 3.88 3.88 0 00-.09.71v2a3.88 3.88 0 00.09.71.87.87 0 00.18.41.45.45 0 00.33.11zm2.44.82V4.82h1.32l1.24 4.32V4.82h.91v6.23h-1.31L25.89 6.5v4.55zm4.27 0V4.82h2.55v1h-1.57v1.5h1.45v1h-1.45v1.78h1.62v1zM7 13.14v1H5.89v5.17h-1v-5.14H3.83v-1zm2 6.31a1.43 1.43 0 01-.93-.27 1.53 1.53 0 01-.48-.72 4 4 0 01-.17-1v-2.38a3.88 3.88 0 01.17-1 1.53 1.53 0 01.48-.72A1.43 1.43 0 019 13a1.43 1.43 0 01.93.27 1.53 1.53 0 01.48.72 3.87 3.87 0 01.18 1v2.38a4 4 0 01-.18 1 1.53 1.53 0 01-.48.72 1.43 1.43 0 01-.93.36zm0-.93a.42.42 0 00.33-.13.92.92 0 00.18-.39 4 4 0 00.08-.71v-2a4 4 0 00-.08-.71.92.92 0 00-.19-.41.48.48 0 00-.66 0 .92.92 0 00-.18.41 3.16 3.16 0 00-.09.71v2a3.16 3.16 0 00.09.71.92.92 0 00.18.41.42.42 0 00.34.11zm2.4-5.38H13a1.3 1.3 0 01.77.21 1.34 1.34 0 01.46.6 3.16 3.16 0 01.22 1 10.16 10.16 0 01.06 1.29v1.24a4.16 4.16 0 01-.12.69 1.63 1.63 0 01-.26.6 1.24 1.24 0 01-1.14.6H11.4zm1 5.25h.47a.57.57 0 00.36-.11.74.74 0 00.22-.38 3.22 3.22 0 00.11-.66v-1.81a4.1 4.1 0 00-.08-.68 1.18 1.18 0 00-.2-.48.49.49 0 00-.39-.17h-.51zm4.49 1.06a1.43 1.43 0 01-.93-.27 1.53 1.53 0 01-.48-.72 3.58 3.58 0 01-.17-1v-2.38a3.51 3.51 0 01.17-1 1.53 1.53 0 01.48-.72 1.43 1.43 0 01.93-.27 1.43 1.43 0 01.93.27 1.53 1.53 0 01.48.72 3.87 3.87 0 01.18 1v2.38a4 4 0 01-.18 1 1.53 1.53 0 01-.48.72 1.43 1.43 0 01-.93.27zm0-.93a.42.42 0 00.33-.13.92.92 0 00.19-.41 4 4 0 00.08-.71v-2a4 4 0 00-.08-.71.92.92 0 00-.19-.41.48.48 0 00-.66 0 .92.92 0 00-.18.41 3.16 3.16 0 00-.09.71v2a3.16 3.16 0 00.09.71.92.92 0 00.18.41.42.42 0 00.33.13zm5.28-.87a2.54 2.54 0 01-.15 1 1.25 1.25 0 01-.38.54 1.07 1.07 0 01-.53.24 2.76 2.76 0 01-.57.06 1.43 1.43 0 01-.73-.17 1 1 0 01-.43-.44 1.78 1.78 0 01-.19-.64 4.82 4.82 0 010-.77h1v.42a1.7 1.7 0 00.06.35.45.45 0 00.17.23.48.48 0 00.31.09.4.4 0 00.37-.19 1 1 0 00.12-.51.88.88 0 00-.14-.49 2.66 2.66 0 00-.37-.39l-.47-.37a3.08 3.08 0 01-.47-.42 2 2 0 01-.36-.58 1.86 1.86 0 01-.15-.79 2.87 2.87 0 01.07-.67 1.59 1.59 0 01.25-.56 1.23 1.23 0 01.47-.37 1.82 1.82 0 01.75-.14 1.24 1.24 0 011 .45 2.09 2.09 0 01.3 1.41h-.95v-.34a.94.94 0 00-.07-.3.5.5 0 00-.13-.21.36.36 0 00-.24-.08.44.44 0 00-.37.16.8.8 0 00-.13.5.92.92 0 00.14.5 1.89 1.89 0 00.37.38c.14.11.3.23.47.34a2.67 2.67 0 01.47.42 1.88 1.88 0 01.37.56 2.19 2.19 0 01.14.78z"
					></path>
				</g>
			</g>
		</svg>
	</div>

	<p>Violencia moderada de fantasía</p>
</div>

</section>
		<hr>
		<section id="bigdestacados"><h2>Destacados</h2>
		<section id="destacados">

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/N531KN2tQZ/i7a6mlD0xI3/Switch_16x9_PrincessPeachShowtime_KeyArt'
			label='Princess Peach Showtime!'
			description='Reserva ya'
			platform='Nintendo Switch'></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/articles/2024/try-the-latest-game-trial-ea-sports-fc-24/Ncom-NSO-1920x1080-SP_v01'
			label='Pon a prueba el nuevo juego de muestra!'
			description='Más información'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000077705/6fa932eda55c5e713e339667c138a8a4009d439e5d983102cc53d4c0bb84a445'
			label='Endless Ocean Luminous'
			description='Reserva ya'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70070000016787/f70cc1e8d0a7b4d1e8852db4e77b375551f72edea72413a2d016dd3ce84fe214'
			label='Splatoon 3: Pase de expansión, La cara del orden DLC'
			description='Próximos lanzamientos'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/N531KN2tQZ/i7a6mlD0xI3/Switch_16x9AnotherCodeRecollection_KeyArt'
			label='Another Code: Recollection'
			description='Disponible ya'
			platform='Nintendo Switch'
			></card-destacados>
			</section>
			</section>
			<hr>
<section class="tienda">
<my-banner title='Tienda de juegos'
image='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP'
subtitle='¡Compra, descarga y juega de inmediato!'
label='Comprar juegos'
></my-banner>
</section>
<hr>
<section class="explora">
<my-banner title='Explora las consolas de videojuegos'
image='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/switch/site-design-update/switch-family-es'
subtitle='Familia Nintendo Switch'
label='Más detalles'></my-banner>
</section>
<hr>

<section id="novedades"><h2>Novedades</h2>
<section id="novlarge">
			<card-novedades-l
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_600/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP'
			date='22/02/24'
			title='Contenido descargable de Splatoon 3: ¡Ya está disponible la nueva y cheverísima campaña para un solo
			jugador!'
			preview='Damas y calameros, nos sentimos orgullosos de anunciar que ya puedes ordenar (porque ya está disponible) el
			contenido descargable* del juego Splatoon™ 3: La cara del orden. Esta segunda ola de contenido descargable del
			Pase de expansión de Splatoon™…'></card-novedades-l>

			<card-novedades-l
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_600/ncom/en_US/articles/2024/feb-update-see-what-games-were-added-to-the-nintendo-64-super-nes-and-nes-collections/2250x1266_NSO_SP'
			date='21/02/24'
			title='¡Novedades de febrero! Mira los juegos que se agregaron a los catálogos de Nintendo 64, Super NES y NES'
			preview='¿Quieres disfrutar algunos juegos clásicos? Los suscriptores de Nintendo Switch Online obtienen acceso instantáneo
			a un gran catálogo de juegos de Game Boy™, Super NES™ y NES™. Por su parte, los suscriptores de Nintendo Switch
			Online + Paquete de ex…'></card-novedades-l>
			</section>

			<section id="novsmall">
			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/articles/2024/try-the-latest-game-trial-ea-sports-fc-24/Ncom-NSO-1920x1080-SP_v01'
			date='19/02/24'
			title='Pon a prueba el nuevo juego de muestra, EA SPORTS FC™ 24'></card-novedades-s>

			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/a-classic-rivalry-reignites-in-mario-vs-donkey-kong-available-now/2250x1266_MDK'
			date='16/02/24'
			title='¡Una clásica rivalidad ha regresado en el juego Mario vs. Donkey Kong!'></card-novedades-s>

			<card-novedades-s
			date='15/02/24'
			title='¡Los elementos icónicos inspirados en el juego Mario vs. Donkey Kong están aquí por tiempo limitado!'
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/icon-elements-inspired-by-the-mario-vs-donkey-kong-game-are-here-for-a-limited-time/LHA-1365-Missions_Rewards-Icons-MvDK-Social-SP_v01'></card-novedades-s>

			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/discover-lara-crofts-original-adventures-in-tomb-raider-i-iii-remastered/1920x1080_TombRaider'
			date='14/02/24'
			title='Descubre las aventuras originales de Lara Croft en Tomb Raider I-III Remastered'></card-novedades-s>
</section>
			<button type="button" id="botonnovedades">Ver todos los articulos de noticias</button>
			</section>

			<section><h2>Los más vendidos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>
			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000003402/057249cf707a2a733c876c0eb453bb018ee6ea09f3aea5c350f4d76f70840d00'
			label='Overcooked! 2'
			date='1/9/21'
			description='La oferta termina en: <span>16 días</span>'
			price='15.975,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068688/1c5583f6bbce5bccdc923c25c35ba8f42128b55df84f4a2fbeea74b6d1d1516e'
			label='Super Mario Bros.™ Wonder'
			date='20/10/23'
			description=''
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000049931/cf8adb2c74522b91412eb40b9d77216e8f8436fc4e63731e0dc262e6666930eb'
			label='Nintendo Switch™ Sports'
			date='29/4/22'
			price='219.000,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453'
			label='Mario Kart™ 8 Deluxe'
			date='28/4/17'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			</section>

			<section><h2>Nuevos lanzamientos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000072191/b6b4d48d8cba9a8717c6d60857444232ac863789e112f88bb51414ec153aa8f0'
			label='Mario vs. Donkey Kong™'
			date='16/2/24'
			description='¡Nuevo!'
			price='273.800,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000072196/a0791bd734bb7fab6e666fac84b3861283a2609f0f98a477afbc59d62cb06271'
			label='Another Code™: Recollection'
			date='19/1/24'
			description='Versión de prueba gratuita'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435'
			label='WarioWare™: Move It!'
			date='3/11/23'
			price='273.800,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a'
			label='Super Mario RPG™'
			date='17/11/23'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			</section>
			`;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
