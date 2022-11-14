import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello3',
  templateUrl: `./hello3.component.html`,
  styleUrls: [`./hello3.component.css`],
})
export class Hello3Component implements OnInit {
  @Input() name: string;

  public ngOnInit(): void {
    this.name = '1111111111111111111';
  }
}
