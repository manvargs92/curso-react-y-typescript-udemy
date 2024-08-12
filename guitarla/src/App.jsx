/**** El App.jsx es el componente principal de la aplicación ****/

import Header from "./components/Header"; // importar un componente
import Gitar from "./components/Guitar";
import { useState } from 'react'; // importar el Hook de useState para trabajar con el Estado de la aplicación

function App() {

  // State
  const[auth, setAuth] = useState(false); // definir el Estado, en este caso se llama auth; para modificarlo es setAuth; valor inicial false
  console.log(auth); // se puede ve igualmente con la extensión de navegador React Developer Tools
  
  
  return (
    <>

      <Header /> {/* renderizar un componente */}

      <main className="container-xl mt-5"> {/* cambiamos class por className para evitar choques entre la intaxis de HTML y JS */}
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">

            <Gitar />
            <Gitar />
            <Gitar />
            <Gitar />
            <Gitar />
            <Gitar />

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
