import Result from '../components/usuarios/Result';
import Search from '../components/usuarios/Search'
function Home() {
  return (
    <div className="align-top h-full">
     <p>Bem vindo a minha página de busca de usuários do github</p>
     <Search/>
     <Result/>
    </div>
  )
}

export default Home