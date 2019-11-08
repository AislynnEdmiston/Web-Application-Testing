import React from 'react'

function Dashboard({strike, ball, foul, hit}) {
    return (
        <div>
            <button onClick={()=> strike()} data-testid='strikebtn'>Strike</button>
            <button onClick={()=> ball()} data-testid='ballbtn'>Ball</button>
            <button onClick={()=> foul()} data-testid='foulbtn'>Foul</button>
            <button onClick={()=> hit()} data-testid='hitbtn'>Hit</button>
        </div>
    )
}

export default Dashboard


// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.

