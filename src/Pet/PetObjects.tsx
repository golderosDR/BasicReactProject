import PetRecord from './PetRecord';
import React from 'react';


export default function PetObjects(): JSX.Element {

    type Pet = {
        id: number,
        petName: string,
        additionalInfo: string,
        displayInfo: boolean
    };

    let cat: Pet = {
        id: 1,
        petName: "Barsik",
        additionalInfo: "a cat",
        displayInfo: true
    }

    let dog: Pet = {
        id: 2,
        petName: "Tusik",
        additionalInfo: "a dog",
        displayInfo: false
    }

    let turtle: Pet = {
        id: 3,
        petName: "Tortilla",
        additionalInfo: "a turtle",
        displayInfo: true
    }

    return (
        <div>
            <h1>PetObjects</h1>
            <PetRecord
                id={cat.id}
                petName={cat.petName}
                additionalInfo={cat.additionalInfo}
                displayInfo={cat.displayInfo} />

            <PetRecord
                id={dog.id}
                petName={dog.petName}
                additionalInfo={dog.additionalInfo}
                displayInfo={dog.displayInfo} />

            <PetRecord
                id={turtle.id}
                petName={turtle.petName}
                additionalInfo={turtle.additionalInfo}
                displayInfo={turtle.displayInfo} />
        </div>
    );
}