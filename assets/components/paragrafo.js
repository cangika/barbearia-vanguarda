import { LitElement, html, css } from 'lit';

export class Paragrafo extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                color: var(--cor-secundaria, #665E57);
                font-family: var(--fonte-corpo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 20px */
            }

            P {
                margin: 0;
            }
        `
    ];

    render() {
        return html`<p><slot>Parágrafo</slot></p>`;
    }
}
customElements.define('app-paragrafo', Paragrafo);
