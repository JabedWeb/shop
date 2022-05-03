import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTag from './Components/Admin/AddTag';
import Category from './Components/Admin/Category';
import Dash from './Components/Admin/Dash';
import Dashboard from './Components/Admin/Dashboard';
import Products from './Components/Admin/Products';
import Tags from './Components/Admin/Tags';
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
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/shop/:name' element={<SingleProduct/>}/>
       <Route path='/admin' element={<Dashboard/>}>

         <Route path='/admin/dashboard' element={<Dash/>}/>
         <Route path='/admin/products' element={<Products/>}/>
         <Route path='/admin/category' element={<Category/>}/>
         <Route path='/admin/tags' element={<Tags/>}/>
         <Route path='/admin/addTags' element={<AddTag/>}/>
       </Route>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
