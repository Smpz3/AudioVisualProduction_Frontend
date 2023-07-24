import { useQuery } from "react-query";
import { orderByHigherPrice, orderByLowerPrice } from "../../services/store.services";




const Filter = ({ changeOrder }) => {


    // const onchagee = () => {
    //     //En este caso como puede ser que productoSeleccionado sea o una función o undefined es mejor poner un if que una '!' para obligar a ejecutar la función, ya que si es undefined simplemente no hará nada y si existe pues ejecutará la función.
    //     if (selectedProduct)
    //         selectedProduct(product);
    // }
    // const onchangee = (event) => {

    //     change(event.target.value);
    // }

    return <form className="mt-5 mb-3">
        <select className="form-select" onChange={(event) => changeOrder(event.target.value)}>
            <option value="0">Order by price</option>
            <option value="1">Lower first</option>
            <option value="2">Higher first</option>
        </select>
    </form>
}

export default Filter;