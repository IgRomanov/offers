export const data = [
    {
        monthlyPayment: 599.00,
        term: 6,
        apr: 10,
        noAutoPay: {
            "apr": 0,
            "monthlyPayment": 699,
        },
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",
    },
    {
        monthlyPayment: 599.00,
        term: 12,
        apr: 0,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",
    },
    {
        monthlyPayment: 599.00,
        term: 18,
        apr: 0,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",

    },
    {
        monthlyPayment: 799.00,
        term: 24,
        apr: 25,
        noAutoPay: {
            "apr": 0,
            "monthlyPayment": 599,
        },
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",
    },
];

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
};