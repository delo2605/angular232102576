import { AfterViewInit, Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { $locationShim } from '@angular/common/upgrade';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  imports: [Sidebar, Header, Footer],
  templateUrl: './mahasiswa.html',
  styleUrl: './mahasiswa.css',
})
export class Mahasiswa implements AfterViewInit{
  constructor() {}

  ngAfterViewInit(): void {
    $("#table1").DataTable();
  }
}
