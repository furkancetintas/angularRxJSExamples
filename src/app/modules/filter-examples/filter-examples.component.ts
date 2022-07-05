import { Component, OnInit } from '@angular/core';
import { concat, concatMap, filter, map, pipe } from 'rxjs';
import { FilterExamplesModel } from './models/filter-examples.model';
import { FilterExamplesService } from './services/filter-examples.service';

@Component({
  selector: 'app-filter-examples',
  templateUrl: './filter-examples.component.html',
  styleUrls: ['./filter-examples.component.scss'],
})
export class FilterExamplesComponent implements OnInit {
  items: FilterExamplesModel[] = [];

  constructor(private filterExamplesService: FilterExamplesService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.filterExamplesService.getMethod().subscribe((data) => {
      // console.log(data);
      this.items = data;
    });
  }
  getAllUserId2() {
    this.filterExamplesService
      .getMethod()
      .pipe(map((posts) => posts.filter((post: any) => post.userId === 2)))
      .subscribe((response) => {
        console.log(response);

        this.items = response;
      });
  }
  getAllUserId10() {
    this.filterExamplesService
      .getMethod()
      .pipe(map((posts) => posts.filter((post: any) => post.userId === 10)))
      .subscribe((response) => {
        console.log(response);

        this.items = response;
      });
  }

  //! aşağıdaki kısım hata veriyor concatMap methoduna bak!.
  // getAllUserId10() {
  //   this.filterExamplesService
  //     .getMethod()
  //     .pipe(
  //       concatMap(posts => posts),
  //       filter((post: any) => post.userId === 10)
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.items = response;
  //     });
  // }
}
