import { FaEye, FaInfo, FaLink, FaStar, FaUtensils, FaExternalLinkSquareAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Item({ repo }) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
        has_pages,
        homepage,
    } = repo

  return (
    <div className='m-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url} alt={`Go to ${name} github page`} rel="noreferrer">
                    <FaLink className='inline mr-1'/>{name}
                </a>
            </h3>

            <p>{description}</p>
            <div>
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className='mr-2'/> {stargazers_count}
                </div>
                <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className='mr-2'/> {watchers_count}
                </div>
                
                <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className='mr-2'/> {open_issues}
                </div>
                <div className="mr-2 badge badge-warning badge-lg">
                    <FaUtensils className='mr-2'/> {forks}
                </div>
            </div>
            {(has_pages || homepage) && (<h1 className='mb-2 text-l absolute top-0 right-0 mr-2'>
                <a href={
                    has_pages ? `https://${repo.owner.login}.github.io/${name}` : 
                    `${homepage}`
                    } rel="noreferrer">
                    <FaExternalLinkSquareAlt className='inline mr-1'/>
                </a>
            </h1>
            )}
        </div>
    </div>
  )
}

Item.propTypes = {
    repo: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired
}

export default Item