import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CloudinaryModule} from '@cloudinary/ng';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { FileuploadserviceService } from './services/fileuploadservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FileuploadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
