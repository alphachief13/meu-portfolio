import PropTypes from 'prop-types'

function Decorador({ title }){
    return(
      <div className='decorador'>
        <p>{title}</p>
      </div>
    )
} 

Decorador.propTypes =  {
    title: PropTypes.string,
}


export default Decorador;