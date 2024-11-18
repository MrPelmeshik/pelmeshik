import {BaseDetailProps} from "./BaseDetailProps";
import {Button} from "@consta/uikit/Button";
import {IconClose} from "@consta/icons/IconClose";
import {TableType} from "../../types/TableType";

export const BaseDetailComponent = <T,>(props: BaseDetailProps<T>): JSX.Element => {
    const body = props.colDef
        .map(col => props.item[col.accessor as keyof TableType<T>] as string)
        .map(col => <div>{col}</div>);

    return <div>
        <Button size={'s'}
                onClick={props.close}
                view={'ghost'}
                iconLeft={IconClose}
                onlyIcon
        />
        {body}
    </div>;
}