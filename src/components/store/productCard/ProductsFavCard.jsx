import { useQuery } from 'react-query';

import { getUserProducts } from '../../../services/users.services';
import classes from './ProductFavCard.module.css'

const ProductsFavCard = () => {

    let { data, status } = useQuery('prodFavs', getUserProducts);

    console.log(data);
    if (status === 'loading') return <h2>Getting Products...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;
    return <div className={classes.card}>
        {data &&
            data.map((product, index) => (
                <div key={index}>
                    <h5>{product.name}</h5>
                    <img src={product.image} alt="Product" />
                    <p>Price: <span>${product.price}</span></p>
                    <button className={classes.BuyBtn}>Buy</button>
                    <button className={classes.DelBtn}>Del</button>
                    <hr></hr>
                </div >))}
    </div >
}

export default ProductsFavCard;