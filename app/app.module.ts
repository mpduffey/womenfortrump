import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {HttpModule}           from '@angular/http';
import {ReactiveFormsModule}  from '@angular/forms';

import {AppComponent}         from './app.component';
import {SinglePageScrolling}  from 'modules/single-page-scrolling/single-page-scrolling';
import {NavMenu}              from 'modules/nav-menu/nav-menu';
import {SpsIntroSection}      from 'modules/sps-intro-section/sps-intro-section';
import {SpsAboutSection}      from 'modules/sps-about-section/sps-about-section';
import {SpsEventCalendar}     from 'modules/sps-event-calendar/sps-event-calendar';
import {SpsContactSection}    from 'modules/sps-contact-section/sps-contact-section';
import {EventForm}            from 'modules/event-form/event-form';
import {Modal}                from 'modules/modal/modal';
import {ModalService}         from 'modules/modal/modal-service';
import {WFTDataService}       from 'modules/wft-data/wft-data';
import {ReactiveForm}					from 'modules/reactive-form/reactive-form';
import {ReactiveFormInput}    from 'modules/reactive-form-input/reactive-form-input';
import {UserService}          from 'modules/user-service/user-service';
import {ImgGallery}           from 'modules/img-gallery/img-gallery';
import {Filter}               from 'modules/filter-pipe/filter-pipe';

@NgModule({
  imports:      [BrowserModule, HttpModule, ReactiveFormsModule],
  exports:      [NavMenu, SpsIntroSection, SpsAboutSection, SpsEventCalendar, EventForm, Modal, ReactiveForm, ReactiveFormInput, SinglePageScrolling, SpsContactSection, ImgGallery, Filter],
  declarations: [AppComponent, NavMenu, SpsIntroSection, SpsAboutSection, SpsEventCalendar, EventForm, Modal, ReactiveForm, ReactiveFormInput, SinglePageScrolling, SpsContactSection, ImgGallery, Filter],
  providers:    [ModalService, WFTDataService, UserService],
  bootstrap:    [AppComponent]
})

export class AppModule { }