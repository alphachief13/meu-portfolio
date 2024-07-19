import PropTypes from 'prop-types'

function BoxProjeto({ projectLink, title, description, imgSrc, icon }){
    return(
        <a href={projectLink} target='_blank' className='projetos-box'>
        <div className='s1'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='s2'>
          <div className='icons-box'>
             {icon}
          </div>
        </div>
        <div className='s3'>
          <img src={imgSrc}/>
  
        </div>
  
  
        </a>
    )
  }
  
  BoxProjeto.propTypes = {
    projectLink: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    icon: PropTypes.any,
  }
  
  export default BoxProjeto;