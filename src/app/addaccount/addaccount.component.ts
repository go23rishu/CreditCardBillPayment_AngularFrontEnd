import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  account:Account=new Account();
  msg:String;
  errorMsg:String;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  addAccount(){
    this.accountService.addAccount(this.account)
    .subscribe
    (
      (data)=>
      {
      console.log("data",data);
      this.msg=data;
      this.errorMsg=undefined;
      },      
      (error)=>
      {
        this.errorMsg=error.error;
        console.log(error.error);
        this.msg=undefined
      }
     );
  }

}
