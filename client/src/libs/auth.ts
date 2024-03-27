import axios from 'axios'

export async function Authnteced() {
    try {
        const { data } = await axios.get('http://localhost:3005/auth/user', {
            withCredentials: true
        })
        if (data) {
            return data
        }
        return false
    } catch (e) {
        return false
    }
}
