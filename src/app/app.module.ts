import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layouts
import { FilledComponent } from './views/_layouts/filled/filled.component';
import { EmptyComponent } from './views/_layouts/empty/empty.component';

// Shared
import { NAV_DROPDOWN_DIRECTIVES } from './views/_shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './views/_shared/sidebar.directive';
import { AsideToggleDirective } from './views/_shared/aside.directive';
import { BreadcrumbsComponent } from './views/_shared/breadcrumb.component';

// Ngx-Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FilledComponent,
    EmptyComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
