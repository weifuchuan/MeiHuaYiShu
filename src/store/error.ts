/*
This file from "react-native-storage" which is modified for TypeScript. 
*/
/**
 * Created by sunny on 9/1/16.
 */

export class NotFoundError {
  name: string;
  message: string;
  stack: string | undefined;
  constructor(message:any) {
    this.name = 'NotFoundError';
    this.message = `Not Found! Params: ${message}`;
    this.stack = new Error().stack; // Optional
  }
}
// NotFoundError.prototype = Object.create(Error.prototype);

export class ExpiredError {
  name: string;
  message: string;
  stack: string | undefined;
  constructor(message: any) {
    this.name = 'ExpiredError';
    this.message = `Expired! Params: ${message}`;
    this.stack = new Error().stack; // Optional
  }
}
// ExpiredError.prototype = Object.create(Error.prototype);