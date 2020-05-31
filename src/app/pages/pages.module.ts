import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbDatepickerModule, NbActionsModule, NbCheckboxModule, NbIconModule, NbRadioModule, NbUserModule, NbStepperModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UploadComponent } from './upload/upload.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalOverlaysModule } from './modal-overlays/modal-overlays.module';
import { ViewFilesComponent } from './view-files/view-files.component';
import { EditFileComponent } from './edit-file/edit-file.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbCardModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ModalOverlaysModule,
    NbActionsModule,
    NbCheckboxModule,
    NbIconModule,
    NbRadioModule,
    NbUserModule,
    NbStepperModule
  ],
  declarations: [
    PagesComponent,
    UploadComponent,
    ViewFilesComponent,
    EditFileComponent
  ],
})
export class PagesModule {
}
