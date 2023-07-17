import { LitElement, html, css } from 'lit';

export class Botao extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                display: flex;
                width: 139px;
                height: 32px;
                padding: 5px 24px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border: 0;

                border-radius: 8px;
                background-color: color-mix(in srgb, white 20%, var(--tom-2, #B38962));
                box-shadow: 0px 2px 4px 0px #665E57;

                /* tipografia */
                color: var(--tom-3, #664E38);
                text-align: center;
                font-family: var(--fonte-titulo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 22.4px */

                transition: all .2s;
                cursor: pointer;
            }
            button:hover,
            button:active {
                background-color: var(--tom-2, #B38962);
            }
        `
    ];

    render() {
        return html`
        <button><slot>Pressione</slot></button>
        `;
    }
}
customElements.define('app-botao', Botao);
