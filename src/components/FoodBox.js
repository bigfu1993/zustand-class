import { useEffect } from "react"
import { useFoodStore, increaseOneWater, increaseOneCanndy } from "../store/food"

export default function FoodBox() {
    const food = useFoodStore(state => state.food)
    const waterCount = useFoodStore(state => state.food.water)
    const canddyCount = useFoodStore(state => state.food.canddy)
    useEffect(() => {
        useFoodStore.subscribe(state => state.food.water, (food, preFood) => {
            console.log(food, preFood)
        })
    })
    return (
        <>
            <h1>FoodBox</h1>
            <div>water:{food.water}  | {waterCount}</div>
            <div>canddy:{food.canddy}  | {canddyCount}</div>
            <button onClick={increaseOneWater}>increaseOneWater</button>
            <button onClick={increaseOneCanndy}>increaseOneCanndy</button>

        </>
    )
}