/**** El App.jsx es el componente principal de la aplicación ****/

import Header from "./components/Header"; // importar un componente
import Gitar from "./components/Guitar";
import { useState, useEffect } from 'react'; // importar el Hook de useState para trabajar con el Estado de la aplicación
import { db } from './data/db';

import useCart from "./hooks/useCart"; // importar un Custom Hook

function App() {

  const { auth, carrito } = useCart(); // llamando al Custom Hook
  console.log(auth);
  console.log(carrito);
  

  // revisar si hay algo en el local storage, si hay algo, se convierte en un arreglo, y si no, inicia con un arreglo vacío
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  // State
  // const[auth, setAuth] = useState(false); // definir el Estado, en este caso se llama auth; para modificarlo es setAuth; valor inicial false
  // console.log(auth); // se puede ve igualmente con la extensión de navegador React Developer Tools

  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(initialCart); // iniciar con el localStorage
  // const [cart, setCart] = useState([]); // iniciar con un arreglo vacío

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // guardar el carrito en el local storage con un hook ya que el state de React es asíncrono y con el hook, React se encarga de sincronizarlo
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)) // guarda el carrito en local storage; (identificador, lo que deseas almacenar pero como un String)
  }, [cart]);

  // Effect
  // useEffect(() => {
  //   console.log('Componente listo o escuchando por Auth');
    
  // }, [auth]); // después de la coma van las dependencias dentro de un arreglo

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
  
  // escribir elemento en el carrito de compras con validación de cantidad
  function addToCart(item) {
    console.log('agregando...');

    const itemExist = cart.findIndex((tempGuitar) => tempGuitar.id === item.id); // detecta si existe o no un elemento en el carrito
    
    // incrementar la cantidad si un artículo ya se encuentra agregado al carrito
    if (itemExist >= 0) { // el elemento existe en el carrito
      if (cart[itemExist].quantity >= MAX_ITEMS) return; // evitar que se agreguen más elementos de la máxima cantidad permitida al carrito haciendo clic en el botón "AGREGAR AL CARRITO"
      console.log('Ya existe.');
      const updatedCart = [...cart]; // creamos una copia del carrito para no mutar el state
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      console.log('No existe... agregando...');
      item.quantity = 1; // gregando una nueva propiedad al objeto item, la cantidad de 1
      setCart([...cart, item]); // inmutabilidad del state, se hace una copia del state y se escribe el nuevo elemento que se está agregando al carrito
      // setCart(prevCart => [...prevCart, item]); // inmutabilidad del state, se hace una copia del state y se escribe el nuevo elemento que se está agregando al carrito
    }
  }

  // eliminar los elementos del carrito
  function removeFromCart(id) {
    console.log('Eliminando... ', id);
    setCart(prepCart => prepCart.filter(guitar => guitar.id !== id))
  }

  // incrementar la cantidad de elementos
  function increaseQuantity(id) {
    console.log('Incrementando... ', id);
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item, // se retorna todo como está
          quantity: item.quantity + 1 // pero la cantidad se incrementa en 1
        }
      }

      return item; // para mantener el resto de los elementos a los cuales no se da clic en incrementar la cantidad
    });

    setCart(updatedCart); // se setea el carrito con el contenido de updatedCart
  }

  // decrementar la cantidad de elementos
  function decreaseQuantity(id) {
    console.log("decrementando ... ", id);
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item;
    });    

    setCart(updatedCart);
  }

  // limpiar carrito
  function clearCart() {
    setCart([]);
  }

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
                  cart={ cart }
                  setCart={ setCart }
                  addToCart={ addToCart }
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
