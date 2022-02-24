import React from 'react'
import Grid from '@mui/material/Grid';
import FormContainer from '../../molecules/formContainer';
import { IPanel, IForm } from '../../../types/types';
import FormAccordion from '../FormAccordion';

interface PanelProps {
  data: IPanel
}

const Panel: React.FC<PanelProps> = ({ data }) => {
  const { forms, panelTitle } = data;

  // TODO align p tag on left
  // TODO applying class/styles based on json data

  return (
    <Grid item xs={4}>
      <p> {panelTitle}</p>
      {forms.map((form: IForm) =>
        form.children ? <FormAccordion data={form} key={form.label} /> :
          <FormContainer data={form} key={`${data.panelTitle}_${form.label}`} />
      )}
    </Grid>)
}

export default Panel