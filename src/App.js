import './App.css';
import NavBar from './components/NavBar';
import './components/css/estilos.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartContextProvider, { CartContext } from './contexts/CartContext';
import Cart from './components/Cart';




function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path='/' element={ <ItemListContainer  /> } />
                        <Route path='/categoria/:categoriaId' element={ <ItemListContainer /> } />
                        <Route path='/detalle/:detalleId' element={ <ItemDetailContainer /> } />
                        <Route path='/cart' element={ <Cart /> } />

                        <Route path='/*' element={ <Navigate to ='/' replace /> } />
                    
                    </Routes>
                </div>
            </BrowserRouter> 
        </CartContextProvider>

    );
}

export default App;
