import { LitElement, html, css } from 'lit';

export class A extends LitElement {
    static styles = [
        css`
            a-barbearia-section {
                --display-botao: none;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('a-barbeari-page', A);
