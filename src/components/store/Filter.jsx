import { useQuery } from "react-query";
import { orderByLowerPrice } from "../../services/store.services";




const Filter = () => {

    const { data, status } = useQuery('products', orderByLowerPrice);

    return <form className="mt-5 mb-3">
        <select class="form-select" onChange={(event) => { }}>
            <option selected>Order by price</option>
            <option value="1">Lower first</option>
            <option value="2">Higher first</option>
        </select>
    </form>
}

export default Filter;