import { useState } from "react";
import { useQuery } from "react-query";

import { getProducts } from "../services/store.services";
import ProductsList from "../components/store/ProductsList";
import Cart from "../components/store/Cart";


// const product = {
//     id: 1,
//     name: 'ProductName',
//     image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg',
//     description: 'Little description of the product',
//     category: 'Stickers',
//     price: 2.50,
//     ref: 'reference',
//     stock: true,
//     units: 1,
//     status: 'Pending',
// }

// const products = [
//     { id: 1, name: 'Primero', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 2, name: 'segundo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 3, name: 'ProductName', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 4, name: 'ProductName', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 5, name: 'ProductName', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 6, name: 'ProductName', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 7, name: 'ProductName', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
//     { id: 8, name: 'ultimo', image: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', description: 'Little description of the product', category: 'Stickers', price: 2.50, ref: 'reference', stock: true, units: 1, status: 'Pending', },
// ];


const Store = () => {

    const [cartProducts, setCartProducts] = useState([]);

    const { data, status } = useQuery('products', getProducts);

    if (status === 'loading') return <h2>Getting products...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    // console.log(data, status);

    const onSelectedProduct = (selectedProduct) => {

        const selected = cartProducts.findIndex((prod) => prod.name.toLowerCase() === selectedProduct.name.toLowerCase());

        if (selected === -1) {
            setCartProducts([...cartProducts, selectedProduct]);
        } else {
            const cartProductsCopy = [...cartProducts];
            // const sPcopy = { ...selectedProduct, units: 1 } //aquí he hecho una copia de selectedProduct para establecerle las unidades en 1 ya que cada vez que lo clico para añadirlo, añado 1 unidad.
            const productCopy = { ...cartProducts[selected], units: cartProducts[selected].units + selectedProduct.units };
            console.log(productCopy);
            cartProductsCopy[selected] = productCopy;
            setCartProducts(cartProductsCopy);
        }
    };

    const onDeletedProduct = (deletedProductNumber) => {

        console.log(deletedProductNumber);

        const cartProductsCopy = [...cartProducts]
        cartProductsCopy.splice(deletedProductNumber, 1)
        setCartProducts(cartProductsCopy)
    }


    return <div className="container">
        <div className="row g-5">
            <div className="col-9">
                <ProductsList
                    title='Get your favourite Sticker!!'
                    products={data}
                    selectedProduct={onSelectedProduct}
                />
            </div>
            <div className="col-3">
                <Cart
                    products={cartProducts}
                    deletedProduct={onDeletedProduct}
                />
            </div>
        </div>
    </div>
}

export default Store;