import {useNavigate} from "react-router-dom";

function useSubmit(destination, someFunction, someFunctionParameters) {
    // destination: string of route to move to after submission
    // someFunction: some function to perform on a submit button click
    // someFunctionParameters: object of someFunction arguments

    const navigate = useNavigate();

    return e => {
      e.preventDefault()
      someFunction(someFunctionParameters);
      navigate(destination)
    }
  }

export { useSubmit };