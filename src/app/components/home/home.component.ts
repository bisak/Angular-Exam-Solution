import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from '../../services/auth-helper.service';
import { StatsService } from '../../services/stats.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stats;

  constructor(public authHelperService: AuthHelperService, private statsService: StatsService, private toastService: ToastService) {
  }

  ngOnInit() {
    this.statsService.getStats().then((data) => {
      this.stats = data;
    }).catch((error) => {
      this.toastService.toast('Couldn\'t get stats');
      console.log(error);
    });
  }

}
