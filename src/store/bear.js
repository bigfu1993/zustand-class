import { create, } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const increaseOneBear = () => useBearStore.setState(state => ({
    count: state.count + 1
}))
export const removeOneBear = () => useBearStore.setState(state => ({
    count: state.count - 1
}))
export const removeAllBear = () => useBearStore.setState(state => ({
    count: 0
}))
export const useBearStore = create(
    devtools(
        persist(
            set => ({
                count: 0,
            }),
            {
                name: 'bear store'
            }
        ),
        {
            name: 'bear store',
            
        }
    )
)