import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html'
})
export class AllPetsComponent implements OnInit {
  allPets;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  getAllPets(){
    this._httpService.getAllPets()
    .subscribe(data => {
      this.allPets = data['results'];
    })
  }

  ngOnInit() {
    this.getAllPets();
  }

}
