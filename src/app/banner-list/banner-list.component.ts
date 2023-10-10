import { Component } from '@angular/core';
import { BannerService } from '../services/banner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent {
  openDrawer : boolean = false;
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

  banners : any [] = [];

  // getBanners() {
  //   const query = {
  //     includes: ['Giorgi', 'internet-bank', 'exapmle'],
  //     search: 'optio',
  //     pageSize: 10,
  //     pageIndex: 0,
  //   };
  //   this.bannerService.getBanners(query)
  //   .subscribe(
  //     (response) => {
  //       if (response && response.data && response.data.entities) {
  //         const entities = response.data.entities;
  //         this.banners = entities;
  //         console.log('Banners:', this.banners);
  //         console.log(response)
  //       }
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );

  // }
  getBanners() {
    setTimeout(() => {
      const query = {
        includes: ['Giorgi', 'internet-bank', 'exapmle'],
        search: 'optio',
        pageSize: 10,
        pageIndex: 0,
      };
      this.bannerService.getBanners(query).subscribe(
        (response) => {
          if (response && response.data && response.data.entities) {
            const entities = response.data.entities;
            this.banners = entities;
            console.log('Banners:', this.banners);
            console.log(response);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }, 4000); // 1000 milliseconds (1 second) delay
  }

}
