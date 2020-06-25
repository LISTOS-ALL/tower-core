import * as React from 'react';
import { CombinedState, Reducer } from 'redux';
export interface MenuItem {
    key: string;
    value: string;
    isLink: boolean;
}
export interface HeaderActions {
    pagesWithFilter?: string[];
    pagesWithRefresh?: string[];
    pagesWithExport?: string[];
    customHeaderActions?: JSX.Element;
}
export interface TowerPluginInterface {
    getReduxReducer: () => Reducer<CombinedState<{}>>;
    getReduxSaga: () => any;
    getRoutes: () => React.Component;
    getHeaderActions: () => HeaderActions;
    getMenu: () => MenuItem[];
    getMenuIcons: (name: string) => JSX.Element;
}
export declare class TowerPlugin implements TowerPluginInterface {
    getReduxReducer: () => Reducer<CombinedState<{}>>;
    getReduxSaga: () => any;
    getRoutes: () => React.Component;
    getHeaderActions: () => HeaderActions;
    getMenu: () => MenuItem[];
    getMenuIcons: (name: string) => JSX.Element;
    constructor(reduxReduser: any, reduxSaga: any, routes: any, headerActions: any, menu: any, icons: any);
}
