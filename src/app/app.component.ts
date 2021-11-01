import { Component } from '@angular/core';
import Utils from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const data = {
      "result": [
        {
          "sys_id": "016d2c3d18400300964f2ff0d21a4ee4",
          "parent": "",
          "short_description": "",
          "name": "Develop and Manage Products and Services",
          "active": "true"
        },
        {
          "sys_id": "016d2c3d18400300964f2ff0d21a4eeb",
          "parent": "",
          "short_description": "",
          "name": "Market and Sell Products and Services",
          "active": "true"
        },
        {
          "sys_id": "c96d2c3d18400300964f2ff0d21a4ef0",
          "parent": {
            "value": "016d2c3d18400300964f2ff0d21a4eeb"
          },
          "short_description": "Marketing planning application",
          "name": "Develop and manage marketing plans",
          "active": "true"
        },
        {
          "sys_id": "c96d2c3d18400300964f2ff0d21a4ef0",
          "parent": {
            "value": "016d2c3d18400300964f2ff0d21a4eeb"
          },
          "short_description": "Marketing planning application",
          "name": "Develop and manage marketing plans",
          "active": "true"
        },
        {
          "sys_id": "c16d2c3d18400300964f2ff0d21a4ef4",
          "parent": {
            "value": "016d2c3d18400300964f2ff0d21a4eeb"
          },
          "short_description": "Sale planning application",
          "name": "Develop and manage sales plans",
          "active": "true"
        },
        {
          "sys_id": "cd6d2c3d18400300964f2ff0d21a4ee7",
          "parent": {
            "value": "016d2c3d18400300964f2ff0d21a4ee4"
          },
          "short_description": "",
          "name": "Generate and define new product/service ideas",
          "active": "true"
        },
        {
          "sys_id": "016d2c3d18400300964f2ff0d21a4eeb",
          "parent": "",
          "short_description": "",
          "name": "Market and Sell Products and Services",
          "active": "true"
        },
        {
          "sys_id": "896d2c3d18400300964f2ff0d21a4ef4",
          "parent": {
            "value": "c16d2c3d18400300964f2ff0d21a4ef4"
          },
          "short_description": "Description",
          "name": "Manage leads/opportunities",
          "active": "true"
        }
      ]
    };
    this.items = Utils.list_to_tree(data.result);
  }
  items:any[] = [];
  title = 'hierarchy';
  
}
