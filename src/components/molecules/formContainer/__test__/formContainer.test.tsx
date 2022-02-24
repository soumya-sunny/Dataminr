import React from 'react';
import { render, screen } from '@testing-library/react';
import FormContainer from '../index';

const data = {
    "label": "Audit Log",
    "inputs": [
        {
            "type": "number",
            "value": "10"
        },
        {
            "type": "toggle",
            "value": "on"
        }
    ]
};
describe(' FormContainer Test Suite', () => {
    it('should match with snapshot', () => {
        const { asFragment } = render(<FormContainer data={data} />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should have number field when type is number', () => {
         render(<FormContainer data={data} />);
         const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
    })
    
// TODO test for label 
});
