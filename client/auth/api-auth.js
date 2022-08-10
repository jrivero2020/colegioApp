const signin = async (user) => {
    try {
        let response = fetch('/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-TYpe': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const signout = async () => {
    try {
        let response = fetch('/auth/signout', { method: 'GET' })
        return await response.json()
    } catch (error) {
        console.log(error)

    }
}

export { signin, signout}