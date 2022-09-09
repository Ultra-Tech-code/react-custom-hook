import {useState} from 'react'


const useCounter = (initialState: number = 0) => {
    const [counter, setCounter]  = useState(initialState)

    // Increment
    const handleIncrement = () => {
        setCounter(prev => prev  + 1)
    }
    // Decrement
    const  handleDecrement = () => {
        setCounter(prev =>prev  -1)
    }

    // Reset

    const handleReset = ()=>{
        setCounter(0)
    }

    return {counter,  handleIncrement, handleDecrement, handleReset}
}


export default useCounter