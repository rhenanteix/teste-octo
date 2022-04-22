import { useContext } from 'react'
import Loading from '../layout/Loading'
import UserItem from './Item'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {

    const { users, loading } = useContext(GithubContext)
    
  //  if (users.length === 0) return <h1 className='text-3xl text-gray-500 m-5'>Nenhum usuário encontrado!</h1>

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user)=>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    } else {
      return <Loading/>
    }
}

export default UserResults