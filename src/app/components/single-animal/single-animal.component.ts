import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { AuthHelperService } from '../../services/auth-helper.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  animalId;
  animal;
  comment;
  selectOptions = [
    'like',
    'love',
    'haha',
    'wow',
    'sad',
    'angry'
  ];
  reaction;
  comments = [];

  constructor(private animalsService: AnimalsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              public authHelperService: AuthHelperService,
              public apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.animalId = this.route.snapshot.paramMap.get('id');
    this.animalsService.getSingleAnimal(this.animalId).then((data) => {
      this.getProductSuccess(data);
    }).catch((error) => {
      this.getProductError(error);
    });

    this.animalsService.getComments(this.animalId).then((data) => {
      console.log(data);
      this.comments = data;
    }).catch((error) => {
      console.log(error);
    });
  }

  getProductSuccess(data) {
    this.animal = data;
    console.log(data);
  }

  getProductError(error) {
    this.toastService.errorToast('An error occured');
  }


  handleAddComment() {
    if (this.comment && this.comment.length > 10) {
      return this.animalsService.addComment(this.animalId, this.comment).then((response) => {
        this.comment = '';
        this.comments.unshift(response.comment);
      }).catch((error) => {
        console.log(error);
        this.toastService.errorToast('An error occured.');
      });
    } else {
      this.toastService.toast('Please enter a comment longer than 10 characters');
    }
  }

  handleAddReaction() {
    if (this.reaction) {
      return this.animalsService.addReaction(this.animalId, this.reaction).then((response) => {
        if (response.success) {
          this.animal.reactions[this.reaction]++;
        }
        this.toastService.toast(response.message);
      }).catch((error) => {
        console.log(error);
        this.toastService.toast('An error occured.');
      });
    } else {
      this.toastService.toast('Please select a reaction');
    }
  }


  /*
    buyProduct() {
      this.productsService.buyProduct(this.animalId).then((data) => {
        this.toastService.toast('Purchased successfully');
        this.animal.bought = true;
      }).catch((error) => {
        console.log(error);
        this.toastService.toast('An error occured :/');
      });
      this.closeConfirmBuyModal();
    }
  */
  /*

    deleteProduct() {
      this.productsService.deleteProduct(this.animalId).then((data) => {
        this.toastService.toast('Deleted successfully');
        this.router.navigate(['/products', 'all']);
      }).catch((error) => {
        console.log(error);
        this.toastService.toast('An error occured :/');
      });
      this.closeConfirmDeleteModal();
    }
  */


}
