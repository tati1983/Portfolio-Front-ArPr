import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  
  skill: Skill = null;
  
  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la Skill");
        this.router.navigate(['']);
      }
      )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
