function InputDate( {identifier, title, value, onChange}  ) {

    return (
        <>
        <label htmlFor={identifier}>{title}: </label>
                <input id={identifier}
                type="date"
                name={identifier}
                value={value}
                onChange={onChange}></input>
        </>
    )
}

export default InputDate;