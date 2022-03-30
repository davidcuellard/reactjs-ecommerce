import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/css/estilos.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path='/' element={ <ItemListContainer  /> } />
                        <Route path='/categoria/:categoryId' element={ <ItemListContainer /> } />
                        <Route path='/detalle/:detailId' element={ <ItemDetailContainer /> } />
                        <Route path='/cart' element={ <Cart /> } />

                        <Route path='/*' element={ <Navigate to ='/' replace /> } />
                    
                    </Routes>
                </div>
            </BrowserRouter> 
        </CartContextProvider>

    );
}

export default App;
