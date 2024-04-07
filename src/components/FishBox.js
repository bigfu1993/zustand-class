import { useFishStore, increaseOneFish, removeOneFish, removeAllFish } from '../store/fish'
export default function FishBox() {
    const fishCount = useFishStore(state => state.count)
    return (
        <>
            <h1>FishBox</h1>
            <div>fish count : {fishCount}</div>
            <button onClick={increaseOneFish}>increase one fish</button>
            <button onClick={removeOneFish}>remove one fish</button>
            <button onClick={removeAllFish}>remove all fish</button>
        </>
    )
}