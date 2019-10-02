import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  website = 'https://mschuer.de';

  todos = [
    {
      name: 'Einkaufen',
      category: 'Haushalt'
    },
    {
      name: 'Hamsterfutter kaufen',
      category: 'Hobby'
    },
    {
      name: 'Hamster füttern',
      category: 'Hobby'
    },
    {
      name: 'Staubsaugen',
      category: 'Haushalt'
    }
  ];

  completed = [
    {
      name: 'Neuen Badeanzug kaufen',
      category: 'Hobby'
    },
    {
      name: 'Müll rausbringen',
      category: 'Haushalt'
    },
    {
      name: 'Beine rasieren',
      category: 'Hobby'
    },
    {
      name: 'Wäsche waschen',
      category: 'Haushalt'
    }
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
