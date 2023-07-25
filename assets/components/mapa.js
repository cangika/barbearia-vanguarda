import { LitElement, html, css } from 'lit';

export class Mapa extends LitElement {
    static styles = [
        css`

        *, ::slotted(*) {
            margin: 0;
        }
            :host {
                display: flex;
                width: 270px;
                height: 200px;
                flex-direction: column;
                align-items: flex-start;

                /* estilos */
                border-radius: 8px;
                color: #FFFFFF;
                text-align: center;
                font-family: var(--fonte-titulo);
                line-height: normal;
                box-shadow: 0px 24px 34px 0px rgba(0,0,0,0.25);

            }

            address {
                /* layout */
                display: flex;
                padding: 10px 12px;
                padding-top: 5px;
                flex-direction: column;
                align-items: flex-start;
                gap: 6px;
                align-self: stretch;

                /* estilos */
               
                border-radius: 0px 0px 8px 8px;
                background: var(--cor-secundaria, #665E57)
            } 

            .titulo, ::slotted(h2) {
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.64px;
            }

            .subtitulo, ::slotted(h3) {
                font-size: .5rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
                letter-spacing: 0.32px;
            }

            figure {
                flex: 1 0 0;
                align-self: stretch;

                display: flex;
                align-items: center;
                overflow: hidden;

                border-radius: 8px 8px 0px 0px;
                border: 4px solid var(--cor-secundaria, #665E57);
            }

            .imagem, ::slotted(img){
                width: 100%;
            }
        `
    ];

    render() {
        return html`
        <figure>
            <slot name="imagem"><img loading="lazy" class="imagem" src= "mapa-1.png" alt="mapa A Barbearia Vanguarda" /></slot>
        </figure>

        <address>
            <slot name="titulo">
                <h2 class="titulo">AV. Marechal Tito 2960</h2>
            </slot>
            <slot name="subtitulo">
                <h3 class="subtitulo">São Miguel Paulista, São Paulo</h3>
            </slot>
        </address>
        
        `;
    }
}
customElements.define('app-mapa', Mapa);
