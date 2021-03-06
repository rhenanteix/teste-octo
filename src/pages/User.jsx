import { useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext"
import RepoList from '../components/repositorios/List'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import Loading from "../components/layout/Loading"
import { getUserAndRepos } from "../context/github/GithubAction"

function User() {

    const { user, repos, loading, dispatch } = useContext(GithubContext) 

    const params = useParams()

    useEffect(() => {
        dispatch({type: 'SET_LOADING'})
        
        const getUserData = async (e) => {
            const userData = await getUserAndRepos(params.login)
            dispatch({type: 'GET_USER_AND_REPOS', payload: userData})

        }

        getUserData()
    }, [dispatch,params.login])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if (loading) {
       return <Loading/>
    }

    return (
        <>

        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <Link to='/' className="btn btn-ghost bg-purple text-white">
                    Voltar
                </Link>
            </div>

            <div className="grid grid-col-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom-card-image mb-6 md:mb-0">
                    <div className="flex rounded-lg shadow-xl card image-full">
                        <figure>
                            <img src={avatar_url} alt="Avatar" className="w-full" />
                        </figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title m-0">
                                {name}
                            </h2>
                            <span>{login}</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">{name}
                        <div className="ml-2 mr-1 badge badge-success">
                            {type}
                        </div>
                        </h1>
                        <p>{bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={html_url} target='_blank' rel='noreferrer'
                            className="btn btn-outline">
                                Perfil
                            </a>
                        </div>
                    </div>
                    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                        {location && (
                            <div className="stat">
                                <div className="stat-title text-md">Localiza????o</div>
                                <div className="text-lg stat-value">{location}</div>
                            </div>
                        )}

                        {blog && (
                            <div className="stat">
                                <div className="stat-title text-md">Site</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://${blog}`} rel="noreferrer">{blog}</a>
                                </div>
                            </div>
                        )}

                        {!blog && (
                            <div className="stat">
                                <div className="stat-title text-md text-red">Usu??rio sem site</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://${blog}`} rel="noreferrer">{blog}</a>
                                </div>
                            </div>
                        )}  

                        {twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md">Twitter</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://twitter.com/${twitter_username}`} rel="noreferrer">{twitter_username}</a>
                                </div>
                            </div>
                        )}
                        {!twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md text-red">Usu??rio sem twitter</div>
                                <div className="text-lg stat-value">
                                    <a href={`https://twitter.com/${twitter_username}`} rel="noreferrer">{twitter_username}</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div> 

            <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats bg-purple">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl md:text-5xl text-white" />
                        <div className="stat-title pr-5 text-white">Followers</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl text-white">{followers}</div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className="text-3xl md:text-5xl text-white" />
                        <div className="stat-title pr-5 text-white">Following</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl text-white">{following}</div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCodepen className="text-3xl md:text-5xl text-white" />
                        <div className="stat-title pr-5 text-white">Public Repos</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl text-white">{public_repos}</div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className="text-3xl md:text-5xl text-white" />
                        <div className="stat-title pr-5 text-white">Public Gists</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl text-white">{public_gists}</div>
                    </div>
                </div>
            </div>

            <RepoList repos={repos}/>

        </div>
        </>
    )
}

export default User