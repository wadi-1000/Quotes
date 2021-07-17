import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote-structure',
  templateUrl: './quote-structure.component.html',
  styleUrls: ['./quote-structure.component.css']
})
export class QuoteStructureComponent implements OnInit {
  @Input() quote: Quote = new Quote(0, '', '');
  constructor() { }

  ngOnInit(): void {
  }

}
