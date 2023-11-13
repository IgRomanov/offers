export interface cardInterface {
    monthlyPayment: number,
    term: number,
    apr: number,
    noAutoPay?: { [id: string]: number } | null,
    note?: string,
};