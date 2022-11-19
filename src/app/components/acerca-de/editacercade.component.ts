import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
  
  persona: persona = null;
  imgUrl:any = null;
  image:File = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
  private personaService: PersonaService, public imageService : ImageService) {}

  ngOnInit(): void {
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void { 
    this.persona.img = 'perfil_1';
    this.uploadImage(this.image);
    this.personaService.update(1, this.persona).subscribe(
      data => {
        setTimeout(() => {
          this.router.navigate(['']);          
        }, 1500);
      }, err => {
        alert("Error al modificar datos");
        this.router.navigate(['']);
      }
    )
  }
  
  uploadImage(file: any) {
    const name = "perfil_1";
    this.imageService.uploadImage(file, name);
  }

  previewImage($event:any) {
    this.image = $event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgUrl = reader.result; 
    }
  }
}
