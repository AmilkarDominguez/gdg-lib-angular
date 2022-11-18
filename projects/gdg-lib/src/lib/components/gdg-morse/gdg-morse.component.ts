import {Component, Input, OnInit} from '@angular/core';
import {Decoder} from "./decoder/decoder";

@Component({
  selector: 'gdg-morse',
  templateUrl: './gdg-morse.component.html',
  styleUrls: ['./gdg-morse.component.scss']
})
export class MorseComponent implements OnInit {

  @Input()
  public textInput: string = '';
  @Input()
  public action: string = 'encode';

  public processed: string = '';
  private decoder: Decoder = new Decoder();

  constructor() {
  }

  ngOnInit(): void {
    if (this.action==='encode'){
      this.processed = this.decoder.encode(this.textInput);
    }else if(this.action==='decode'){
      this.processed = this.decoder.decode(this.textInput);
    }
  }

}
