import { Theme, WithStyles } from '@material-ui/core';
import * as React from 'react';
export interface RowItemInterface {
    key: string;
    alignRight: boolean;
    label: string | JSX.Element;
    children?: React.ReactElement<'div'>;
}
interface TableProps {
    dataLength: number;
    rows: RowItemInterface[];
    data: any;
    page?: number;
    rowsPerPage: number;
    handleChangePage?: (page: number) => void;
    handleChangeRowsPerPage?: (rows: number) => void;
    hidePagination?: boolean;
    location?: {
        pathname: string;
    };
    handleOpen?: (index: number, uid?: string) => void;
    redirectKey?: string;
    handleOpenPopper?: (i: number) => (event: React.MouseEvent<HTMLElement>) => void;
    getSelectIcon?: (uid: string) => JSX.Element;
    handleRowOnClick?: (n: any) => void;
    isSmall?: boolean;
    showAll?: boolean;
    returnFirstPage?: boolean;
    handleShowAll?: () => void;
    handleReturnFirstPage?: () => void;
    handleEdit?: (index: number) => void;
    handleDelete?: (index: number) => void;
    getRowStatus?: (uid: string) => boolean;
    stickyHeader?: boolean;
    disableTotal?: boolean;
}
declare const styles: (theme: Theme) => Record<"content" | "black" | "grey" | "white" | "cell" | "wait" | "table" | "row" | "small" | "icon" | "active" | "footer" | "label" | "link" | "root" | "selected" | "headers" | "paperStyle" | "tableWrapper" | "tableWrapperMaxHeight" | "emptyTable" | "selectIcon" | "attachment" | "banned" | "arrowForwardIos" | "tableHeader" | "colorLightGrey" | "showAll" | "settings" | "selectedCell" | "selectedLink" | "selectedAttachments" | "chevronGrey" | "cancel" | "cancelIcon" | "disablePagination" | "returnMargin", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}
declare type Props = StyleProps & TableProps;
export declare const Table: React.ComponentType<Pick<Props, "page" | "data" | "rows" | "showAll" | "dataLength" | "rowsPerPage" | "handleChangePage" | "handleChangeRowsPerPage" | "hidePagination" | "location" | "handleOpen" | "redirectKey" | "handleOpenPopper" | "getSelectIcon" | "handleRowOnClick" | "isSmall" | "returnFirstPage" | "handleShowAll" | "handleReturnFirstPage" | "handleEdit" | "handleDelete" | "getRowStatus" | "stickyHeader" | "disableTotal"> & import("@material-ui/core").StyledComponentProps<"content" | "black" | "grey" | "white" | "cell" | "wait" | "table" | "row" | "small" | "icon" | "active" | "footer" | "label" | "link" | "root" | "selected" | "headers" | "paperStyle" | "tableWrapper" | "tableWrapperMaxHeight" | "emptyTable" | "selectIcon" | "attachment" | "banned" | "arrowForwardIos" | "tableHeader" | "colorLightGrey" | "showAll" | "settings" | "selectedCell" | "selectedLink" | "selectedAttachments" | "chevronGrey" | "cancel" | "cancelIcon" | "disablePagination" | "returnMargin">>;
export {};
