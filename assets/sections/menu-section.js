import { LitElement, html, css } from 'lit';

export class MenuSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            dialog {
                display: flex;
                width: 360px;
                height: 640px;
                padding: 32px;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                gap: 97px;
                flex-shrink: 0;
            }
        `
    ];

    render() {
        return html`
        <dialog>

        <app-logo></app-logo>

        <nav>
            <a href = "">Unidades</a>
            <a href = "">Contato</a>
            <a href ="">Serviços</a>
            <a href = "">A Barbearia</a>
            <a href ="/">Home</a>


        </nav>

        </dialog>
        `;
    }
}
customElements.define('menu-section', MenuSection);
