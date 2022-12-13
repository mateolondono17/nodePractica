import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './helpers/Home';
import ListadoProductos from './productos/ListadoProductos';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/productos',
    element: <ListadoProductos/>,
    errorElement: <h1>ERROR 404</h1>
    
  }
]) 

function App() {
  return (
    <section className="App">
      <RouterProvider router={routes}/>
    </section>
  );
}

export default App;
