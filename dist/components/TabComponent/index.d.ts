import { Theme, WithStyles } from '@material-ui/core';
import * as React from 'react';
declare const styles: (theme: Theme) => Record<"label" | "tabs", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}
interface TabProps {
    activeIndex: number;
    labels: string[];
    handleChange: (event: React.ChangeEvent<{}>, index: number) => void;
    rootClassNames?: any;
}
declare type Props = StyleProps & TabProps;
export declare const Tabs: React.ComponentType<Pick<React.PropsWithChildren<Props>, "children" | "handleChange" | "activeIndex" | "labels" | "rootClassNames"> & import("@material-ui/core").StyledComponentProps<"label" | "tabs">>;
export {};
