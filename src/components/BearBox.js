import { useState } from 'react'
import { reset, useBearStore, increaseOneBear, removeOneBear, removeAllBear } from '../store/bear'
import { useFishStore } from '../store/fish'

export default function BearBox() {
    const baersCount = useBearStore(state => state.count)
    const fishStore = useFishStore(state => state.count)
    return (
        <>
            <h1>BearBox [ {Math.random()} ]  </h1>
            <p>{fishStore <= 5 ? <span style={{ color: 'lightpink' }}>danger!!! fish is empty!!!</span> : <span style={{ color: 'lightgreen' }}>oops!!! fish is enough!!!</span>}</p>
            <div>bear count : {baersCount}</div>
            <button onClick={increaseOneBear}>increase one bear</button>
            <button onClick={removeOneBear}>remove one bear</button>
            <button onClick={removeAllBear}>remove all bear</button>
            <button onClick={reset}>remove all bear(手写reset)</button>
            <button onClick={useBearStore.persist.clearStorage}>clear storage(仅清除storage不会重置内存数据)</button>
        </>
    )
}