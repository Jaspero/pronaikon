import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {UPLOAD_METHODS} from "@shared/blocks/consts/upload-methods.const";

interface ServicesOptions extends CommonOptions {
  image?: string;
  title?: string;
  text?: string;
}

@Block({
  label: 'Services',
  icon: 'article',
  previewValue: {
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'Services',
        icon: 'subject',
        fields: [
            '/image',
            '/title',
            '/text'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        image: {type: "string"},
        title: {type: "string"},
        text: {type: "string"},
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
      title: {
        label: 'Title'
      },
      text: {
        label: '',
        component: {
          type: 'tinymce'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-services',
  templateUrl: './services.component.html',
  styleUrls: [
    '../common-styles.scss',
    './services.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent extends CommonBlockComponent<ServicesOptions> {}
