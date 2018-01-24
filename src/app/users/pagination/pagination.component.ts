import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() quantityOfUsers;
  public pages: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['quantityOfUsers'].isFirstChange()) {
      const lastPage = Math.ceil(this.quantityOfUsers / 10);
      
      this.pages = Array.from(Array(lastPage + 1).keys()).slice(1);
    }

  }
}
