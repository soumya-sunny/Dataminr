import React from 'react'
import Grid from '@mui/material/Grid';
import FormContainer from '../../molecules/formContainer';
import { IPanel, IForm } from '../../../types/types';
import FormAccordion from '../FormAccordion';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

interface PanelProps {
  data: IPanel
}

const StyledBox=styled(Box)`
min-height:31px;
text-align:left
`
const Panel: React.FC<PanelProps> = ({ data }) => {
  const { forms, panelTitle } = data;

  // TODO applying class/styles based on json data
  return (
    <Grid item xs={4}>
      <StyledBox > <Typography color="textPrimary">{panelTitle.toUpperCase()}</Typography></StyledBox>
      {forms.map((form: IForm) =>
        form.children ? <FormAccordion data={form} key={form.label} /> :
          <FormContainer data={form} key={`${data.panelTitle}_${form.label}`} />
      )}
    </Grid>)
}

export default Panel