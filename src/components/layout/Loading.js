import spinner from './img/pikachu-running.gif'

function Spinner() {
  return (
    <div>
      <img 
        width={64} 
        className='text-center mx-auto' 
        src={spinner} />
    </div>
  )
}

export default Spinner