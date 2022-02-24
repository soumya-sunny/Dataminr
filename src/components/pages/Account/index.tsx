import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Panel from '../../organisms/Panel';
import { Container } from '@mui/material';
import {  IPanel } from '../../../types/types';
import Grid from '@mui/material/Grid';

const Account = () => {
  const [accountData, setAccountData] = useState<IPanel[]>([]);

  // TODO 1.use state managment
  // 2. move hardcoded URL to constants file
  useEffect(() => {
    axios.get(' http://localhost:3001/account').then((data) => {
         setAccountData(data.data)
    });
  }, [])


  return (
    <Container maxWidth="lg">
        <Grid container>
          {accountData.length > 0 ? accountData.map((data, i) =>
            <Panel data={data} key={`${data.panelTitle}_${i}`} />) : <p>No Data</p>
          }
        </Grid>
    </Container>)
}

export default Account