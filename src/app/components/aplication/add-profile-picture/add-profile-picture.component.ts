import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-profile-picture',
  templateUrl: './add-profile-picture.component.html',
  styleUrls: ['./add-profile-picture.component.scss']
})
export class AddProfilePictureComponent implements OnInit {
  @ViewChild('imageProfile') imageProfile!: ElementRef;
  fileToUpload!: File;

  constructor() { }

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
}
