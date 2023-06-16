
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import '../src/stylesheets/home.css'
import '../src/stylesheets/header-footer.css'
import '../src/stylesheets/carousel.css'

import './index.css'
function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
    <Route path='/' exact Component={Home}/>
    <Route path='/project'  exact Component={Project}/>
    <Route path='/contact' exact Component={Contact}/>

   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App;
