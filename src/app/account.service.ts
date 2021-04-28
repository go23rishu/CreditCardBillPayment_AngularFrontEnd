import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Account } from './account'

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private http: HttpClient) { }

  public viewAll(): Observable<any> {

    return this.http.get("http://localhost:8086/account/viewall");
  }



  public addAccount(account: Account): Observable<any> {
    return this.http.post("http://localhost:8086/account/add", account, { responseType: 'text' });
  }


  delAccount(accId: number): Observable<any> {

    return this.http.delete("http://localhost:8086/account/del/" + accId, { responseType: 'text' });
  }

  UpdateAccount(modifyAccount: Account) {
    return this.http.put("http://localhost:8086/account/update", modifyAccount, { responseType: 'text' });

  }
  getAccount(accId: number): Observable<any> {
    return this.http.get("http://localhost:8086/account/get/" + accId);
  }


}
