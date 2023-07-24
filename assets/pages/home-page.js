import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
    
    render() {
        return html`
         <hero-section></hero-section>
         <a-barbearia-section></a-barbearia-section>
         <serviços-section></serviços-section>
         <contato-section></contato-section>
         <unidades-section></unidades-section>
        `;
    }
}
customElements.define('home-page', HomePage);
