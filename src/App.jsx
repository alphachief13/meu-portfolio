import './App.css'
import PropTypes from 'prop-types'
import { DiReact, DiDatabase, DiDjango, DiPostgresql, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import Decorador from './components/Decorador/Decorador';
import BoxProjeto from './components/BoxProjeto/BoxProjeto';
import { RiNextjsFill  } from "react-icons/ri";

function App() {
  let projetos = [
    {
      projectLink: "https://alphachief13.github.io/projects-js-vanilla/",
      title: "Projetos Vanilla",
      description:"Um site que mostra os meus primeiros projetos com javascript puro.",
      imgSrc: "p5.png",
      icon: <div><DiHtml5 size={45}/><DiCss3 size={45}/><DiJavascript1 size={45}/></div>,
    }, 
    {
      projectLink: "https://alphachief13.github.io/lockedPP/",
      title: "Locked ++",
      description:"Um jogo de adivinhar a combinação. Foi feito puramente em html, css e javascript.",
      imgSrc: "p4.png",
      icon: <div><DiHtml5 size={45}/><DiCss3 size={45}/><DiJavascript1 size={45}/></div>,
    },
    {
      projectLink: "https://github.com/alphachief13/api-encurta-url",
      title: "API do encurtador",
      description:"Uma API encurtadora de urls utilizando Django e PostgreSQL",
      imgSrc: "p2.png",
      icon: <div><DiDjango size={45}/><DiPostgresql  size={45}/></div>,
    },
    {
      projectLink: "https://encurtador-url-pi.vercel.app/",
      title: "Interface do encurtador",
      description:"Parte frontend do projeto de encurtador de urls. Feito com React.js",
      imgSrc: "p1.png",
      icon: <DiReact size={45}/>,
    },
   
    {
      projectLink: "https://guilherme-cordeiro-autor.vercel.app/",
      title: "Site de autor",
      description:"Um projeto frontend construído em Next.js para um autor de livros",
      imgSrc: "p6.png",
      icon: <div><RiNextjsFill  size={45}/></div>,
    },

  ]

  projetos = projetos.reverse();

  return (
    <div>   
      <header>

      </header>
      
      <main>

        <div className='perfil'>
          <div className='perfil-foto'>
            <img src={"pfp.jpeg"}/>
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

            {projetos.map((value, index)=>(
              <BoxProjeto 
                key={index}
                title={value.title}
                description={value.description}
                projectLink={value.projectLink}
                imgSrc={value.imgSrc}
                icon={value.icon}
                />
            ))}


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
