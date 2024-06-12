import { JsonPipe, KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Root {
  vegetables: Vegetable[]
  fruit: Fruit[]
  meat: Meat[]
}

export interface Vegetable {
  name: string
  type: string
  quantity: number
}

export interface Fruit {
  name: string
  type: string
  quantity: number
}

export interface Meat {
  name: string
  type: string
  quantity: number
}

export interface Item {
  name: string
  type: string
  quantity: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, KeyValuePipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  inventory: any[] = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  groupedItems: Record<string, any> | ReadonlyMap<string, any> | null | undefined = undefined;

  groupItemsByType(){
    // @ts-ignore
    this.groupedItems = Object.groupBy(this.inventory, ({ type }) => type);
    console.log('groupedItems', this.groupedItems);
  }

}
