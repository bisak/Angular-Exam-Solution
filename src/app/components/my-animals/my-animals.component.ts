import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.css']
})
export class MyAnimalsComponent implements OnInit {

  animals;

  constructor(private animalsService: AnimalsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private router: Router) {
  }

  ngOnInit() {
    this.animalsService.getMyAnimals().then((data) => {
      console.log(data);
      this.animals = data;
    }).catch((error) => {
      console.log(error);
    });
  }

}
