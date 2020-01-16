import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'books';

  toRead = [
    new Book('The Cat In The Hat', 'Dr. Suess', 1957),
    new Book('Where the Sidewalk Ends', 'Shel Silverstein', 1974) 
  ]

  read = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 1937 ),
    new Book('Of Mice and Men', 'John Steinbeck', 1937)
  ]
}
