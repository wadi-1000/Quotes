import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
     new Quote (1, 'Dolly Parton','The way I see it, if you want the rainbow,you gotta put up with the rain.'),
     new Quote (2, 'Stephen King','Get busy living or get busy dying.'),
     new Quote (3, 'John Lennon', 'Life happens when your busy making other plans'),
     new Quote (4,'Thomas A. Edison', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.'),
     new Quote (5, 'Hollyn', 'Love with your life'),
     new Quote (6, 'Babe Ruth', 'Never let the fear of striking out keep you from playing the game.'),
     new Quote (7, 'Albert Einstein', 'If you want to live a happy life, tie it to a goal, not to people or things.'),
     new Quote (8, 'Deepak Chopra', 'The healthiest response to life is joy.'),
     new Quote (9, 'Stephen Hawking', 'Life would be tragic if it weren’t funny.'),
     new Quote (10,'Emily Dickinson', 'Forever is composed of nows.')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
