// function Gitar(props) { // props - palabra reservada de React, existe allí ya sea que se le pasen información a los componentes
function Gitar({ guitar, auth }) { // usando destructuring

    const { id, name, image, description, price } = guitar; // aplicando destructuring a guitar

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
                        >Agregar al Carrito</button>
                    </div>
                </div>
    )

}

export default Gitar;