import { Theme, WithStyles } from '@material-ui/core';
import { Moment } from 'moment';
import * as React from 'react';
declare const styles: () => Record<"button" | "input" | "formControl" | "drawerWrapper" | "drawerLabel" | "drawerButtons" | "dateWrapper", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface Event {
    target: {
        value: string | number;
    };
}
export interface DataItem {
    property: string;
    value: Moment | string | number | null;
    type?: string;
    title?: string;
}
interface OwnProps {
    isOpen: boolean;
    data: DataItem[];
    handleOnClose: () => void;
    handleSubmit: () => void;
    handleChange: (e: Event, key: string) => void;
    handleResetAll: () => void;
    handlePickerChange?: (date: Moment | null, key: string) => void;
}
interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}
declare type Props = OwnProps & StyleProps;
export declare const FilterElement: React.ComponentType<Pick<Props, "data" | "isOpen" | "handleOnClose" | "handleSubmit" | "handleChange" | "handleResetAll" | "handlePickerChange"> & import("@material-ui/core").StyledComponentProps<"button" | "input" | "formControl" | "drawerWrapper" | "drawerLabel" | "drawerButtons" | "dateWrapper">>;
export {};
