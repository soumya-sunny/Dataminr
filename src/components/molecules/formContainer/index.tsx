import React from 'react'
import Paper from '@mui/material/Paper';
import { IForm,ToggleState } from '../../../types/types';
import styled from 'styled-components';
import {  Grid, Switch } from '@mui/material';


interface IFormContainerProps {
  data: IForm;
}

const StyledPaper = styled(Paper)`
padding:10px;
margin:10px;
`
// TODO make proper controlled component for number field
const FormContainer: React.FC<IFormContainerProps> = ({ data }) => {
  const { label, inputs } = data;
  return (
    <StyledPaper>
      <Grid container justifyContent="space-between">
        <Grid item sx={{ alignSelf: 'flex-start' }}>{label.toUpperCase()}</Grid>
        <Grid item sx={{ alignSelf: 'flex-end' }}>
          {inputs.map((input,i) =>(
            input.type === "number" ? <input type="number" value={input.value}  key={i} /> :
             <Switch defaultChecked={input.value===ToggleState.ON} key={i} />
            ))}
        </Grid>
      </Grid>
    </StyledPaper>
  )
}

export default FormContainer