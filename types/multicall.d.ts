/// <reference types="node"/>

import { BigNumber } from 'bignumber.js';

export interface IConfig {
  // web3.js provider
  web3: any;
  // ethers.js provider
  ethers: any;
  rpcUrl: string;
  rpcHeaders: Record<string, string>;
  multicallAddress: string;
  block: string;
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

export function aggregate(
  calls: Partial<ICall>[],
  config: Partial<IConfig>,
): Promise<IResponse>;