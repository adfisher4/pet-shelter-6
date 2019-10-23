import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

// const mongoose = require('mongoose'),
// Pet = mongoose.model('Pet')

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  petId;
  onePet;
  notLiked = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService : HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      //console.log(params['id'])
      this.petId = params['id'];
    })
    this.getOnePet(this.petId)
  }

  getOnePet(petId) {
    this._httpService.getOnePet(this.petId)
    .subscribe(data => {
      this.onePet = data['results'];

    })
  }
  ngOnChanges(){
    this.ngOnInit()
    this.notLiked = false;
    }

  likePet() {
      this._httpService.likePet(this.petId, this.onePet)
      .subscribe(data => {
        this.onePet = data['results'];
        this.ngOnChanges()
      })
      
  }

  adoptPet(){
    this._httpService.adoptPet(this.petId)
    .subscribe(data => {
      this._router.navigate(['/pets'])
    })
  }

}
