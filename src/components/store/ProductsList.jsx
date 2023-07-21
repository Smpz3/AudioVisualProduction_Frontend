import styled from "styled-components";
import ProductCard from "./productCard/ProductCard";


const FlexWrapper = styled.div`
    background-color: whitesmoke;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center
`;


const ProductsList = ({ title, products, selectedProduct }
) => {


    return <div>
        <h2>{title}</h2>
        <FlexWrapper className="col-12">
            {products &&
                products.map((prod, index) => (
                    <ProductCard
                        key={index}
                        product={prod}
                        selectedProduct={selectedProduct}
                    />
                ))}
        </FlexWrapper>
    </div>;
}

export default ProductsList;