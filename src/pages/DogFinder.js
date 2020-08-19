import React, { useState } from 'react'

import Dogs from '../components/Dogs'
import DogPhoto from '../components/DogPhoto'

function DogFinder() {
    const [selectedDog, setSelectedDog] = useState(null)

    console.log(selectedDog)

    return (
        <div>
            <h1>Hello dogs</h1>
            <Dogs setState={setSelectedDog} />
            {selectedDog && <DogPhoto breed={selectedDog} />}            
        </div>
    )
}

export default DogFinder
