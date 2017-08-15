import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() animal;
  @Input() showDelete;
  @ViewChild('mySelf') element: ElementRef;

  constructor(private animalsService: AnimalsService, private toastService: ToastService, private router: Router) {
  }

  ngOnInit() {
  }

  handleDelete() {
    this.animalsService.deleteAnimal(this.animal.id).then((data) => {
      console.log(data);
      this.element.nativeElement.remove();
      this.toastService.toast('Deleted successfully');
    }).catch((error) => {
      this.toastService.toast('An error occured.');
      console.log(error);
    });

  }


}
