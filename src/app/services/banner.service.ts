import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private apiUrl = 'https://development.api.optio.ai/api/v2/banners/find';

  constructor(private http : HttpClient) { }

  getBanners(query: any): Observable<any> {
    const authToken = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiJpbnRlcm5zaGlwIiwiaW50ZXJuc2hpcElkIjoibWluZGlhc2h2aWxpZmVAZ21haWwuY29tIiwiaWF0IjoxNjk2NTI4NDE3LCJleHAiOjE2OTczOTI0MTd9.tDQWZ0zfDpczWUILJwsWtBzvhVgDxwJEK2rqDvtquvXUmaWs840UN9ROheL4cE4mrE5SRdQpmO6Kw_MeMSCWmA';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      }),
    };

    return this.http.post(this.apiUrl, query, httpOptions);
  }

}
