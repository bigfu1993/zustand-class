import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initialValue = {
    food: {
        water: 1,
        canddy: 1
    }
}
export const useFoodStore = create(
    subscribeWithSelector(
        devtools(
            persist(
                () => initialValue,
                {
                    name: 'food store'
                }
            ),
            {
                name: 'food store'
            }
        )
    )
)
export const increaseOneWater = () => useFoodStore.setState(state => (
    {
        food: {
            ...state.food,
            water: state.food.water + 1
        }
    }
))

export const increaseOneCanndy = () => useFoodStore.setState(state => (
    {
        food: {
            ...state.food,
            canddy: state.food.canddy + 1
        }
    }
))