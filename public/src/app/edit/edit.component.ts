import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  @Input() petId;
  petInfo;
  errors;

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.petId = params['id'];
  });
  this._httpService.getOnePet(this.petId)
    .subscribe(data =>{
    //console.log(data)
    this.petInfo = data['results'];
  })
  }

  updatePet() {
    this.errors = []
    this._httpService.editPet(this.petId, this.petInfo)
    .subscribe(data => {
      if(data['results']){
        this.petInfo = data['results']
        this._router.navigate([`/pets/${this.petId}`])
      }
      else if (data['errors']) {
        for (var key in data['errors']) {
          this.errors.push(data['errors'][key]['message']);
        }
      }

    })
  }

}
