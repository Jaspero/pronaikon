import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {UPLOAD_METHODS} from "@shared/blocks/consts/upload-methods.const";

interface ContactOptions extends CommonOptions {
  image?: string;
}

@Block({
  label: 'Contact',
  icon: 'phone',
  previewValue: {
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'Contact',
        icon: 'phone',
        fields: [
          '/image',
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        image: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      image: {
        label: 'Slika',
        component: {
          type: 'image',
          configuration: {
            ...UPLOAD_METHODS
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    '../common-styles.scss',
    './contact.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent extends CommonBlockComponent<ContactOptions> {}
