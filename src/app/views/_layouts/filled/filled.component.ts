import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filled',
  templateUrl: './filled.component.html',
  styleUrls: ['./filled.component.sass']
})
export class FilledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
