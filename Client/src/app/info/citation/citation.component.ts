import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent implements OnInit {

  @Input( ) href;

  constructor() { }

  ngOnInit() {
  }

}
