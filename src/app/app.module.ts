import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewEntryComponent } from './new-entry/new-entry.component'; 
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//services
import {EntryService} from './entry.service';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list'; 
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'; 


//forms
import {ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, MatButtonModule,
    MatTableModule,ReactiveFormsModule,  MatFormFieldModule,MatInputModule
    ,MatSelectModule,MatToolbarModule, MatDialogModule,MatListModule,
    MatCardModule, BrowserAnimationsModule,FormsModule,MatSortModule
    ,MatPaginatorModule,MatIconModule
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [EntryService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
