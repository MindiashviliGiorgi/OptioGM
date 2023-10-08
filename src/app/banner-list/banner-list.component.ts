import { Component } from '@angular/core';
import { BannerService } from '../services/banner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent {
  openDrawer : boolean = true;
  container : number = 1;

  constructor(private bannerService: BannerService, private http : HttpClient) {}

  ngOnInit() {
    this.getBanners()
  }

  previousContainer() {
    if (this.container > 1) {
      this.container--;
    }
  }

  nextContainer() {
    if (this.container < 2) {
      this.container++;
    }
  }

  getBanners() {
    const query = {
      includes: ['name', 'channelId', 'id'],
      search: 'optio',
      pageSize: 10,
      pageIndex: 0,
    };

    this.bannerService.getBanners(query).subscribe(
      (response) => {
        console.log('Banners:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }

}
