import styled from "styled-components";
import ProductCard from "./productCard/ProductCard";


const FlexWrapper = styled.div`
    background-color: whitesmoke;
    padding: 20px;
    border: 1px solid black;
    border-radius: 0 50px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center
`;

const H2 = styled.h2`
    padding: 20px;
    color: var(--secondaryColor)
`;


const ProductsList = ({ title, products, selectedProduct }
) => {


    return <div>
        <H2>{title}</H2>
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