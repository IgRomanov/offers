const DESKTOP_MAX = 3000;
const DESKTOP_MIN = 1024;
const DESKTOP_ITEMS_LIMIT = 3;

const BASE_MONTHLY_PAYMENT = 599.00;
const NOTE = "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.";
const BASE_APR = 0;

export const data = [
    {
        monthlyPayment: BASE_MONTHLY_PAYMENT,
        term: 6,
        apr: 10,
        noAutoPay: {
            "apr": BASE_APR,
            "monthlyPayment": 699,
        },
        note: NOTE,
    },
    {
        monthlyPayment: BASE_MONTHLY_PAYMENT,
        term: 12,
        apr: BASE_APR,
        note: NOTE,
    },
    {
        monthlyPayment: BASE_MONTHLY_PAYMENT,
        term: 18,
        apr: BASE_APR,
        note: NOTE,

    },
    {
        monthlyPayment: BASE_MONTHLY_PAYMENT,
        term: 24,
        apr: 25,
        noAutoPay: {
            "apr": BASE_APR,
            "monthlyPayment": 599,
        },
        note: NOTE,
    },
];

export const responsive = {
    desktop: {
        breakpoint: { max: DESKTOP_MAX, min: DESKTOP_MIN },
        items: DESKTOP_ITEMS_LIMIT,
    },
};