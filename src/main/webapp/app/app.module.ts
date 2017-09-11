import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SimplemdedemoappSharedModule, UserRouteAccessService } from './shared';
import { SimplemdedemoappHomeModule } from './home/home.module';
import { SimplemdedemoappAdminModule } from './admin/admin.module';
import { SimplemdedemoappAccountModule } from './account/account.module';
import { SimplemdedemoappEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SimplemdedemoappSharedModule,
        SimplemdedemoappHomeModule,
        SimplemdedemoappAdminModule,
        SimplemdedemoappAccountModule,
        SimplemdedemoappEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SimplemdedemoappAppModule {}
