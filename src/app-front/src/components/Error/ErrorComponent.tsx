import {Text} from "@consta/uikit/Text";
import React from "react";
import {ErrorProps} from "./ErrorProps";

export const ErrorComponent = (props: ErrorProps): JSX.Element => {
    return <Text view={'alert'}
                 size={'s'}
    >
        <Text weight={'bold'}
              transform={'uppercase'}
        >
            Ошибка
        </Text>
        <Text>
            {props.message}
        </Text>
    </Text>
};