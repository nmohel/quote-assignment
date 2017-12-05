import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  quoteToAdd: Quote;
  @Output() addQuoteEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.quoteToAdd = new Quote('', '');
  }
  submitForm() {
    this.addQuoteEventEmitter.emit(this.quoteToAdd);
    this.quoteToAdd = new Quote('', '');
  }

}
