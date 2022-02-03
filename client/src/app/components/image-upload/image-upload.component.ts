import { Component, OnInit } from '@angular/core';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import {URLConfig} from '@cloudinary/url-gen';
import {CloudConfig} from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import {thumbnail} from '@cloudinary/url-gen/actions/resize';
import {byRadius} from '@cloudinary/url-gen/actions/roundCorners';
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }
  img!: CloudinaryImage;

  ngOnInit() {

    // Create a Cloudinary instance, setting some Cloud and URL configuration parameters.
     // Set the Cloud configuration and URL configuration
     const cloudConfig = new CloudConfig({cloudName: 'dvdbcvuu5'});
     const urlConfig = new URLConfig({secure: true});
 
     // Instantiate and configure a CloudinaryImage object.
     this.img = new CloudinaryImage('cld-sample', cloudConfig, urlConfig);
     // The URL of the image is: https://res.cloudinary.com/demo/image/upload/docs/shoes
     const myUrl = this.img.toURL();
     console.log(myUrl);
     this.img
    .resize(thumbnail().width(400).height(400).gravity(focusOn(FocusOn.face()))) // Crop the image, focusing on the face.
    .roundCorners(byRadius(20));    // Round the corners.
    
    
   }
   

}
