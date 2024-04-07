import { create, } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'


const initialValue = {
    count: 0,
    color: 'red',
    size: 'big',
}

export const useBearStore = create(
    devtools(
        persist(
            () => initialValue,
            {
                name: 'bear store',
                storage: createJSONStorage(() => localStorage), //  sessionStorage | localstorage（default）
                partialize: (state) => Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['color'].includes(key)),
                ),
            }
        ),
        {
            name: 'bear store',
        }
    )
)
export const increaseOneBear = () => useBearStore.setState(state => ({
    count: state.count + 1
}))
export const removeOneBear = () => useBearStore.setState(state => ({
    count: state.count - 1
}))
export const removeAllBear = () => useBearStore.setState(state => ({
    count: 0
}))
export const reset = () => {
    useBearStore.setState(state => ({
        count: 0,
    }))
    useBearStore.persist.clearStorage()
}