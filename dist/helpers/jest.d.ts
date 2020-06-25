import MockAdapter from 'axios-mock-adapter';
import { Middleware } from 'redux';
export declare const setupMockStore: (appMiddleware: Middleware, log?: boolean) => any;
export declare const setupMockAxios: () => MockAdapter;
export declare const mockNetworkError: (mockAxios: any) => void;
