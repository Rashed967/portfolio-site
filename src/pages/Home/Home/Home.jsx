
import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Banner from '../../../components/Banner/Banner';
import AboteSectoin from '../AboteSectoin/AboteSectoin';

const Home = () => {
    return (
        <div>
        <Banner></Banner>    
        <AboteSectoin></AboteSectoin>
        </div>
    );
};

export default Home;