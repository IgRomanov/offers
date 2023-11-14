import { Dispatch, SetStateAction } from "react"

export interface cardInterface {
    monthlyPayment: number,
    term: number,
    apr: number,
    noAutoPay?: { [id: string]: number },
    note?: string,
};

export interface CardElementPropsInterface {
    card: cardInterface,
    currentData: cardInterface[],
    setCurrentData: Dispatch<SetStateAction<cardInterface[]>>
};