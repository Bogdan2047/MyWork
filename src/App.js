import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { About } from './about us/about';
import './App.css';
import { Contacts } from './contact/contacts';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main page/main';
import { Maparr } from './news/maparr';
import { Portfolio } from './portfolio/portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">      
            <Header/>
              <Routes>
                <>
                <Route path='/main' element={<Main/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/news' element={<Maparr/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                </>
                </Routes>
            <Footer/>     
      </div>
    </BrowserRouter>
  );
}

export default App;
