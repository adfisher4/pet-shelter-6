import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
  newPet;
  errors;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newPet = {
      name: '',
      type: '',
      description: '',
      skill1: '',
      skill2: '',
      skill3: ''
    }
  }

  addPet() {
    this.errors = [];
    this._httpService.addPet(this.newPet)
    .subscribe(data => { 
      if (data['results']) {
        this.goHome();
      }
      else if (data['errors']) {
        for (var key in data['errors']) {
          this.errors.push(data['errors'][key]['message']);
        }
      }
    })
    //this.goHome();
  }

  goHome() {
    this._router.navigate(['/pets']);
  }

}
