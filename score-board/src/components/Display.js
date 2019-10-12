import React from 'react'

function Display({stat: {balls, strikes}}) {
    return (
        <div>
            <h2 data-testid='ballcount'>Balls: {balls}</h2>
            <h2 data-testid='strikecount'>Strikes: {strikes}</h2>


        </div>
    )
}

export default Display


// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.