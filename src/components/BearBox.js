import { useState } from 'react'
import { useBearStore, increaseOneBear, removeOneBear, removeAllBear } from '../store/bear'
import { useFishStore } from '../store/fish'

export default function BearBox() {
    const baersCount = useBearStore(state => state.count)
    const fishStore = useFishStore(state => state.count)
    return (
        <>
            <h1>BearBox</h1>
            <div>bear count : {baersCount} {fishStore<=5 && <span style={{color:'lightpink'}}>danger!!! fish is empty!!!</span>} </div>
            <button onClick={increaseOneBear}>increase one bear</button>
            <button onClick={removeOneBear}>remove one bear</button>
            <button onClick={removeAllBear}>remove all bear</button>
        </>
    )
}