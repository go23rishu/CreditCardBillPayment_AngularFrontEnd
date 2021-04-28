import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  accounts: Account[] = [];
  modifyAccount = new Account();
  notFound: string;
  notFoundDiv: boolean = false;
  updateDiv: boolean = false;
  msg: string;
  errorMsg: string;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.accountService.viewAll().subscribe(data => this.accounts = data);
    this.getAccount();
    console.log(this.accounts);
  }

  getAccount(): void {
    this.accountService.viewAll().subscribe(
      (response: Account[]) => {
        this.accounts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public searchAccounts(key: string): void {
    const results: Account[] = [];
    for (const account of this.accounts) {
      var accountNumber: number = account.accountNumber;
      var newAccountNumber: string = accountNumber.toString();

      if (newAccountNumber === key) {
        this.notFound = "Account Found";
        results.push(account);
      }
    }
    this.accounts = results;
    if (results.length === 0 || !key) {
      this.getAccount();
      this.notFoundDiv = true;
      this.notFound = "Account Not Found !!!";
    }
  }

  deleteAccount(accId: number) {
    if (confirm("Confirm Delete Account" + accId)) {
      this.accountService.delAccount(accId)
        .subscribe(data => {
          this.msg = data;
          this.errorMsg = undefined;
          this.accountService.viewAll().subscribe(data => this.accounts = data);
          console.log(this.accounts);
        },
          error => {
            this.errorMsg = error.error;
            this.msg = undefined;
          });
    }
  }
  update(account: Account) {
    console.log(JSON.stringify(account));
    this.modifyAccount = account;
    this.updateDiv = true;//make update division visible
  }
  cancel() {
    this.updateDiv = false;//make update division invisible
  }
  cancel2() {
    this.notFoundDiv = false;//make update division invisible
  }
  updateAccount() {
    this.updateDiv = false;//make update division invisible
    this.accountService.UpdateAccount(this.modifyAccount)
      .subscribe(data => {
        this.msg = data;
        this.errorMsg = undefined;
        //Reload account
        this.accountService.viewAll().subscribe(data => this.accounts = data);
        console.log(this.accounts);
      },
        error => {
          this.errorMsg = error.error;
          this.msg = undefined;
        });

  }

}
