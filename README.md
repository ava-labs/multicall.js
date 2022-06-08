# Multicall.js 

[![npm version](https://img.shields.io/npm/v/@avalabs/multicall.svg?style=flat-square)](https://www.npmjs.com/package/@avalabs/multicall)

**Multicall.js** is a lightweight JavaScript library for interacting with the [multicall](https://github.com/makerdao/multicall) smart contract.

Multicall allows multiple smart contract constant function calls to be grouped into a single call and the results aggregated into a single result. This reduces the number of separate JSON RPC requests that need to be sent over the network if using a remote node like Infura, and provides the guarantee that all values returned are from the same block. The latest block number is also returned along with the aggregated results.

## Summary

- Get the return value(s) of multiple smart contract function calls in a single call
- Guarantee that all values are from the same block

## Installation

```bash
yarn add @avalabs/multicall
```

## Test

To run tests use:

```bash
yarn test
```
