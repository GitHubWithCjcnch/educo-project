import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AzureBlobStorageService } from 'src/app/services/azure-blob-storage.service';

@Component({
  selector: 'app-add-profile-picture',
  templateUrl: './add-profile-picture.component.html',
  styleUrls: ['./add-profile-picture.component.scss']
})
export class AddProfilePictureComponent implements OnInit {
  @ViewChild('imageProfile') imageProfile!: ElementRef;
  fileToUpload!: File;
  sas = "sp=racwdl&st=2021-09-29T01:26:48Z&se=2022-12-29T09:26:48Z&spr=https&sv=2020-08-04&sr=c&sig=4WzDnYBG79t9AKNgoIPVbs9J0yxOEcuWYOBbizkIzoY%3D";

  constructor(private blobService: AzureBlobStorageService) { }

  ngOnInit(): void {
  }

  handleFileInput(fileInput: any) {
    if ( fileInput.target.files && fileInput.target.files[0] ) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
      const reader = new FileReader()
      this.fileToUpload = fileInput.target.files[0]
      if (!allowedTypes.includes(fileInput.target.files[0].type)) {
        alert("Apenas imagens do tipo png, jpeg, jpg e gif são aceitas.")
        return false;
      }
      reader.onload = () => {
        this.imageProfile.nativeElement.style.background = `url('${reader.result}') no-repeat center /cover`
        this.imageProfile.nativeElement.style.borderRadius = '50%'
        this.imageProfile.nativeElement.style.border = 'solid 5px #094067'
      }
      reader.readAsDataURL(fileInput.target.files[0]);
      return true;
    } else {
      return false
    }
  }

  uploadFileAzure() {
    if (this.fileToUpload) {
      this.blobService.uploadImage(this.sas, this.fileToUpload, "cu")
    }
  }

}
