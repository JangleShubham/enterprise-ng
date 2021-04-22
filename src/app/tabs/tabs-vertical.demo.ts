import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * This example:
 * - Shows how to make a tab component with the tabs on the left side.
 */
@Component({
  selector: 'div[vertical-tabs-demo]', // eslint-disable-line
  templateUrl: 'tabs-vertical.demo.html'
})
export class TabsVerticalDemoComponent {

  /**
   * Have to make this 100% height or tab component won't display all the way to
   * the bottom of the screen.
   *
   * @returns the height of the style.height style.
   */
  @HostBinding('style.height') get tabsHeightStyle() {
    return '100%';
  }

  formCheckErrorIcon: FormGroup;

  constructor(formBuilder: FormBuilder) {
    console.log('ub');
    this.formCheckErrorIcon = formBuilder.group({
      error_icon_check: null,
    });
  }

  onTabActivated(event: SohoTabsEvent) {
    console.log(event.tab + ' TabsBasicDemoComponent.onTabActivated');
  }
}
