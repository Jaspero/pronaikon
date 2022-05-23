import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {UPLOAD_METHODS} from "@shared/blocks/consts/upload-methods.const";

interface GalleryOptions extends CommonOptions {
  categories: Array<{
    image?: string;
    title?: string;
    link?: string;
  }>;
}

@Block({
  label: 'Gallery',
  icon: 'article',
  previewValue: {
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: (index: number) => index === undefined ? 'Category' : `Category ${index + 1}`,
        array: '/categories',
        fields: ['/image', '/title', '/link']
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        categories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {type: 'string', default: 'Naslov'},
              image: {type: 'string'},
              link: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      'categories/title': {label: 'Naslov'},
      'categories/link': {label: 'Naslov Linka'},
      'categories/image': {
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
  selector: 'jms-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    '../common-styles.scss',
    './gallery.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent extends CommonBlockComponent<GalleryOptions> {}
