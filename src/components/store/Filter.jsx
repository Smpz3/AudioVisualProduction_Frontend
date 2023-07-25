
const Filter = ({ changeOrder }) => {

    return <form className="mt-5 mb-3">
        <select className="form-select" onChange={(event) => changeOrder(event.target.value)}>
            <option value="0">Order by price</option>
            <option value="1">Lower first</option>
            <option value="2">Higher first</option>
        </select>
    </form>
}

export default Filter;