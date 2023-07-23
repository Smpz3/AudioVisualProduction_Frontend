import classes from './ProductCard.module.css'



const ProductCard = ({ product, selectedProduct }) => {

    const addProduct = () => {
        //En este caso como puede ser que productoSeleccionado sea o una función o undefined es mejor poner un if que una '!' para obligar a ejecutar la función, ya que si es undefined simplemente no hará nada y si existe pues ejecutará la función.
        if (selectedProduct)
            selectedProduct(product);
    }

    return <div className={classes.card}>
        {/* <span>{product.id}</span> */}
        <h4>{product.name}</h4>
        <img src={product.image} alt="Product" />
        <p>Precio: ${product.price} </p>
        <p>{product.description}</p>
        <button className={classes.addBtn} onClick={addProduct}>Add</button>
    </div>;
}

export default ProductCard;