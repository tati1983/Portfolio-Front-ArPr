import { Injectable } from '@angular/core';
// import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: any = [];

  constructor(private storage: AngularFireStorage) { }

  public uploadImage(file: any, name: string){
    this.url = file.name;
    const filePath = name;
    const task = this.storage.upload(filePath, file).then((response => {
      console.log(response);
    }))
  }
 
  getImage(name: string){
    const imgRef = this.storage.ref(name);
    return imgRef.getDownloadURL();
  }
}
