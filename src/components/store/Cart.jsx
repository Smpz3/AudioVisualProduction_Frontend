import styled from "styled-components";

const H3 = styled.h3`
    padding: 20px;
    color: var(--secondaryColor)
`;

const BtnDel = styled.button`
color: var(--textColor);
    padding: 10px 5px;
    background-color: var(--mainColor);
    border-radius: 0 50px 0 50px;
    width: 100%;
    max-width:80px;
`;
const Li = styled.li`

`;

const Cart = ({ products, deletedProduct }) => {


    const calculateTotal = () => products.reduce((total, product) => total + (product.price * product.units), 0);

    return <div className="row">
        <H3>Total: ${calculateTotal()}</H3>
        <ul className="list-group">
            {products?.map((prod, index) => (
                <Li className="list-group-item d-flex justify-content-between" key={index}>
                    {prod.name}, {prod.units}uds.  x {prod.price}€
                    <BtnDel className="btn btn-danger" onClick={() => deletedProduct(index)}>Delete</BtnDel>
                </Li>

            ))}
        </ul>
    </div>;
}

export default Cart;