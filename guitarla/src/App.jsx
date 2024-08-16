/**** El App.jsx es el componente principal de la aplicación ****/

import Header from "./components/Header"; // importar un componente
import Gitar from "./components/Guitar";
import { useState, useEffect } from 'react'; // importar el Hook de useState para trabajar con el Estado de la aplicación
import { db } from './data/db';

function App() {

  // State
  const[auth, setAuth] = useState(false); // definir el Estado, en este caso se llama auth; para modificarlo es setAuth; valor inicial false
  console.log(auth); // se puede ve igualmente con la extensión de navegador React Developer Tools

  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  // Effect
  useEffect(() => {
    console.log('Componente listo o escuchando por Auth');
    
  }, [auth]); // después de la coma van las dependencias dentro de un arreglo

  /* Reglas de los Hooks
  * 1. Los Hooks se colocan en la parte superior de los componentes de React
  * 2. No se deben colocar dentro de condicionales, dentro de funciones, tampoco después de un return
  */
  
  /* cargar los datos de las guitarras usando un archivo de datos local */
  const [data, setData] = useState(db); // su valor inicial será lo que haya en db
  
  /* cargar los datos de las guitarras usando una API de datos */
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(db);
  // }, []);
  
  return (
    <>

      <Header /> {/* renderizar un componente */}

      <main className="container-xl mt-5"> {/* cambiamos class por className para evitar choques entre la intaxis de HTML y JS */}
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">

            {/* Props
            * Sirven para que se comuniquen los componentes entre ellos.
            * Se pasa información de un componente padre a un componente hijo, pero no al revés
            * Se parecen a los atributos en HTML, pero se les puede pasar arrays, objetos o funciones
            */}
            {/* expresiones */
              data.map((guitar) => (
                <Gitar 
                  key={ guitar.id } // prop necesario cuando se utilice .map, define las llaves únicas de los valores
                  guitar={ guitar }
                  auth={true}                
                />
              ))
            }

          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
