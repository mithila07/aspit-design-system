import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
// import { AspitCssLibModule } from 'design-system';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule} from 'ngx-bootstrap/tooltip';
import { CollapseModule} from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { ButtonsComponent } from './form-elements/buttons/buttons.component';
import { InputsComponent } from './form-elements/inputs/inputs.component';
import { TabsComponent } from './form-elements/tabs/tabs.component';
import { BadgesComponent } from './badges/badges.component';
import { DropdownComponent } from './form-elements/dropdown/dropdown.component';
import { SnakbarComponent } from './snakbar/snakbar.component';
import { ToastrModule } from 'ngx-toastr';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DatePickerComponent } from './form-elements/date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RangeSliderComponent } from './form-elements/range-slider/range-slider.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { NavigationsComponent } from './navigations/navigations.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalsComponent } from './modals/modals.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    // AspitCssLibModule,
    ROUTING,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    HighlightModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    Ng5SliderModule,
    PerfectScrollbarModule,
    VirtualScrollerModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ColorsComponent,
    TypographyComponent,
    FormElementsComponent,
    ButtonsComponent,
    InputsComponent,
    TabsComponent,
    BadgesComponent,
    DropdownComponent,
    SnakbarComponent,
    TooltipsComponent,
    DatePickerComponent,
    RangeSliderComponent,
    TablesComponent,
    CardsComponent,
    ScrollSpyDirective,
    NavigationsComponent,
    AvatarsComponent,
    ModalsComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
