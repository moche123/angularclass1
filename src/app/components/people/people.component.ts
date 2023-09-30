import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people = [

    {
      name: "Carlos",
      age: 20
    },
    {
      name: "Alberto",
      age: 10
    },
    {
      name: "Lucas",
      age: 30
    },
    {
      name: "Daniel",
      age: 15
    }
  ]
}
