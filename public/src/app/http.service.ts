import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets(){
    return this._http.get('/api/pets')
  }

  addPet(newPet){
    console.log("****service***")
    console.log(newPet)
    return this._http.post('api/add/pet', newPet);
  }

  getOnePet(id){
    return this._http.get(`api/pet/${id}`);
  }

  editPet(id, updatePet){
    return this._http.put(`api/update/${id}`, updatePet);
  }

  adoptPet(id) {
    return this._http.delete(`/api/adopt/${id}`)
  }

  likePet(id, pet) {
    return this._http.put(`/api/like/${id}`, pet)
  }

  // createLike(id, newLike){
  //   return this._http.post(`/api/add/review/${productId}`, newReview);
  // }

}
