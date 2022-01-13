import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  public error(msg: string): void {
    console.error(msg);
  }

  public warn(msg: string): void {
    console.warn(msg);
  }

  public info(msg: string): void {
    if (console.info)
      console.info(msg);
    else
      console.log(msg);
  }

  public log(msg: string): void {
    console.log(msg);
  }


}
