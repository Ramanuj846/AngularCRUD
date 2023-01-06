import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensDataComponent } from './MensData/mens-data/mens-data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './Dialog/dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe, CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Home/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CommonInterceptor } from './common.interceptor';
import { NgHttpLoaderModule } from 'ng-http-loader';




@NgModule({
  declarations: [
    AppComponent,
    MensDataComponent,
    DialogComponent,
    HomeComponent,
    PipeComponent,
    CustomPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    NgHttpLoaderModule.forRoot()
    
  ],
  providers: [
    DatePipe,
    {provide:HTTP_INTERCEPTORS, useClass:CommonInterceptor, multi:true}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
