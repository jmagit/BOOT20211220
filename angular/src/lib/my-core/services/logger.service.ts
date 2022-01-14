import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export const ERROR_LEVEL = new InjectionToken<string>('ERROR_LEVEL');

@Injectable()
export class LoggerService {
  private level: number = 99;

  constructor(@Optional() @Inject(ERROR_LEVEL) level?: number) {
    if(level != null)
      this.level = level;
  }

  public error(msg: string): void {
    if (this.level > 0)
      console.error(msg);
  }

  public warn(msg: string): void {
    if (this.level > 1)
      console.warn(msg);
  }

  public info(msg: string): void {
    if (this.level > 2)
      if (console.info)
        console.info(msg);
      else
        console.log(msg);
  }

  public log(msg: string): void {
    if (this.level > 3)
      console.log(msg);
  }
}
