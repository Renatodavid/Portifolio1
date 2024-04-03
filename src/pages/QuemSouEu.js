import React from 'react'
import './QuemSouEu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function QuemSouEu() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Sobre Renato Marques David</title>
      <div className="container">
        <header>
          <h1 className="mt-5">Sobre Renato Marques David</h1>
        </header>
        <main>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Minha História</h2>

              <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/renatomecanico2.jpg" alt="renato marques david" className="d-block w-100"></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/renatoMec.jpg" alt="renato marques david" className="d-block w-100"></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/renatomecacnico3.jpg" alt="renato marques david" className="d-block w-100"></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
              <div><br>
              </br>
                <p>
                  Olá, meu nome é Renato Marques David. Durante 15 anos da minha vida,
                  trabalhei como mecânico industrial na área naval no estado do RJ, entre Itaguaí e Mangaratiba.
                </p>
                <p>
                  Apesar de ter sido uma jornada gratificante, senti que era hora de buscar
                  novos desafios e oportunidades. Após anos sem estudar, decidi mudar de
                  área e embarcar em uma nova jornada profissional.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Desenvolvedor Full Stack</h2>

              <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/renatodev.jpg" alt="renato marques david" className="d-block w-100" ></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/Dev1.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/renatoMecp.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <p>
                Com determinação e paixão pela tecnologia, decidi me aventurar no mundo da
                programação. Focando em expandir meus conhecimentos, me especializei em
                desenvolvimento full stack, com ênfase no back-end.
              </p>
              <p>
                Agora estou dedicando meu tempo e esforço para aprender e crescer como
                desenvolvedor, buscando novas oportunidades e desafios no campo da
                tecnologia.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">

              <h2>Meus Hobbies</h2>

              <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/renatoPescador.jpg" alt="renato marques david" className="d-block w-100" ></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/trilha3.jpg" alt="renato marques david" className="d-block w-100"></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/trilhas5.jpg" alt="renato marques david" className="d-block w-100"></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
              <p>
              Explorando trilhas e pescando, encontro minha paz na natureza, onde cada aventura é uma nova história a ser contada.
              </p>
              
            </div>
         
          
          <div className="col-md-6">
              <h2>Amizade pela carreira</h2>

              <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  
                </div>


                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/amizade.jpg" alt="renato marques david" className="d-block w-100" ></img>
                    <figcaption>Renato Marques David</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/amizades.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/amigosmec1.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <p>
              A amizade verdadeira é como ter um irmão não biológico, 
              alguém com quem podemos contar em todas as situações, 
              compartilhar alegrias, tristezas e crescer juntos, 
              fortalecendo laços que perduram uma vida inteira.
              </p>
              
            </div>
            </div>
            <div className="col-md-12">
              <h2>Família</h2>

              <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  
                </div>


                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/amigos1.jpg" alt="renato marques david" className="d-block w-100" ></img>
                    <figcaption>Diogo, Renato e Abner</figcaption>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/familiarenato.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/familia.jpg" alt="renato marques david" className="d-block w-100"></img>
                  </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <p>
              A família é a base sólida que nos sustenta nos momentos difíceis e
               nos celebra nos momentos felizes, formando laços inquebráveis de amor e apoio.
              </p>
             
            </div>
        </main>
      </div>

    </>
  );
}