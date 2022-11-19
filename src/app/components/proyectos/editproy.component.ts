import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproy',
  templateUrl: './editproy.component.html',
  styleUrls: ['./editproy.component.css']
})
export class EditproyComponent implements OnInit {

  proyecto: Proyecto = null;
  imgUrl:any = null;
  image:File = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private proyectoService: ProyectoService, public imageService : ImageService) {}
  
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.proyectoService.detail(id).subscribe(
        data => {
          this.proyecto = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void { 
      const id = this.activatedRoute.snapshot.params['id'];
      this.proyecto.imgP = 'proyecto_' + id;
      this.uploadImage(this.image);
      this.proyectoService.update(id, this.proyecto).subscribe(
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
      const id = this.activatedRoute.snapshot.params['id'];
      const name = "proyecto_" + id;
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
