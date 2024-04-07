import { useEffect, useState } from 'react'
import { reset, useBearStore, increaseOneBear, removeOneBear, removeAllBear } from '../store/bear'
import { useFishStore } from '../store/fish'

export default function BearBox() {
    const [color, setColor] = useState(true)
    const baersCount = useBearStore(state => state.count)

    useEffect(() => {
        const unsub = useFishStore.subscribe((state, preState) => {
            if (state.count > 5 && preState.count <= 5) {
                setColor(false)
            }
            if (state.count <= 5 && preState.count > 5) {
                setColor(true)
            }
        })
        return unsub
    }, [])
    
    return (
        <>
            <h1>BearBox [ {Math.random()} ]  </h1>
            <p>{color ? <span style={{ color: 'lightpink' }}>danger!!! fish is empty!!!</span> : <span style={{ color: 'lightgreen' }}>oops!!! fish is enough!!!</span>}</p>
            <div>bear count : {baersCount}</div>
            <button onClick={increaseOneBear}>increase one bear</button>
            <button onClick={removeOneBear}>remove one bear</button>
            <button onClick={removeAllBear}>remove all bear</button>
            <button onClick={reset}>remove all bear(手写reset)</button>
            <button onClick={useBearStore.persist.clearStorage}>clear storage(仅清除storage不会重置内存数据)</button>
        </>
    )
}