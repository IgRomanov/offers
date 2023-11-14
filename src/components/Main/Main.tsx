import "react-multi-carousel/lib/styles.css";
import { CardElement } from "../CardElement";
import { cardInterface } from "../../interfaces/cardInterfaces";
import { useId, useState } from "react";
import Carousel from "react-multi-carousel";

const data = [
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
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    }
};

const Main = () => {
    const [currentData, setCurrentData] = useState<cardInterface[]>(data);
    const cardId = useId();

    return (
        <main>
            <Carousel
                responsive={responsive}
                partialVisible={false}
                containerClass="carousel-container"
                itemClass="custom-item-style"
                renderArrowsWhenDisabled={true}
            >
                {
                    currentData.map((card, index) => (
                        <CardElement key={`${cardId}-${index}`} card={card} currentData={currentData} setCurrentData={setCurrentData} />
                    ))
                }
            </Carousel>
        </main>
    );
}

export default Main;
