import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {UPLOAD_METHODS} from "@shared/blocks/consts/upload-methods.const";

interface HeroOptions extends CommonOptions {
  image?: string;
  title?: string;
  text?: string;
}

@Block({
  label: 'Hero',
  icon: 'article',
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
  selector: 'jms-hero',
  templateUrl: './hero.component.html',
  styleUrls: [
    '../common-styles.scss',
    './hero.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent extends CommonBlockComponent<HeroOptions> {}
