import React from 'react'
import './Footer.css'

import DownloadCVButton from './Curriculum';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <h2 className="logo" title="Sistemas">
                            <i className="#" />
                            <i className="#" />
                        </h2>
                        <p>
                            © copyright 2024 - Todos os direitos reservados. <br />
                        </p>
                        <p>
                            <a href="https://www.google.com/maps/place/Petr%C3%B3polis+-+Cascatinha,+Petr%C3%B3polis+-+RJ/@-22.5112498,-43.1779306,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNx8Vv22SqFPitk_TjyV4xwNr0X7zhpmmogiqQ7!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNx8Vv22SqFPitk_TjyV4xwNr0X7zhpmmogiqQ7%3Dw114-h86-k-no!7i3264!8i2448!4m7!3m6!1s0x99007e82d9236f:0xa9241871d369007a!8m2!3d-22.5112498!4d-43.1779306!10e5!16zL20vMDJqOXBx?authuser=0&entry=ttu" target="_blank" rel="noopener noreferrer">
                                Petropolis - RJ
                            </a>
                        </p>
                        <p>
                            <a href="tel:+5521987051725">(21) 987051725 |</a>
                            <a href="mailto:renatomarquesdavid@gmail.com">renatomarquesdavid@gmail.com</a>
                        </p>
                    </div>

                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 hidden-xs">
                        <nav>
                            <ul className="nav nav_footer">
                                <li>
                                    <a
                                        title="Perguntas Frequentes"
                                        href="#"
                                    >
                                        Perguntas frequentes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Termos de Uso"
                                        href="#"
                                    >
                                        Termos de uso
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Política de Privacidade"
                                        href="#"
                                    >
                                        Política de privacidade
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Transparência"
                                        href="#"
                                    >
                                        Transparência
                                    </a>
                                </li>
                                <li>
                                    <a title="Siga" href="#" target="_blank">
                                       
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <h3>Siga-me nas redes sociais</h3>
                        <nav>
                            <ul className="nav list_social">
                                <li className="item-list-social">
                                    <a target="_blank" rel="noopener noreferrer"
                                        className="lnk-network"
                                        aria-label="Facebook"
                                        href="https://www.facebook.com/renatodavid"
                                        title="Facebook"
                                    >
                                        <i aria-hidden="true" className="icon-social_facebook" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="item-list-social">
                                    <a target="_blank" rel="noopener noreferrer"
                                        className="lnk-network"
                                        aria-label="Instagram"
                                        href="https://www.instagram.com/eu.renatomarques/"
                                        title="Instagram"
                                    >
                                        <i aria-hidden="true" className="icon-social_instagram" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li className="item-list-social">
                                    <a target="_blank" rel="noopener noreferrer"
                                        className="lnk-network"
                                        aria-label="Twitter"
                                        href="https://twitter.com/eurenatodavid"
                                        title="Twitter"
                                    >
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="item-list-social">
                                    <a target="_blank"rel="noopener noreferrer"
                                        className="lnk-network"
                                        aria-label="Linkedin"
                                        href="https://www.linkedin.com/in/renatomarquesdavid/"
                                        title="Linkedin"
                                    >
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                        <span>Linkedin</span>
                                    </a>
                                </li>
                                <li className="item-list-social">
                                    <a target="_blank" rel="noopener noreferrer"
                                        className="lnk-network"
                                        aria-label="GitHub"
                                        href="https://github.com/Renatodavid"
                                        title="GitHub"
                                    >
                                        <i className="fa fa-github" aria-hidden="true" />
                                        <span>GitHub</span>
                                    </a>
                                  </li>
                             </ul>
                        </nav>
                    </div>

                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <h3>Em breve mais novidades!</h3>
                        <li>
                        
                        <DownloadCVButton />
                            </li>
                    </div>

                </div>
            </div>
        </footer>
       
    );
}
  




