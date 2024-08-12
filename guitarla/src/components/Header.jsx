import { Fragment } from 'react';

function Header() {

    const total = 100;

    return (
        <Fragment> {/* fragments: rodear el html con una etiqueta padre y evitar crear divs inecesarios */}
            <p>Total a pagar: { total }</p>
            <p>Después</p>
        </Fragment>
    );

}

export default Header;