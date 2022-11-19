import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  experienciaLab: Experiencia = null;
  
  constructor(private sexperiencia: SexperienciaService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sexperiencia.detail(id).subscribe(
      data => {
        this.experienciaLab = data;
    }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);      
    }
    )
  }

  onUpdate(): void {
    console.log("onUpdate")
   const id = this.activatedRoute.snapshot.params['id'];
   this.sexperiencia.update(id, this.experienciaLab).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }

}
