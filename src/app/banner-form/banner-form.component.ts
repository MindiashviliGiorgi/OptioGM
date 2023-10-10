import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerFormData } from '../banner';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent {

  formData: BannerFormData = {
    id : '',
    name: '',
    channelId: '',
    language: '',
    zoneId: '',
    priority: 0,
    fileId: '',
    url: '',
    startDate: new Date(),
    endDate: new Date(), 
    isCorporate: false,
    labels : '',
    active : false,
  };

  constructor(private http: HttpClient) {}

  submitBanner() {
    const accessToken = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiJpbnRlcm5zaGlwIiwiaW50ZXJuc2hpcElkIjoibWluZGlhc2h2aWxpZmVAZ21haWwuY29tIiwiaWF0IjoxNjk2NTI4NDE3LCJleHAiOjE2OTczOTI0MTd9.tDQWZ0zfDpczWUILJwsWtBzvhVgDxwJEK2rqDvtquvXUmaWs840UN9ROheL4cE4mrE5SRdQpmO6Kw_MeMSCWmA';
  
    const bannerData = {
      id:'example',
      name:'Giorgi',
      channelId:'internet-bank',
      language:'eng',
      zoneId:'dashboard-main',
      priority:'0',
      fileId:'112233',
      isCorporate: true,
      url:'https://example.com/img1',
      startDate:'2023-10-02T20:00:00.000Z',
      endDate:'2023-10-03T20:00:00.000Z',
      active:true,
    }

    const apiUrl = 'https://development.api.optio.ai/api/v2/banners/save';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    });
  
    this.http.post(apiUrl, bannerData, { headers })
    .subscribe((response) => {
        console.log('Banner saved successfully:', response);
      },
      (error) => {
        console.error('Error saving banner:', error);
      }
    );
  }

}
