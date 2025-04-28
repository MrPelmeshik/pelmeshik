import {ColorTagProps} from "./ColorTagProps";
import {getColorRgbaCss} from "../../../utility/getColorRgbaCss";
import {Text} from "@consta/uikit/Text";
import css from './ColorTag.module.css';
import {getContrastColorHex} from "../../../utility/getContrastColorHex";
import {JSX} from "react";

export const ColorTagComponent = (props: ColorTagProps): JSX.Element => {
    const color = getColorRgbaCss(props.color, 1);
    const invertColor = getColorRgbaCss(getContrastColorHex(props.color), 1);

    return <div className={css.body}>
        <div className={css.text}
             style={{
                 backgroundColor: color,
                 color: invertColor,
                 // borderColor: invertColor,
             }}
        >
            <Text size={'xs'}>
                {props.value}
            </Text>
        </div>
    </div>
};