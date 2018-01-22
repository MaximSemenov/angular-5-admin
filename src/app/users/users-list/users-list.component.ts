import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public startElement: number;
  public endElement: number;
  public activePage: number;


  @Input() users;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {

      // if (!params.page || +params.page === 1) {
      //   (console.log('popal'))
      //   this.startElement = 0;
      //   this.endElement = 9;
      //   return;
      // }
      // this.startElement = params.page * 10;
      // this.endElement = this.startElement + 11;

      

    });
  }

  ngOnInit() {
    console.log(this.startElement);
  }

}
