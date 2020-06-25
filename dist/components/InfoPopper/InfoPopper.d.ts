import { Theme, WithStyles } from '@material-ui/core';
import { PopoverOrigin } from '@material-ui/core/Popover';
import * as React from 'react';
declare const styles: (theme: Theme) => Record<"popper" | "info" | "title", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}
interface PopperProps {
    anchorEl: HTMLElement | null;
    anchorOrigin: PopoverOrigin | undefined;
    transformOrigin: PopoverOrigin | undefined;
    open: boolean;
    handleClose: () => void;
    data: JSX.Element;
    style?: React.CSSProperties;
    action?: (e: any) => void;
    transitionDuration?: number;
}
declare type Props = StyleProps & PopperProps;
export declare const InfoPopper: React.ComponentType<Pick<React.PropsWithChildren<Props>, "transformOrigin" | "transitionDuration" | "style" | "open" | "data" | "anchorEl" | "anchorOrigin" | "handleClose" | "action" | "children"> & import("@material-ui/core").StyledComponentProps<"popper" | "info" | "title">>;
export {};
