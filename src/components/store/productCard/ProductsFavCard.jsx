import { useQuery } from 'react-query';

import { getUserProducts } from '../../../services/users.services';
import classes from './ProductFavCard.module.css'

const ProductsFavCard = () => {

    let { data, status } = useQuery('prodFavs', getUserProducts);

    if (status === 'loading') return <h2>Getting Products...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;
    return <div className='d-flex'>
        {data &&
            data.map((product, index) => (
                <div className={classes.card} key={index}>
                    <h5>{product.name}</h5>
                    <img src={product.image} alt="Product" />
                    <p>Price: <span>${product.price}</span></p>
                    <div>
                        <button className={classes.BuyBtn}>Buy</button>
                        <button className={classes.DelBtn}>Del</button>
                    </div>
                    <hr></hr>
                </div >))}
    </div >
};

export default ProductsFavCard;