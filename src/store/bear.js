import { create } from 'zustand'

const useBearStore = create((set) => {
    bears: 0,
})

export default useBearStore