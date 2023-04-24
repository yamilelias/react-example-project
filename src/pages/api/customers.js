import axios from 'axios'

export default async function handler(req, res) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')

    res.status(200).json(result.data)
}