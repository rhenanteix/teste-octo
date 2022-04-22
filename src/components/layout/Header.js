import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-purple text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-3xl text-white'/>
                <Link to='/' className='text-lg font-bold align-middle text-white'>
                    {title}
                </Link>
            </div>
            <div className="flex-1 px2-mx2">
               
            </div>
        </div>
    </nav>
  )
}

Header.defaultProps = {
    title: 'Teste Cosmobots.io',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header