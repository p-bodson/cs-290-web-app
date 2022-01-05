function InputText( {identifier, title, value, onChange}  ) {

    return (
        <>
        <label htmlFor={identifier}>{title}: </label>
                <input id={identifier}
                name={identifier}
                placeholder="Enter text"
                value={value}
                onChange={onChange}></input>
        </>
    )
}

export default InputText;