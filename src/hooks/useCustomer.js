import axios from 'axios'
import { useState, useEffect } from "react"

export const useCustomer = () => {
    const [customerList, setCustomerList] = useState([])

    useEffect(() => {
        const loadCustomer = async () => {
            const result = await axios.get('/api/customers')
            
            if(!result.data.length) {
                return
            }

            setCustomerList(result.data)
        }

        void loadCustomer()
    }, [])

    const reload = async () => {
            const result = await axios.get('/api/customers')
            
            if(!result.data.length) {
                return
            }

            setCustomerList(result.data)
    }

    const getUserById = (id) => customerList.filter(customer => customer.id === id)[0]

    return {
        list: customerList,
        reload,
        getUserById
    }
}