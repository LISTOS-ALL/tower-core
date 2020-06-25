import { Theme, WithStyles } from '@material-ui/core';
import * as React from 'react';
declare const styles: (theme: Theme) => Record<"button" | "menu" | "paper" | "textField", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}
interface ModalProps {
    modalClose: () => void;
    open: boolean;
    header: string;
    children: JSX.Element | null;
    buttonLabel: string;
    handleClick: () => void;
    disabled?: boolean;
}
declare type Props = StyleProps & ModalProps;
export declare const Modal: React.ComponentType<Pick<Props, "open" | "disabled" | "header" | "theme" | "children" | "modalClose" | "buttonLabel" | "handleClick"> & import("@material-ui/core").StyledComponentProps<"button" | "menu" | "paper" | "textField">>;
export {};
