import "react-multi-carousel/lib/styles.css";
import { CardElement } from "../CardElement";
import { cardInterface } from "../../interfaces/cardInterfaces";
import { useId, useState } from "react";
import Carousel from "react-multi-carousel";
import { data, responsive } from "../../utils/const";
import { Box } from "@mui/material";

const Main = () => {
    const [currentData, setCurrentData] = useState<cardInterface[]>(data);
    const cardId = useId();

    return (
        <main>
            <Box sx={{
                ".carousel-container": {
                    "&>ul": {
                        overflow: 'visible',
                    },
                    "&>button": {
                        borderRadius: '6px',
                        backgroundColor: 'white',
                    },
                    "&>button:hover": {
                        boxShadow: '0px 0px 4px 3px rgba(0, 165, 255, 0.2) inset',
                        backgroundColor: 'azure'
                    },
                    "&>button::before": {
                        color: 'black',
                    },
                    "&>button:disabled:before": {
                        color: 'white'
                    },
                    "&>button:disabled": {
                        backgroundColor: 'rgba(0, 0, 0, .4)',
                    },
                    "& .react-multiple-carousel__arrow--left": {
                        left: '0%',
                    },
                    "& .react-multiple-carousel__arrow--right": {
                        right: '0%',
                    },
                },
                ".custom-item-style": {
                    alignItems: 'center',
                }       
            }}>
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
        </Box>
        </main >
    );
}

export default Main;
