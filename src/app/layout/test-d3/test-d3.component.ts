import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Node } from '../node';
import { Netowrk } from '../network';

import {
  D3Service,
  D3
} from 'd3-ng2-service';

@Component({
  selector: 'app-test-d3',
  templateUrl: './test-d3.component.html',
  styleUrls: ['./test-d3.component.scss']
})
export class TestD3Component implements OnInit {

    private static readonly NODE_RADIUS = 20;
    private static readonly NODE_COLORS = {
        "controller": "gray",
        "host": "tomato",
        "switch": "dodgerblue"
    };
    private static readonly SVG_FILL = "LightSlateGray";

  private d3: D3;
  private parentNativeElement: any;

  constructor(d3Service: D3Service) {
    this.d3 = d3Service.getD3();

  }

  ngOnInit() {
        let svg = this.d3.select("svg")
        svg.attr("fill", this.SVG_FILL);
   }
}
