import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  name: string;
  age: number;
  color: string;
  type: string;
  image: string;
  price: string;
  breed: string;
  selectOptions = [
    'Cat',
    'Dog',
    'Bunny',
    'Exotic',
    'Other'
  ];

  constructor(private validateService: ValidateService,
              private toastService: ToastService,
              private animalsService: AnimalsService,
              private router: Router) {
  }

  ngOnInit() {
  }


  onAddSubmit(form) {
    console.log(form);
    if (!form.valid) {
      return this.toastService.toast('Form is invalid.');
    }

    if (this.age < 1 || this.age > 100) {
      return this.toastService.toast('Age must be between 1 and 100');
    }

    let data = {
      name: this.name,
      age: this.age,
      color: this.color,
      type: this.type,
      price: this.price,
      image: this.image
    };

    if (this.breed) {
      data['breed'] = this.breed;
    }

    console.log(data);

    this.animalsService.addAnimal(data).then((response) => {
      console.log(response);
      if (response.hasOwnProperty('success') && response.success) {
        this.toastService.successToast('Animal added');
      }
    }).catch((error) => {
      this.toastService.errorToast('An error occured');
    });
  }

}
