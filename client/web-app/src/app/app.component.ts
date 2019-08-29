import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { } from 'googlemaps';
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { TestService } from "./shared/services/test.service";
import { NavbarService } from "src/app/shared/services/navbar.service";
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "web-app";
  lat: number = -34.899977;
  lng: number = -56.1633164;

  warehouseUbication = {
    lat: -34.895512,
    lng: -56.143219
  }

  orderUbication = {
    lat: -34.899141,
    lng: -56.150548
  }

  @ViewChild("warehouseWindow") warehouseWindow: InfoWindow;
  @ViewChild("userWindow") userWindow: InfoWindow;
  @ViewChild("orderWindow") orderWindow: InfoWindow;


  constructor(
    private translate: TranslateService,
    private router: Router,
    private _testService: TestService,
    private _navbarService: NavbarService,
    private toastr: ToastrService
  ) {
    translate.setDefaultLang("es");
    translate.use("es");
  }

  async ngOnInit() {
    const t = await this._testService.test();

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      });
    }
  }

  ngAfterViewInit(): void {
    this.warehouseWindow.open();
    this.userWindow.open();
    this.orderWindow.open();
    this.simulateShipping();
  }

  changeOfRoutes() {
    this.changeNavbar();
    this.searcherNavbar();
    if (this.router.url === "/home/main") {
      this._navbarService.UpdateNavbarColor("#FFC244");
    } else {
      this._navbarService.UpdateNavbarColor("#FFC244");
    }
  }

  changeNavbar() {
    if (
      this.router.url === "/home/login" ||
      this.router.url === "/home/signin"
    ) {
      this._navbarService.UpdateNavdarplace(false);
    } else {
      this._navbarService.UpdateNavdarplace(true);
    }
  }

  searcherNavbar() {
    if (this.router.url === "/home/login" ||  this.router.url === "/home/signin" ||  this.router.url === "/home/main") {
      this._navbarService.SearcherInNavdar(false);
    } else {
      this._navbarService.SearcherInNavdar(true);
    }
  }

  simulateShipping(){

    setTimeout(() => {
      this.orderUbication.lat = -34.895494;
      this.orderUbication.lng = -56.1432181;
    }, 1000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8956997;
      this.orderUbication.lng = -56.1438015;
    }, 2000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8960123;
      this.orderUbication.lng = -56.1449942;
    }, 3000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8966275;
      this.orderUbication.lng = -56.14545;
    }, 4000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8970161;
      this.orderUbication.lng = -56.1458224;
    }, 5000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8971494;
      this.orderUbication.lng = -56.1467077;
    }, 6000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8974232;
      this.orderUbication.lng = -56.1475119;
    }, 7000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8977343;
      this.orderUbication.lng = -56.1483009;
    }, 8000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8981201;
      this.orderUbication.lng = -56.1493174;
    }, 9000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8977841;
      this.orderUbication.lng = -56.1513506;
    }, 10000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8991903;
      this.orderUbication.lng = -56.1506375;
    }, 11000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8992526;
      this.orderUbication.lng = -56.1512141;
    }, 12000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8994641;
      this.orderUbication.lng = -56.151912;
    }, 13000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8996259;
      this.orderUbication.lng = -56.1527769;
    }, 14000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8997628;
      this.orderUbication.lng = -56.1535355;
    }, 15000);

    setTimeout(() => {
      this.orderUbication.lat = -34.899937;
      this.orderUbication.lng = -56.1545218;
    }, 16000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9001112;
      this.orderUbication.lng = -56.1553411;
    }, 17000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9003102;
      this.orderUbication.lng = -56.1563122;
    }, 18000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9002978;
      this.orderUbication.lng = -56.1572378;
    }, 19000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9001662;
      this.orderUbication.lng = -56.1579962;
    }, 20000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9004209;
      this.orderUbication.lng = -56.1585068;
    }, 21000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9007021;
      this.orderUbication.lng = -56.1589037;
    }, 22000);

    setTimeout(() => {
      this.orderUbication.lat = -34.9002877;
      this.orderUbication.lng = -56.1597518;
    }, 23000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8998437;
      this.orderUbication.lng = -56.1609246;
    }, 24000);

    setTimeout(() => {
      this.orderUbication.lat = -34.8997105;
      this.orderUbication.lng = -56.1625486;
    }, 25000);

    setTimeout(() => {
      this.orderUbication.lat = this.lat;
      this.orderUbication.lng = this.lng;
      this.toastr.success('Llegó el pedido','',{
        timeOut: 2000,
        positionClass: 'toast-top-center'
      });
      this.orderWindow.close();
    }, 26000);

  }
}
