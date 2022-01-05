function InputNumber( {identifier, title, value, onChange}  ) {

    return (
        <>
        <label htmlFor={identifier}>{title}: </label>
                <input id={identifier}
                type="number"
                name={identifier}
                placeholder="Enter number"
                value={value}
                onChange={onChange}></input>
        </>
    )
}

export default InputNumber;