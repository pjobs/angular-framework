import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.sevice';

@Component({
  selector: 'afw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit() {
  }

}
