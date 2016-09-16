import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {HttpModule}           from '@angular/http';
import {ReactiveFormsModule}  from '@angular/forms';

import {AppComponent}         from './app.component';
import {NavMenu}              from 'modules/nav-menu/nav-menu';
import {IntroSection}         from 'modules/intro-section/intro-section';
import {AboutSection}         from 'modules/about-section/about-section';
import {EventCalendar}        from 'modules/event-calendar/event-calendar';
import {EventForm}            from 'modules/event-form/event-form';
import {Modal}                from 'modules/modal/modal';
import {ModalService}         from 'modules/modal/modal-service';
import {WFTDataService}       from 'modules/wft-data/wft-data';
import {ReactiveForm}					from 'modules/reactive-form/reactive-form';
import {ReactiveFormInput}    from 'modules/reactive-form-input/reactive-form-input';
import {UserService}          from 'modules/user-service/user-service';
import {SinglePageScrolling}  from 'modules/single-page-scrolling/single-page-scrolling';
import {ImgGallery}           from 'modules/img-gallery/img-gallery';
import {SpsContactSection}    from 'modules/sps-contact-section/sps-contact-section';


@NgModule({
  imports:      [BrowserModule, HttpModule, ReactiveFormsModule],
  exports:      [NavMenu, IntroSection, AboutSection, EventCalendar, EventForm, Modal, ReactiveForm, ReactiveFormInput, SinglePageScrolling, SpsContactSection, ImgGallery],
  declarations: [AppComponent, NavMenu, IntroSection, AboutSection, EventCalendar, EventForm, Modal, ReactiveForm, ReactiveFormInput, SinglePageScrolling, SpsContactSection, ImgGallery],
  providers:    [ModalService, WFTDataService, UserService],
  bootstrap:    [AppComponent]
})

export class AppModule { }