import { Card, Button, Typography, Switch, FormControlLabel, Box } from '@mui/material';
import { cardInterface } from '../../interfaces/cardInterfaces';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

interface CardElementPropsInterface {
    card: cardInterface,
    currentData: cardInterface[],
    setCurrentData: Dispatch<SetStateAction<cardInterface[]>>
};

const CardElement = (props: CardElementPropsInterface) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChangeAuto = (e: SyntheticEvent): void => {
        setIsChecked(!isChecked);
        props.setCurrentData(props.currentData.map((currentCard) => {
            if (currentCard.term === props.card.term) {
                if (isChecked) {
                    currentCard.term -= 5;
                    currentCard.apr -= 10;
                } else {
                    currentCard.term += 5;
                    currentCard.apr += 10;
                }
                return currentCard;
            }
            return currentCard;
        } ))
      
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', width: '270px', justifyContent: 'space-between', gap: '10px' }} >
            <Box sx={{
                background: 'linear-gradient(0deg, rgba(2,108,20,1) 0%, rgba(1,255,0,1) 100%)',
                clipPath: 'polygon(100% 0, 100% 74%, 32% 97%, 0 74%, 0 0)',
                borderRadius: '10px',
                color: 'white',
                p: '30px 0'
            }}>
                <Box sx={{ padding: '0 60px' }}>
                    <Typography variant='h4'>
                        {Number.isInteger(props.card.monthlyPayment) ? `${props.card.monthlyPayment}.00` : props.card.monthlyPayment}
                    </Typography>
                    <Typography variant='caption'>
                        per month
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '0 60px' }}>
                <Typography variant='subtitle1'>
                    for
                </Typography>
                <Typography variant='caption' sx={{ color: '#00b006', fontSize: '25px' }}>
                    {props.card.term} months
                </Typography>
                <Typography variant='caption' display={"block"}>
                    APR
                </Typography>
                <Typography variant='caption' sx={{ color: '#00b006', fontSize: '25px', display: 'block' }}>
                    {props.card.apr}%
                </Typography>
                <Typography variant='caption'>
                    {props.card.note}
                </Typography>
            </Box>
            <Box sx={{ p: '20px', display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel
                    control={<Switch checked={isChecked} sx={{ '& .MuiSwitch-thumb': { width: '15px', height: '15px' } }} />}
                    label="AutoPay via Bank Account"
                    onChange={handleChangeAuto}
                />
                <Button variant="contained" sx={{ backgroundColor: '#010382' }}>CHOOSE</Button>
            </Box>
        </Card>
    );
}

export default CardElement;