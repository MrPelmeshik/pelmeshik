import {ColorTagProps} from "./ColorTagProps";
import {getInvertColorHex} from "../../../utility/getInvertColorHex";
import {getColorRgbaCss} from "../../../utility/getColorRgbaCss";
import {Text} from "@consta/uikit/Text";
import css from './ColorTag.module.css';

export const ColorTagComponent = (props: ColorTagProps): JSX.Element => {
    const color = getColorRgbaCss(props.color, .25);
    const invertColor = getColorRgbaCss(getInvertColorHex(props.color), 1);

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