import { Card, Button, Typography, FormControlLabel, Box } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import IOSSwitch from '../UI/IOSSwitch';
import { CardElementPropsInterface } from '../../interfaces/cardInterfaces';

const CardElement = (props: CardElementPropsInterface) => {
    const [isChecked, setIsChecked] = useState(true);
    const [updatedFields, setUpdatedFields] = useState({
        currentPrice: props.card.monthlyPayment,
        currentAppr: props.card.apr,
    });

    const handleBtnClick = (e: SyntheticEvent) => {
        const currentOffer = {
            monthlyPayment: updatedFields.currentPrice,
            term: props.card.term,
            appr: updatedFields.currentAppr,
            note: props.card.note,
        };
        console.log(currentOffer);
    };

    useEffect(() => {
        if ((isChecked && props.card.noAutoPay) || !props.card.noAutoPay) {
            setUpdatedFields({
                currentPrice: props.card.monthlyPayment,
                currentAppr: props.card.apr,
            });
        } else if (!isChecked && props.card.noAutoPay) {
            setUpdatedFields({
                currentPrice: props.card.noAutoPay.monthlyPayment,
                currentAppr: props.card.noAutoPay.apr,
            });
        }
    }, [isChecked, props.card]);

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', width: '300px', height: '460px', justifyContent: 'space-between', gap: '10px', borderRadius: '10px', margin: '0 auto' }} >
            <Box sx={{
                filter: "url('#flt_tag')"
            }}>
                <Box borderRadius={'10px'} color={'white'} p={'30px 0'} sx={{
                    background: 'linear-gradient(0deg, rgba(2,108,20,1) 0%, rgba(1,255,0,1) 100%)',
                    clipPath: 'polygon(99% 2%, 99% 74%, 99% 75%, 98% 76%, 32% 100%, 1% 74%, 1% 2%)',
                }}>
                    <Box p={'0 60px'}>
                        <Typography variant='h4' fontWeight={600}>
                            {Number.isInteger(updatedFields.currentPrice) ? `${updatedFields.currentPrice}.00` : updatedFields.currentPrice}
                        </Typography>
                        <Typography variant='caption' fontWeight={500}>
                            per month
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    visibility: 'hidden',
                    position: 'absolute',
                    width: '0px',
                    height: '0px',
                }}>
                    <svg className='flt_svg' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="flt_tag">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                </Box>
            </Box>
            <Box p={'0 60px'}>
                <Typography variant='subtitle1' color={"grey"}>
                    for
                </Typography>
                <Typography variant='caption' color="secondary" fontSize={'25px'} fontWeight={600}>
                    {props.card.term} months
                </Typography>
                <Typography variant='caption' display={"block"} color={"grey"}>
                    APR
                </Typography>
                <Typography variant='caption' color="secondary" fontSize={'25px'} display={'block'} fontWeight={600}>
                    {updatedFields.currentAppr}%
                </Typography>
                {props.card.note &&
                    <Typography variant='caption' color={"grey"}>
                        {props.card.note}
                    </Typography>
                }
            </Box>
            <Box p={'20px'} display={'flex'} flexDirection={'column'}>
                {props.card.noAutoPay &&
                    <FormControlLabel
                        control={<IOSSwitch checked={isChecked} />}
                        label="AutoPay via Bank Account"
                        sx={{
                            margin: '0px',
                            color: 'grey',
                            gap: '10px'
                        }}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                }
                <Button onClick={handleBtnClick} variant="contained" sx={{ backgroundColor: '#010382', marginTop: '15px' }}>CHOOSE</Button>
            </Box>
        </Card>
    );
}

export default CardElement;