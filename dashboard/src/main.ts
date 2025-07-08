import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { SINGLE_SPA_PROPS, SingleSpaExtraProps } from './app/single-spa-props';

declare global {
  interface Window {
    eventBus: {
      on: (eventName: string, handler: (data: any) => void) => () => void;
      off: (eventName: string, handler: (data: any) => void) => void;
      emit: (eventName: string, data: any) => void;
      once: (eventName: string, handler: (data: any) => void) => () => void;
      offAll: (eventName?: string) => void;
      hasHandlers: (eventName: string) => boolean;
      countHandlers: (eventName: string) => number;
      getEvents: () => Record<string, Array<(data: any) => void>>;
      getLastEvent: (eventName: string) => any;
      clearLastEvent: (eventName: string) => void;
      hasLastEvent: (eventName: string) => boolean;
    };
  }
}

export const { bootstrap, mount, unmount } = singleSpaAngular<SingleSpaExtraProps>({
  bootstrapApplication,
  rootComponent: AppComponent,
  appConfig,
  propsInjectionToken: SINGLE_SPA_PROPS,
});
