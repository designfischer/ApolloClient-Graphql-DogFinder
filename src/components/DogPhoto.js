import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_DOG_PHOTO } from '../graphql/query/GET_DOG_PHOTO'

function DogPhoto({ breed }) {
    const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
        variables: { breed }
    })
    
    if (loading) return <p>Carregando...</p>
    if (error) return <p>Erro...</p>

    return (   
        <>     
            <img 
                src={data.dog.displayImage} 
                style={{ height: 100, width: 100 }}
                alt="foto de um cachorro"
            />            
        </>
    )
}

export default DogPhoto
