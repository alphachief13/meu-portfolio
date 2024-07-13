import './App.css'
import PropTypes from 'prop-types'
import { DiReact, DiDatabase, DiDjango, DiPostgresql, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";

//no outro tb -> fazer o responsivo, mudar o titulo e o icone da pagina

function Decorador({ title }){
  return(
    <div className='decorador'>
      <p>{title}</p>
    </div>
  )
} 

function App() {

  return (
    <div>   
      <header>

      </header>
      
      <main>

        <div className='perfil'>
          <div className='perfil-foto'>
            <img src={"public/pfp.jpeg"}/>
          </div>
          <div className='perfil-texto'>
            
            <Decorador title="Sobre mim"/>
            
            <h1>Victor Cordeiro</h1>
              <p>💻 Programador de Interfaces Web e APIS com Javascript e Python</p>
              <p>🎓 Cursando Ciência e Tecnologia (UFRN)</p>
              <p>💡 Interesse em desenvolvimento front end e back end</p>
              <p>✏️ Inglês Intermediário/Avançado</p>
          </div>  
        </div>
        

        <div className='skills'> 
          <div className='skills-d'>
            <Decorador title="Skills" />
          </div>
          
          <h1>Tecnologias e Habilidades</h1>



          <div className='skills-boxes'>
            <div className='skills-box'>
              <div className='icons'>
                <DiReact size={70}/>
              </div>

              <h2>Frontend</h2>
              <p>Desenvolvimento de sites responsivos utilizando ferramentas modernas. React.Js, TailwindCss e outras ferramentas.</p>
            </div>
            <div className='skills-box'>
              <div className='icons'>
                <DiDatabase size={70} />
              </div>
              <h2>Backend</h2>
              <p>Desenvolvimento no lado do servidor com o   framework Django e banco de dados PostgreSQL. Desenvolvimento de APIS, etc.</p>


            </div>
          </div>



        </div>  

        <div className='projetos'>
          <div className='projetos-d'>
            <Decorador title='Portfólio'/>
          </div>

          <h1>Projetos</h1>

          <div className='projetos-boxes'>
            <a href='' target='_blank' className='projetos-box'>
            <div className='s1'>
              <h3>Interface do encurtador</h3>
              <p>Parte frontend do projeto de encurtador de urls. Feito com React.js</p>
            </div>
            <div className='s2'>
              <div className='icons-box'>
                  <DiReact size={45}/>
                </div>
            </div>
            <div className='s3'>
              <img src="public/p1.png"/>

            </div>


            </a>
            <a href='https://github.com/alphachief13/api-encurta-url' target='_blank' className='projetos-box'>
            <div className='s1'>
              <h3>API do encurtador</h3>
              <p>Uma API encurtadora de urls utilizando Django e PostgreSQL</p>
            </div>
            <div className='s2'>
              <div className='icons-box'>
                    <DiDjango size={45}/>
                    <DiPostgresql  size={45}/>
                </div>
            </div>
            <div className='s3'>
              <img src="public/p2.png"/>

            </div>
            </a>
            <a href='https://cifra-de-cesar-chi.vercel.app/' target='_blank' className='projetos-box'>
            <div className='s1'>
              <h3>Cifra de césar</h3>
              <p>Um app frontend feito em Vue.js que faz a criptografia conhecida como cifra de cesar</p>
            </div>
            <div className='s2'>
              <div className='icons-box'>
                <DiJavascript1 size={45}/>
              </div>
            </div>
            <div className='s3'>
              <img src="public/p3.png"/>

            </div>
            </a>
            <a href='https://alphachief13.github.io/lockedPP/' target='_blank' className='projetos-box'>
            <div className='s1'>
              <h3>Locked ++</h3>
              <p>Um jogo de adivinhar a combinação. Foi feito puramente em html, css e javascript</p>
            </div>
            <div className='s2'>
              <div className='icons-box'>
                <DiHtml5 size={45}/>
                <DiCss3 size={45}/>
                <DiJavascript1 size={45}/>
              </div>
            </div>
            <div className='s3'>
              <img src="public/p4.png"/>

            </div>
            </a>
            <a href='https://alphachief13.github.io/projects-js-vanilla/' target='_blank' className='projetos-box'>
            <div className='s1'>
              <h3>Projetos Vanilla</h3>
              <p>Um site que mostra os meus primeiros projetos com javascript puro.</p>
            </div>
            <div className='s2'>
              <div className='icons-box'>
                <DiHtml5 size={45}/>
                <DiCss3 size={45}/>
                <DiJavascript1 size={45}/>
              </div>
            </div>
            <div className='s3'>
              <img src="public/p5.png"/>
            </div>
            </a>
            </div>

        </div>

        <div className='contatos'>
          <div className='skills-d'>
            <Decorador title="Contatos" />
          </div>
          <h1>Onde me procurar?</h1>

          <div className='contatos-linha'>
            <div className='contatos-item'>
              <div className='icon-cont'>
                <MdEmail size={40}/>

              </div>
              <h3>Email</h3>
              <p>victormvcordeiro@gmail.com</p>
          
            </div>
            <a target='_blank' href='https://github.com/alphachief13/' className='contatos-item'>
            <div className='icon-cont'>
              <FaGithub size={40}/>
            </div>
              <h3>Github</h3>
              <p>https://github.com/alphachief13/</p>
            </a>
            <div className='contatos-item'>
              <div className='icon-cont'>
                <FaPhoneAlt size={40}/>
              </div>
              <h3>Telefone</h3>
              <p>(83) 98767-5805</p>
          
            </div>
          </div>
        </div>


      </main>

      <footer>

      </footer>
    
    </div>  
  )
}

Decorador.propTypes = {
  title: PropTypes.string.isRequired,
}


export default App
