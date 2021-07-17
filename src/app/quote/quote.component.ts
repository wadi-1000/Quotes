import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {1,'Dolly Parton','The way I see it, if you want the rainbow,you gotta put up with the rain.'}
    {2,'Stephen King','Get busy living or get busy dying.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
