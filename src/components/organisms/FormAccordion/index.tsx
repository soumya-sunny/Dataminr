import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IForm } from '../../../types/types';
import FormContainer from '../../molecules/FormContainer';

interface IFormAccordionProps {
    data: IForm;
}

const FormAccordion: React.FC<IFormAccordionProps> = ({ data }) => {
    const { inputs, children, isDisabled } = data;

    // TODO find toggle in the inputs array and use for expanded prop
    // Do not assume index
    return (
        <Accordion disabled={isDisabled} expanded={inputs[0].value === "on"}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <FormContainer data={data} />
            </AccordionSummary>
            <AccordionDetails>
                {Array.isArray(children) && children.map((child) => (
                    <FormContainer data={child} key={child.label}/>
                ))}
            </AccordionDetails>
        </Accordion>)
}

export default FormAccordion