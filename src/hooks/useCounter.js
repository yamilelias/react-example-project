import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => setCounter(prevCounter => prevCounter + 1)
    const decrementCounter = () => setCounter(prevCounter => prevCounter - 1)

    return {
        counter,
        incrementCounter,
        decrementCounter
    }
}