import './App.css';
import NavBar from './components/NavBar';
import './components/css/estilos.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const title = 'Productos'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path='/' element={ <ItemListContainer title = {title} /> } />
                    <Route path='/categoria/:categoriaId' element={ <ItemListContainer title = {title} /> } />
                    <Route path='/detalle/:detalleId' element={ <ItemDetailContainer /> } />

                    <Route path='/*' element={ <Navigate to ='/' replace /> } />
                
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
