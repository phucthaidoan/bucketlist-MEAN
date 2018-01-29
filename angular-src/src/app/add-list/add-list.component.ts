import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;
  
  @Output()
  addList: EventEmitter<List>;

  constructor(private listServ: ListService) {    
    this.addList = new EventEmitter<List>();
  }

  ngOnInit() {    
    this.newList = {
      _id: '',
      description: '',
      title: '',
      category: ''      
    };
  }

  public onSubmit() {    
    this.listServ
      .addList(this.newList)
      .subscribe(response => {
        if(response.success) {
          this.addList.emit(this.newList);
        }
      });
  }
}
