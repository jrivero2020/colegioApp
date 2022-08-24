
const create = async (usuario) => {
    try {
        let response = await fetch('/usuario/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }
        )
        return await response.json()
    } catch (error) {
        console.log(error)

    }
}

const inscribe = async (usuario) => {
    try {
        let response = await fetch('/inscripcionUsuario/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }
        )
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}


const listar = async (signal) => {
    try {
        let response = await fetch('/usuario/', {
            method: 'GET',
            signal: signal
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const leer = async (params, credential, signal) => {
    try {
        encabezado.Authorization = 'Baerer ' + credential.t
        let response = await fetch('/usuario/' + params.userId,
            {
                method: 'GET',
                signal: signal,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Baerer ' + credential.t
                }
            })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const update = async (params, credential, usuario) => {
    try {
        let response = await fetch('/usuario/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Baerer ' + credential.t
            },
            body: JSON.stringify(usuario)
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const remove = async (params, credential) => {
    try {
        let response = await fetch('/usuario/' + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Baerer ' + credential.t
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export { create, listar, leer, update, remove, inscribe }