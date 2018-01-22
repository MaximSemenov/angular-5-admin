import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() quantityOfUsers;


  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParams.subscribe(params => console.log(params));
  }

  ngOnInit() {

  }

}
