import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SeducacionService } from 'src/app/service/seducacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacion: Educacion[] = [];
  
  constructor(private seducacion: SeducacionService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarEducacion(): void {
    this.seducacion.lista().subscribe(
      data => { 
        this.educacion = data; 
      }
    )
  }

  delete(id?: number){
    if (id != undefined){
      this.seducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          alert("Educación eliminada")
        }, err => {
          alert('No se pudo eliminar');
          
        }
      )
    }
  }
 
}
