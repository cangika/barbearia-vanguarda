import { LitElement, html, css } from 'lit';
import { animate } from '../styles/animate-style';
import { section } from '../styles/section-style';

export class HeroSections extends LitElement {
    static styles = [
        animate,
        section,
        css`
            :host {
                --animate-delay: 0.3s;
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }

            span {
                display: inline-block;
            }

            .Vanguarda {
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
                opacity: 67%;

                position: absolute;
                right: -72px;
                top: -39px;
                z-index: 10;
            }

            img {
                width: auto;
                height: 100%;
            }

            app-paragrafo {
                font-size: 1.25rem;
            }

            swiper-container {
                width: 100%;
                height: 100%;
            }

            @keyframes slideInUp {
                0% {
                    transform: translate3d(0px, 200%, 0px);
                    visibility: visible;
                }
                100% {
                    transform: translateZ(0px);
                }
            }

            @media (min-width: 1024px) {
                app-paragrafo {
                    display: none;
                }

                app-logo {
                    width: 220px;
                    height: 220px;
                }
            }
        `
    ];

    render() {
        return html`
        <section>
            <app-titulo>
                <h1>
                <span class="animate__animated animate__fast" data-toggle-class="animate__slideInUp">Barbearia</span> <br> 
                <span class="Vanguarda animate__animated animate__delay-1s animate__delay-1s" data-toggle-class="animate__slideInUp">Vanguarda</span></h1>
                <app-logo></app-logo>
            </app-titulo>
            <app-quadro>
                <swiper-container 
                loop="true" 
                autoplay="true" 
                disabled-on-interaction="false"
                speed="5000"
                effect="coverflow" 
                simulate-touch="false" 
                centered-slides="true"
                slides-per-view="auto" 
                coverflow-effect-rotate="50" 
                coverflow-effect-stretch="0" 
                coverflow-effect-depth="100"
                coverflow-effect-modifier="1" 
                coverflow-effect-slide-shadows="true"
                >

                    <swiper-slide>
                    <img src="slider-1.png" alt="imagem slider 1" />
                    </swiper-slide>

                    <swiper-slide>
                    <img loading="lazy" src="slider-2.jpg" alt="imagem slider 2" />
                    </swiper-slide>

                    <swiper-slide>
                    <img loading="lazy" src="slider-3.jpg" alt="imagem slider 3" />
                    </swiper-slide>

                </swiper-container>
            </app-quadro>
        </section>
        <app-paragrafo class="animate__animated animate__delay-5s" data-toggle-class="animate__fadeIn">
        Obtenha um estilo impecável, do cabelo à barba.
        </app-paragrafo>
        
        `;
    }
}
customElements.define('hero-section', HeroSections);
