import {Dispatch, JSX, SetStateAction} from "react";

export interface MenuProps {
    setMainBlock: Dispatch<SetStateAction<JSX.Element>>
}