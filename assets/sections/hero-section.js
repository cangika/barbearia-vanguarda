import { LitElement, html, css } from 'lit';

export class HeroSections extends LitElement {
    static styles = [
        css`
            :host {
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4.375rem;
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }

            span {
                color: var(--tom-3, #664E38);
                font-weight: 800;
            }

            app-titulo {
                display: flex;
                align-items: center;
                align-self: stretch;

                position: relative;
            }

            app-logo {
                display: flex;
                width: 160px;
                height: 160px;

                position: absolute;
                right: -72px;
                top: -39px;
            }
        `
    ];

    render() {
        return html`
        <section>
            <app-titulo>
                <h1>Barbearia <span>Vanguarda</span></h1>
                <app-logo></app-logo>
            </app-titulo>
            <app-quadro></app-quadro>
        </section>
        <app-paragrafo>
        Obtenha um estilo impecável, do cabelo à barba.
        </app-paragrafo>
        
        `;
    }
}
customElements.define('hero-section', HeroSections);
