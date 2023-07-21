const Cart = ({ products, deletedProduct }) => {


    const calculateTotal = () => products.reduce((total, product) => total + (product.price * product.units), 0);

    return <div className="row">
        <h3>Total: ${calculateTotal()}</h3>
        <ul className="list-group">
            {products?.map((prod, index) => (
                <li className="list-group-item d-flex justify-content-between" key={index}>
                    {prod.name}, {prod.units}uds.  x {prod.price}€
                    <button className="btn btn-danger" onClick={() => deletedProduct(index)}>Eliminar</button></li>
            ))}
        </ul>
    </div>;
}

export default Cart;