import {
  Component,
  OnInit,
  ChangeDetectionStrategy, ViewChild
} from '@angular/core';

import {
  ledgerColumns,
  ledgerData
} from './mock.data';

@Component({
  selector: 'soho-codeblock-demo',
  templateUrl: './code-block.demo.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlockDemoComponent implements OnInit {
  public showModel = false;
  public showLabels = false;

  public model = {
    ledger: 'CORE'
  };

  public ledgerColumns = ledgerColumns;
  public ledgerData = ledgerData;

  constructor() { }
  ngOnInit() { }

  onUpdated(event: any) {
    console.log('onUpdated');
  }

  toggleLabels() {
    setTimeout(() => this.showLabels = !this.showLabels);
  }

}
