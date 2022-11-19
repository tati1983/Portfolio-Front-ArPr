import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevoproy',
  templateUrl: './nuevoproy.component.html',
  styleUrls: ['./nuevoproy.component.css']
})
export class NuevoproyComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  imgP: string;

  constructor(private proyectoService: ProyectoService, private router: Router,
              private activatedRoute: ActivatedRoute, private imageService: ImageService) { }

  proyecto: Proyecto = null;
  imgUrl:any = null;
  image:File = null;

  ngOnInit(): void {
  }

  // onUpdate(): void { 
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.proyecto.imgP = 'perfil_' + id;
  //   this.uploadImage(this.image);
  //   this.proyectoService.update(id, this.proyecto).subscribe(
  //     data => {
  //       setTimeout(() => {
  //         this.router.navigate(['']);          
  //       }, 1500);
  //     }, err => {
  //       alert("Error al modificar datos");
  //       this.router.navigate(['']);
  //     }
  //   )
  // }
  
  uploadImage(id: any) {
    const name = "proyecto_" + id;
    this.imageService.uploadImage(this.image, name);
  }

  previewImage($event:any) {
    this.image = $event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgUrl = reader.result; 
    }
  }


  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        this.uploadImage(data.id);
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
