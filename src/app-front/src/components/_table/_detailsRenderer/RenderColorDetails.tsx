import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {Text} from "@consta/uikit/Text";
import {useRef, useState} from "react";
import {HexColorPicker} from "react-colorful";
import {Tag} from "@consta/uikit/Tag";
import {getInvertColorHex} from "../../../utility/getInvertColorHex";
import {Tooltip} from "@consta/uikit/Tooltip";

export const RenderColorDetails = <T, >(props: DetailsRenderProps<T>): JSX.Element => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return <div style={{width: '100%'}}>
        <div onClick={() => setIsTooltipVisible(!isTooltipVisible)}>
            <Tag size={'s'}
                 style={{
                     backgroundColor: props.currentRow[props.accessor] as string ?? '#000000',
                     color: getInvertColorHex(props.currentRow[props.accessor] as string ?? '#000000'),
                 }}
                 mode={'info'}
                 label={props.currentRow[props.accessor] as string ?? '#000000'}
                 ref={anchorRef}
            />
        </div>
        <Tooltip isOpen={isTooltipVisible}
                 style={{
                     zIndex: 100,
                 }}
                 placeholder={<>oops...</>}
                 onPointerLeaveCapture={() => {
                 }}
                 onPointerEnterCapture={() => {
                 }}
                 anchorRef={anchorRef}
        >
            <Text size={'xs'}
                  view={'ghost'}
                  style={{
                      margin: '0 0 .6rem 0'
                  }}
            >
                Настройка цвета
            </Text>
            <HexColorPicker color={props.currentRow[props.accessor] as string ?? '#000000'}
                            onChange={(value) => props.updateValue?.(props.accessor, value)}
                            onMouseLeave={() => setIsTooltipVisible(false)}
            />
        </Tooltip>
    </div>;
}