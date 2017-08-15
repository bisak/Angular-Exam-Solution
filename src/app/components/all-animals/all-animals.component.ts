import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css']
})
export class AllAnimalsComponent implements OnInit {
  currentPage;
  search;
  totalPages;
  animals;

  constructor(private animalsService: AnimalsService,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private router: Router) {
    this.onDataError = this.onDataError.bind(this);
    this.onDataSuccess = this.onDataSuccess.bind(this);
  }

  ngOnInit() {
    this.listenForUrlChanges();
  }

  onDataSuccess(response) {
    this.animals = response;
    window.scrollTo(0, 0);
  }

  onDataError(error) {
    console.log(error);
    this.toastService.errorToast('An error occured.');
  }

  handleSearch(query) {
    this.router.navigate([`/animals/all`], { queryParams: { page: 1, search: query } });
  }

  getProducts(page, search): Promise<Array<any>> {
    return this.animalsService.getOnePageAnimals(page, search);
  }

  listenForUrlChanges() {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params.page || 1;
      this.search = params.search || '';
      this.getProducts(this.currentPage, this.search).then(this.onDataSuccess).catch(this.onDataError);
    });
  }

}
