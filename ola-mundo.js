import { LitElement, html, css } from 'lit';

export class OlaMundo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('ola-mundo', OlaMundo);
