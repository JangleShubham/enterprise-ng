import {
  Injectable
} from '@angular/core';


export const TOAST_POSITION = {
  TOP_LEFT: 'top right',
  TOP_RIGHT: 'top left',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_RIGHT: 'bottom right'
};

@Injectable()
export class SoHoToastService {
  /**
   * Show a toast using the specified options.
   */
  show(options: SoHoToastOptions) {
    jQuery('body').toast(options).show();
  }

  /**
   * Simplified Version.
   */
  show2(title: string, message: string) {
    jQuery('body').toast({ title: title, message: message }).show();
  }
}


