export interface IInputs {
    type: string;
    value: string;
}

export interface IForm {
    label: string;
    inputs: IInputs[];
    children?: IForm[];
    isDisabled?: boolean;
}
export interface IPanel {
    panelTitle: string;
    forms: IForm[];
}
export interface IAccount {
    account: IPanel[];
}

export enum ToggleState {
    "ON" = "on",
    "OFF" = "off"
}