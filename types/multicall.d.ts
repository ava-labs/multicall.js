/// <reference types="node"/>

declare module '@avalabs/multicall' {
  import { BigNumber } from 'bignumber.js';

  export interface IConfig {
    preset: 'mainnet' | 'kovan' | 'rinkeby' | 'goerli' | 'xdai' | 'ropsten';
    rpcUrl: string;
    multicallAddress: string;
    interval: number;
    staleBlockRetryWait: number;
    errorRetryWait: number;
  }

  export interface IPostProcess {
    (v: any): any;
  }

  export interface ICall {
    target: string;
    call: string[];
    returns: (string | IPostProcess)[][];
  }

  export interface IArgumentsMapping {
    [key: string]: string[];
  }

  export interface IKeysValues {
    [key: string]: any;
  }

  export interface IResult {
    blockNumber: BigNumber;
    original: IKeysValues;
    transformed: IKeysValues;
    keyToArgMap: IArgumentsMapping;
  }

  export interface IResponse {
    results: IResult;
  }

  export function aggregate(calls: Partial<ICall>[], config: Partial<IConfig>): Promise<IResponse>;
}
