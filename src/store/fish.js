import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const increaseOneFish = () => useFishStore.setState(state => ({ count: state.count + 1 }))
export const removeOneFish = () => useFishStore.setState(state => ({ count: state.count - 1 }))
export const removeAllFish = () => useFishStore.setState(state => ({ count: 0 }))
export const useFishStore = create(
    persist(
        () => ({
            count: 0
        }),
        {
            name: 'fish store'
        }
    )
)
