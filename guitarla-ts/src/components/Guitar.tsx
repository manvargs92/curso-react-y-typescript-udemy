type TGuitar = {
    id : number;
    name : string;
    image : string;
    description : string;
    price : number;
}

// function Gitar(props) { // props - palabra reservada de React, existe allí ya sea que se le pasen información a los componentes
// function Gitar({ guitar, setCart, cart, addToCart, auth }) { // usando destructuring
function Gitar({ guitar, addToCart } : {guitar : TGuitar, addToCart : (item: TGuitar) => void}) { // asignar types inline a los props

    const { id, name, image, description, price } = guitar; // aplicando destructuring a guitar

    /* Modificando el estate de Carrito */
    // la peor forma
    // const handleClick = (guitar) => {
    //     setCart([...cart, guitar]); // se puede pasar directo en el evento onClick sin utilizar la fucnión handleClick
    // };    

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src={ `/img/${image}.jpg` } alt="imagen guitarra" />
                    </div>
                    <div className="col-8">
                        {/* <h3 className="text-black fs-4 fw-bold text-uppercase">{ guitar.name }</h3> */}{/* sin aplicar destructuring al prop guitar */}
                        <h3 className="text-black fs-4 fw-bold text-uppercase">{ name }</h3>{/* aplicando destructuring al prop guitar */}
                        <p>{ description }</p>
                        {/* <p className="fw-black text-primary fs-3">$ { props.price }</p> */}{/* props sin destructuring */}
                        <p className="fw-black text-primary fs-3">$ { price }</p>{/* usando destructuring */}
                        <button 
                            type="button"
                            className="btn btn-dark w-100"
                            /* Eventos en JSX */
                            onClick={ () => addToCart(guitar) } // () => cuando se le pasan argumentos a los eventos deben llevar un callback para evitar que se mande a llamar la función automáticamente
                            // onClick={ () => handleClick(guitar) } // () => cuando se le pasan argumentos a los eventos deben llevar un callback para evitar que se mande a llamar la función automáticamente
                            // onClick={ () => setCart(prevCart => [...cart, guitar]) } // el state del Carrito se pasa en automático en el callback (prevCartpo) sin tener que pasar cart en el prop
                        >Agregar al Carrito</button>
                    </div>
                </div>
    )

}

export default Gitar;