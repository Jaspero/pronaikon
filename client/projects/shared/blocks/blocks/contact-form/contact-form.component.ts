import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {UPLOAD_METHODS} from '@shared/blocks/consts/upload-methods.const';

interface FormOptions extends CommonOptions {
  image?: string;
  alt?: string;
}

@Block({
  label: 'CONTACT_FORM',
  icon: 'view_agenda',
  module: ['pages', 'posts'],
  previewValue: {
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'Hero',
        icon: 'subject',
        fields: [
          '/image',
          '/alt'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        image: {type: 'string'},
        alt: {type: 'string'},
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
      alt: {
        label: 'Alt'
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent extends CommonBlockComponent<FormOptions> {}
