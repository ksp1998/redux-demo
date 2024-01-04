export interface ActionType {
    type: string;
    [key: string]: string | number;
}

export const increment = (incrementBy: number = 1) => ({
    type: "INCREMENT",
    incrementBy,
});

export const decrement = (decrementBy: number = 1) => ({
    type: "DECREMENT",
    decrementBy,
});
