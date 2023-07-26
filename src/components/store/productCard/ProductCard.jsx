import { isLogged } from '../../../services/admin.services';
import { createProductFavs } from '../../../services/users.services';
import classes from './ProductCard.module.css'

const ProductCard = ({ product, selectedProduct }) => {

    // console.log(product.id);
    // createProductFavs(product.id);

    const addProduct = () => {
        if (selectedProduct)
            selectedProduct(product);
    }

    return <div className={classes.card}>
        <h4>{product.name}</h4>
        <img src={product.image} alt="Product" />
        <p>Precio: ${product.price} </p>
        <p>{product.description}</p>
        {isLogged() &&
            <button className={classes.addBtn} onClick={addProduct}>Add</button>
        }
    </div>
}

export default ProductCard;