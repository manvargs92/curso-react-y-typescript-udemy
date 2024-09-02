/** Nombramiento de los CustomHooks: 
 * useDeLoQueSeTrata.js
 * El tipo es .js ya que un custom hook solo debe llevar lógicay no un tamplate como tienen losarchivos .jsx
 * **/

function useCart() {

    const auth = true;
    const carrito = [];

    return { // se recomienda que el return devuelva un objeto
        auth,
        carrito
    }
}

export default useCart;