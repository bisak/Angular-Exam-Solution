import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AnimalsService {

  constructor(private apiService: ApiService) {
  }

  addAnimal(data) {
    return this.apiService.post('/animals/create', data);
  }

  getOnePageAnimals(page, search) {
    return this.apiService.get(`/animals/all?page=${page}&search=${search}`);
  }

  getSingleAnimal(id) {
    return this.apiService.get(`/animals/details/${id}`);
  }

  addComment(id, content) {
    return this.apiService.post(`/animals/details/${id}/comments/create`, { message: content });
  }

  addReaction(id, reaction) {
    return this.apiService.post(`/animals/details/${id}/reaction`, { type: reaction });
  }

  getComments(id) {
    return this.apiService.get(`/animals/details/${id}/comments`);
  }

  getMyAnimals() {
    return this.apiService.get('/animals/mine');
  }

  deleteAnimal(id) {
    return this.apiService.post(`/animals/delete/${id}`, {});
  }
}
