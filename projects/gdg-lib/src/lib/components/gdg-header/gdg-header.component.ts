import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gdg-header',
  templateUrl: './gdg-header.component.html',
  styleUrls: ['./gdg-header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public headerTitle: string = 'Title';
  @Input()
  public headerDescription: string = 'Description';

  constructor() { }

  ngOnInit(): void {
  }

}
