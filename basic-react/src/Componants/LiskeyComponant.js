import React from 'react'



const LiskeyComponant = () => {

    const candy = [
        {
            id: 0 ,
            name_candy: 'sweet',
            sugar: 80,
        },
        {
            id: 1 ,
            name_candy: 'drak',
            sugar: 20,
        }
    ];

    return (
        <div>
            { candy.map((c) =>
            <li key={c}>
                <p>Candy: {c.name_candy}</p>
                <p>Sugar: {c.sugar}</p>
            </li>
           )}     
        </div>
    )
}

export default LiskeyComponant

