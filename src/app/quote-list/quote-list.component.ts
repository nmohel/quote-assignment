import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() list: Quote[];
  @Output() voteEventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteQuote(quote: Quote) {
    let idx = this.list.indexOf(quote);
    this.list.splice(idx, 1);
  }

  vote(quote: Quote, increment: number) {
    quote.setVotes(quote.getVotes() + increment);
    this.voteEventEmitter.emit();
  }

}
