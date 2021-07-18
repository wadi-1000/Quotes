import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
     new Quote (1, 'Dolly Parton','The way I see it, if you want the rainbow,you gotta put up with the rain.',new Date(2020,3,14)),
     new Quote (2, 'Stephen King','Get busy living or get busy dying.',new Date(2021,4,20)),
     new Quote (3, 'John Lennon', 'Life happens when your busy making other plans.',new Date(2019,15,4)),
     new Quote (4,'Thomas A. Edison', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',new Date(2021,6,24)),
     new Quote (5, 'Hollyn', 'Love with your life!',new Date(2020,8,9)),
     new Quote (6, 'Babe Ruth', 'Never let the fear of striking out keep you from playing the game.',new Date(2020,9,13)),
     new Quote (7, 'Albert Einstein', 'If you want to live a happy life, tie it to a goal, not to people or things.',new Date(2019,8,12)),
     new Quote (8, 'Deepak Chopra', 'The healthiest response to life is joy.',new Date(2020,7,5)),
     new Quote (9, 'Stephen Hawking', 'Life would be tragic if it weren’t funny.',new Date(2021,3,29)),
     new Quote (10,'Emily Dickinson', 'Forever is composed of nows.',new Date(2021,11,13)),
     new Quote (11, 'Wendy Muhoho','The biggest motivator in life is yourself.',new Date(2021,10,18)),
     new Quote (12, 'Natalie Nyawira','Be yourself.', new Date(2020,18,7))

  ];
  toggleDetails(index:any){
    this.quotes[index].showSubmitDate = !this.quotes[index].showSubmitDate;
  }
    
  quoteComplete(publishDate:any, index :any){
    if (publishDate) {
      this.quotes.splice(index,1);
    }
  }    
  deleteQuote(publishDate:any, index:any){
    if (publishDate) {
      let toDelete = confirm(`Are you sure you want to delete  the quote"${this.quotes[index].quote}" ~ ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


