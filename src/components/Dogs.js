import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_DOGS } from '../graphql/query/GET_DOGS'

function Dogs({ setState }) {

    function onDogSelected(e) {
        setState(e.target.value)
    }

    const { loading, error, data } = useQuery(GET_DOGS)    

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Erro...</p>

    return (
        <select name='dog' onChange={onDogSelected}>
            {
                data.dogs.map(dog => (
                    <option key={dog.id} value={dog.breed}>
                        {dog.breed}
                    </option>
                ))
            }
        </select>
    )
}

export default Dogs
