import {Text} from "@consta/uikit/Text";
import {useRef, useState} from "react";
import {HexColorPicker} from "react-colorful";
import {Tooltip} from "@consta/uikit/Tooltip";
import {IFieldColor} from "../../../../types/_baseModel/IFieldColor";
import {IDetailsRenderProps} from "../../../../types/IDetailsRenderProps";
import {ColorTagComponent} from "../../../_common/ColorTag/ColorTagComponent";

export const ColorDetailsComponent = <T extends IFieldColor, >(props: IDetailsRenderProps<T>): JSX.Element => {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const color = props.currentRow[props.accessor] as string ?? '#000000';

    return <div>
        <div onClick={() => setIsTooltipVisible(true)}
             ref={anchorRef} // todo: Надо бы как-то пофиксить и пренести якорь на другой элемент, чтобы не "дергался" при изменении цвета
        >
            <ColorTagComponent value={color}
                               color={color}
            />
        </div>
        <Tooltip isOpen={isTooltipVisible}
                 style={{
                     zIndex: 100,
                 }}
                 placeholder={<>oops...</>}
                 onPointerLeaveCapture={() => {
                     console.log('onPointerLeaveCapture');
                 }}
                 onPointerEnterCapture={() => {
                     console.log('onPointerEnterCapture');
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
            <HexColorPicker color={color}
                            onChange={(value) => props.updateValue?.(props.accessor, value)}
                            onMouseLeave={() => setIsTooltipVisible(false)}
            />
        </Tooltip>
    </div>;
}