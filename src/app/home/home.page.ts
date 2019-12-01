import { Component } from '@angular/core';
import { Expense } from './Expense/expense.modal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  expenseObject: Expense;
  constructor() {
    console.log('App home loaded !!!');  }

}
