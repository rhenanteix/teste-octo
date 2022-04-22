import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GithubProvider } from './context/github/GithubContext';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen bg-white">
            <Header/>
            <main className='flex-auto container mx-auto px-3 pb-12'>
              <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/user/:login' element={<User/>}/>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
    </GithubProvider>
  );
}

export default App;