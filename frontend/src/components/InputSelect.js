function InputSelect( {identifier, title, value, onChange, options}  ) {

    function Option( { value } ) {      
        return (
            <option value={value}> {value} </option>
        )
    }

    function renderOptions( array ) {

        let key = 1;

        return array.map( e => <Option 
                value={e}
                key={key++} />
        )
    }

    

    return (
        <>
        <label htmlFor={identifier}>{title}: </label>
                <select id={identifier} 
                    name={identifier}
                    value={value}
                    onChange={onChange}
                > 
                    {renderOptions(options)}
                </select>

        </>
    )
}

export default InputSelect;