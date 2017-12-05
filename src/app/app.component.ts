import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [new Quote('First Quote', 'me')];

  addQuoteToList(quoteData: Quote) {
    this.quotes.push(quoteData);
    this.sortList();
  }

  sortList() {
    this.quotes.sort(function(a: Quote, b: Quote) {
      if (a.getVotes() > b.getVotes()) {
        return -1;
      } else if (a.getVotes() < b.getVotes()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
