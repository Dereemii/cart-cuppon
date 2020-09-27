import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSmileWink, faMinus } from "@fortawesome/free-solid-svg-icons";
import logowhite from "../../src/img/logo-white.png";


/* ------------------------------------ VALUE ADDED TO CART --------------------------------- */
const smallCart = (quantity) => {
    return (
        <span className="smallCart">{quantity}</span>
    )
}

/* ---------------------------------NAVBAR ----------------------------------------------- */
function Navbar({ quantity, addToCart }) {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const smileIcon = <FontAwesomeIcon icon={faSmileWink} />

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white container-fluid p-0 m-0">
                <a className="navbar-brand" href="/">
                    <img src={logowhite} alt="logo-img" className="logo pl-3" />
                </a>
                <i className="navIcon">{smileIcon}</i>
                <div className="navbar-nav ml-auto pl-5">
                    <span>Carrito</span>
                    <span className="text-white pl-2" href="/">
                    {addToCart === true ? smallCart(quantity) : null}
                        <span className="mx-3 ">{cartIcon}</span>
                        
                    </span>
                </div>
            </nav>
        </>
    )
}


/* -------------------------------------- FOOTER ---------------------------------------------------------- */
const Footer = () => {
    return (
        <>
            <div class=" text-center font-weight-bold py-3 bg-success text-white container-fluid p-0 m-0">
                <h2>CUPPON</h2>
                <p> © 2020 Cuppon</p>
            </div>
        </>
    )
}

/* ------------------------------------- SHOPPING CART ADDING------------------------------------------ */


function Cart() {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const minusIcon = <FontAwesomeIcon icon={faMinus} />

    /* ------------------------ PRODUCTS ---------------------------------------- */
    const [products] = useState([
        {
            title: "Producto 1",
            previousPrice: "45.000",
            actualPrice: "20.000",
            urlImg: "https://github.com/Dereemii/Cuppon-Page/blob/master/Assets/img/cupon-1.jpg?raw=true",
        },
        {
            title: "Producto 2",
            previousPrice: "45.000",
            actualPrice: "20.000",
            urlImg: "https://raw.githubusercontent.com/Dereemii/Cuppon-Page/master/Assets/img/cupon-2.jpg",
        },
        {
            title: "Producto 3",
            previousPrice: "45.000",
            actualPrice: "20.000",
            urlImg: "https://raw.githubusercontent.com/Dereemii/Cuppon-Page/master/Assets/img/cupon-3.jpg",
        },
        {
            title: "Producto 4",
            previousPrice: "55.000",
            actualPrice: "20.000",
            urlImg: "https://raw.githubusercontent.com/Dereemii/Cuppon-Page/master/Assets/img/cupon-4.jpg",
        },
        {
            title: "Producto 5",
            previousPrice: "90.000",
            actualPrice: "20.000",
            urlImg: "https://raw.githubusercontent.com/Dereemii/Cuppon-Page/master/Assets/img/cupon-5.jpg",
        },
        {
            title: "Producto 6",
            previousPrice: "30.000",
            actualPrice: "20.000",
            urlImg: "https://raw.githubusercontent.com/Dereemii/Cuppon-Page/master/Assets/img/cupon-6.jpg",
        },

    ])

    // GENERAL PRICE
    let defaultGeneralPrice = 20000
    const [generalPrice] = useState(defaultGeneralPrice);

    // QUANTITY
    const [quantity, setQuantaty] = useState(1);

    // TOTAL PRICE
    const [totalPrice, setTotalPrice] = useState(generalPrice);

    const [addToCart, setAddToCart] = useState(false);
    console.log(`Add to cart button click ? ${addToCart}`);

    function incrementQuentaty() {

        setQuantaty(prevQuantity => prevQuantity + 1);
        setTotalPrice(prevPrice => prevPrice + generalPrice);
    }
    function decrementQuantity() {
        setQuantaty(prevQuantity => prevQuantity - 1);
        setTotalPrice(prevPrice => prevPrice - generalPrice);
    }

    function handleClick(e) {
        e.preventDefault();
        setAddToCart(prevAddToCart => prevAddToCart = true);
    }

    /* ------------------------------------ SFC - SIGLE FILE COMPONENT ------------------------------------ */
    return (
        <>
            <Navbar quantity={quantity} addToCart={addToCart} />
            <div className="container text-center mt-3  ">
 
                <div className="border col py-3">
                    <h1 className="h3">Carrito</h1>
                    <div className="">
                        <div className="quantaty">Cantidad de productos en el carrito: {quantity}</div>                
                    </div>
                    <div className="">
                        <div className="">Precio Total ${totalPrice}</div>
                    </div>
                    <div className="">
                        <button className="btn btn-success" onClick={handleClick} >Actualizar carrito</button>
                    </div>
                </div>
      
            </div>

            {/* -------------------------------------- Card Template -------------------------------------------------- */}
            <div className="row ">
                {products.map((product, id) => (
                    <div className="col ml-5 py-2" key={id}>
                        <div className="card">
                            <img src={product.urlImg} className="card-img-top" alt="..." />
                            <div className="pt-2 ml-2">
                                <p className="card-text cardText colorGrey">{product.title}</p>
                            </div>
                            <div className="px-4">
                                <hr />
                            </div>
                            <div className="card-body py-0 ">
                                <button onClick={incrementQuentaty} className="btn btn-success mr-2"> {cartIcon}</button>
                                <button className="btn btn-secondary mr-2" onClick={decrementQuantity}>{minusIcon}</button>
                                <br/>
                                <p className="d-inline-block text-gray mr-2 previousPrice">{product.previousPrice}</p>
                                <p className="h5 d-inline-block text-success pb-0 ">{product.actualPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ----------------------------------------------- End from Card Template ------------------------------- */}

            <Footer />
        </>
    )
}

export default Cart;