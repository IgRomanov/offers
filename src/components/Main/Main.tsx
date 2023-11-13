import { CardElement } from "../CardElement";
import { Box } from "@mui/material";
import { cardInterface } from "../../interfaces/cardInterfaces";
import { useId, useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
    {
        monthlyPayment: 599.00,
        term: 6,
        apr: 0,
        noAutoPay: null,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",
    },
    {
        monthlyPayment: 599.00,
        term: 12,
        apr: 0,
        noAutoPay: null,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.", 
    },
    {
        monthlyPayment: 599.00,
        term: 18,
        apr: 0,
        noAutoPay: null,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",
        
    },
    {
        monthlyPayment: 599.00,
        term: 24,
        apr: 0,
        noAutoPay: null,
        note: "This is a 24 months APR plan with a 0% APR benefit. If paid in full when 6 months.",   
    }
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 0
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
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
                
            >
                {
                    currentData.map((card, index) => (
                        <CardElement key={`${cardId}-${index}`} card={card} currentData={currentData} setCurrentData={setCurrentData}/>
                    ))
                }
                </Carousel>
        </main>
    );
}

export default Main;
