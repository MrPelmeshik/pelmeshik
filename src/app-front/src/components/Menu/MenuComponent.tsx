import {MenuProps} from "./MenuProps";
import css from './Menu.module.css';
import {List, ListBox} from "@consta/uikit/ListCanary";
import {useVirtualScroll} from '@consta/uikit/useVirtualScroll';
import {MenuGroups} from "./MenuGroups";
import {MenuItems} from "./MenuItems";

export const MenuComponent = (props: MenuProps): JSX.Element => {
    const {listRefs, scrollElementRef, slice, spaceTop} = useVirtualScroll({
        length: MenuItems.length,
        isActive: true,
    });

    return <ListBox ref={scrollElementRef}
                    className={css.body}
                    size={'s'}
                    border
                    placeholder=""
                    onPointerEnterCapture={() => {
                    }}
                    onPointerLeaveCapture={() => {
                    }}
    >
        <List items={MenuItems}
              groups={MenuGroups}
              size={'s'}
              onItemClick={(item) => props.setMainBlock(item.element)}
              itemSpase={{p: 'xs'}}
              groupLabelSpase={{mH: 'xs', pT: 's', pB: 'xs'}}
        />
    </ListBox>;
}