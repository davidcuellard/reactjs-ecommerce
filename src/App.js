import './App.css';
import NavBar from './components/NavBar';
import './components/css/estilos.css'
import ItemListContainer from './components/ItemListContainer';

const title = 'Items'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title = {title} />
    </div>
  );
}

export default App;
