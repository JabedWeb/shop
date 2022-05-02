
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import SingleProduct from './Components/Pages/SingleProduct';
import './_assets/css/bundle.css';
import './_assets/css/style.css';

function App() {
  return (

   
    <>
     <BrowserRouter>
     <Header/>

     <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/shop/:name' element={<SingleProduct/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
   
    {/* <Shop/> */}
    
    </>
  );
}

export default App;
