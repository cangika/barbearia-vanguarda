import { LitElement, html, css } from 'lit';

export class Botao extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                width: inherit;

                display: inline-flex;
                padding: 10px 24px;
                justify-content: flex-start;
                align-items: center;
                gap: .625rem;
                border: 0;

                border-radius: 8px;
                background-color: var(--button-background, color-mix(in srgb, white 20%, var(--tom-2, #B38962)));
                box-shadow: 0px 2px 4px 0px #665E57;

                /* tipografia */
                color: var(--color, color-mix(in srgb, black 20%, var(--tom-3, #664E38)));
                text-align: center;
                font-family: var(--fonte-titulo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 22.4px */
                white-space: nowrap;

                transition: all .2s;
                cursor: pointer;
            }
            button:hover,
            button:active {
                background-color: color-mix(in srgb, white 15%, var(--button-background, var(--tom-2)));
                color: var(--tom-1);
            }

            ::slotted(*) {
                width: 24px;
                height: 24px;
                margin-right: 5px 8px 5px 0;

            }
        `
    ];

    render() {
        return html`
        <button><slot name="icone"></slot> <slot>Pressione</slot></button>
        `;
    }
}
customElements.define('app-botao', Botao);
