import { AxiosResponse } from 'axios';
import { JsonBody } from './requestBuilder';
export declare type RequestBody = JsonBody | FormData;
export interface RequestOptions {
    apiVersion: 'applogic' | 'barong' | 'peatio' | 'finex';
    headers?: Object;
}
export declare type RequestMethod = (config: RequestOptions) => (url: string, body?: RequestBody) => Promise<AxiosResponse['data']>;
export interface ApiWrapper {
    get: RequestMethod;
    post: RequestMethod;
    patch: RequestMethod;
    put: RequestMethod;
    delete: RequestMethod;
}
export declare const API: ApiWrapper;
