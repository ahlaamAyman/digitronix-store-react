export const loadState = (key) => {
    try {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : undefined
    } catch {
        return undefined
    }
}

export const saveState = (key, state) => {
    try {
        localStorage.setItem(key, JSON.stringify(state))
    } catch {

    }
}