import { useEffect, useState } from "react";

import { getProducts, orderByHigherPrice, orderByLowerPrice } from "../services/store.services";
import ProductsList from "../components/store/ProductsList";
import Cart from "../components/store/Cart";
import Filter from "../components/store/Filter";


const Store = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            setData(response);
        }
        fetchData();
    }, []);

    const onSelectedProduct = (selectedProduct) => {

        const selected = cartProducts.findIndex((prod) => prod.name.toLowerCase() === selectedProduct.name.toLowerCase());

        if (selected === -1) {
            setCartProducts([...cartProducts, selectedProduct]);
        } else {
            const cartProductsCopy = [...cartProducts];
            const productCopy = { ...cartProducts[selected], units: cartProducts[selected].units + selectedProduct.units };
            cartProductsCopy[selected] = productCopy;
            setCartProducts(cartProductsCopy);
        };
    };

    const onDeletedProduct = (deletedProductNumber) => {

        const cartProductsCopy = [...cartProducts];
        cartProductsCopy.splice(deletedProductNumber, 1);
        setCartProducts(cartProductsCopy);
    };

    const onChange = async (selection) => {

        let response;
        switch (selection) {
            case "1":
                response = await orderByLowerPrice();
                break;

            case "2":
                response = await orderByHigherPrice();
                break;

            default:
                response = await getProducts();
                break;
        }
        setData(response);
    };

    return <div className="container">
        <div className="row g-5 mt-1">
            <div className="col-9 mt-0">
                <ProductsList
                    title='Get your favourite Sticker!!'
                    products={data}
                    selectedProduct={onSelectedProduct}
                />
            </div>
            <div className="col-3 mt-5 d-block">
                <Filter products={data} changeOrder={onChange} />
                <Cart
                    products={cartProducts}
                    deletedProduct={onDeletedProduct}
                />
            </div>
        </div>
    </div>
}

export default Store;