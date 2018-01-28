import { Component, OnInit } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.newList = {
      _id: '',
      description: '',
      title: '',
      category: ''      
    };
  }

}
