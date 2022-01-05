function useChange(state, setState) {

    function handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
    
        setState({
            ...state,
            [name]: value
        })
    }

    return handleChange;
}

export { useChange };
