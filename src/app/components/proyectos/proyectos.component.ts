import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];
  img: any = null;
  
  constructor(private proyectoService: ProyectoService, private tokenService: TokenService,
              private imageService: ImageService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => { 
        this.proyecto = data; 
        data.forEach((element, index) => {
          this.imageService.getImage("proyecto_" + element.id).subscribe(
              image => {
              this.proyecto[index].imgP = image;
            })
        });
        console.log(this.proyecto);
        
      }
    )
  }

  delete(id?: number){
    if (id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
          alert("Proyecto eliminado")
        }, err => {
          alert('No se pudo eliminar');
          
        }
      )
    }
  }

}
