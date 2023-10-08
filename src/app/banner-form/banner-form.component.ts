import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent {

  constructor(private http : HttpClient){}

  bannerData: any = {}

  submitForm() {
    const formData = new FormData();

    formData.append('name', this.bannerData.name);
    formData.append('channelId', this.bannerData.channelId);
    formData.append('language', this.bannerData.language);
    formData.append('zoneId', this.bannerData.zoneId);
    formData.append('priority', this.bannerData.priority);
    formData.append('URL', this.bannerData.URL);
    formData.append('startDate', this.bannerData.startDate);
    formData.append('endDate', this.bannerData.endDate);
    formData.append('isCorporate', this.bannerData.isCorporate);

    // Send a POST request to your Swagger API endpoint for creating a new banner
    this.http.post('/api/v2/banners/create', formData).subscribe((response) => {
      console.log('Banner created successfully:', response);
    });
  }

}
