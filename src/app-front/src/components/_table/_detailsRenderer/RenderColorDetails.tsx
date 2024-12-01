import {DetailsRenderProps} from "../../../types/DetailsRenderProps";
import {Text} from "@consta/uikit/Text";
import {useEffect, useRef, useState} from "react";
import {HexColorPicker} from "react-colorful";
import {Tag} from "@consta/uikit/Tag";
import {getInvertColorHex} from "../../../utility/getInvertColorHex";
import {Tooltip} from "@consta/uikit/Tooltip";

export const RenderColorDetails = <T, >(props: DetailsRenderProps<T>): JSX.Element => {
    const [newValue, setNewValue] = useState<string>(props.currentRow[props.accessor] as string ?? '#000000');
    const [invertColor, setInvertColor] = useState<string>('#ffffff');
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    useEffect(() => {
        setInvertColor(getInvertColorHex(newValue))
    }, [newValue]);


    return <div style={{width: '100%'}}>
        <div onClick={() => setIsTooltipVisible(!isTooltipVisible)}>
            <Tag size={'s'}
                 style={{
                     backgroundColor: newValue,
                     color: invertColor,
                 }}
                 mode={'info'}
                 label={newValue}
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
            <HexColorPicker color={newValue}
                            onChange={setNewValue}
                            onMouseLeave={() => setIsTooltipVisible(false)}
            />
        </Tooltip>
    </div>;
}