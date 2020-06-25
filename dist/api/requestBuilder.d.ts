import { AxiosError } from 'axios';
export declare type HTTPMethod = 'get' | 'post' | 'delete' | 'put' | 'patch';
export interface JsonBody {
    [key: string]: any;
}
export interface RequestOptions {
    apiVersion: 'applogic' | 'barong' | 'peatio' | 'finex';
    headers?: Object;
}
export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}
export interface ApiVariety {
    barong: string;
    applogic: string;
}
export declare const defaultResponse: Partial<AxiosError['response']>;
export declare const formatError: (responseError: AxiosError) => {
    code: number | undefined;
    message: any;
};
export declare const makeRequest: (request: Request, configData: RequestOptions) => Promise<unknown>;
