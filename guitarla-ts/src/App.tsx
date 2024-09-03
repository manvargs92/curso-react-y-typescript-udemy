/**** El App.jsx es el componente principal de la aplicación ****/

import Header from "./components/Header"; // importar un componente
import Gitar from "./components/Guitar";

import useCart from "./hooks/useCart"; // importar un Custom Hook

function App() {

  const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart(); // llamando al Custom Hook

  return (
    <>

      {/* renderizar un componente */}
      <Header 
        // el key se agrega en la etiqueta <tr> en el Header.jsx
        cart={ cart }
        removeFromCart={ removeFromCart }
        increaseQuantity={ increaseQuantity }
        decreaseQuantity={ decreaseQuantity }
        clearCart={ clearCart }
        isEmpty={ isEmpty }
        cartTotal={ cartTotal() }
      />

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
                  addToCart={ addToCart }
                  // cart={ cart }
                  // setCart={ setCart }
                  // auth={true}                
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
