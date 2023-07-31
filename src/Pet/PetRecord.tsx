import React from 'react';

type Props = {
    id: number,
    petName: string,
    additionalInfo: string,
    displayInfo: boolean
};


export default function PetRecord(props:Props):JSX.Element{
const{id,petName, additionalInfo, displayInfo} = props;
let additional = displayInfo? additionalInfo : "";
    return(
<div>
<h1>Pet {id}</h1>
<h2>{petName}</h2>
<h3>{additional}</h3>
</div>

    )
}