import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InlineEditorModule} from '@jaspero/fb-page-builder';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
import {BlogComponent} from './blocks/blog/blog.component';
import {CommonBlockComponent} from './blocks/common.block';
import {ContactFormComponent} from './blocks/contact-form/contact-form.component';
import {ContentComponent} from './blocks/content/content.component';
import {BlockLinkDirective} from './directives/block-link/block-link.directive';
import {HeroComponent} from '@shared/blocks/blocks/hero/hero.component';
import {ServicesComponent} from '@shared/blocks/blocks/services/services.component';
import {GalleryComponent} from '@shared/blocks/blocks/gallery/gallery.component';
import {ContactComponent} from './blocks/contact/contact.component';

const B_COMPONENTS = [
  ContentComponent,
  HeroComponent,
  ServicesComponent,
  GalleryComponent,
  ContactComponent,
  ContactFormComponent,
  BlogComponent
];

@NgModule({
  declarations: [
    CommonBlockComponent,
    BlockLinkDirective,
    ...B_COMPONENTS
  ],
  exports: [
    ...B_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    InlineEditorModule,

    SanitizeModule,
    LoadClickModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BlocksModule { }
