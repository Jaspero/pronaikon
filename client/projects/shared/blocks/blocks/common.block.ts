import {Component} from '@angular/core';
import {BlockData, BlockDataOptions} from '@jaspero/fb-page-builder';
export interface CommonOptions extends BlockDataOptions {
  elementId?: string;
}
@Component({
  selector: 'jms-common-block',
  template: ''
})
export class CommonBlockComponent<T extends CommonOptions = any> extends BlockData<T> {}
