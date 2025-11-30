import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http'; // <-- BARIS BARU: Import HttpClient

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
// Pastikan nama kelas menggunakan PascalCase: Sidebar
export class Sidebar implements OnInit { 
    @Input() moduleName: string = "";
    username: string = "Memuat..."; // Inisialisasi awal

    constructor(
        private cookieServive: CookieService, 
        private router: Router,
        private httpClient: HttpClient // <-- BARIS BARU: Inject HttpClient
    ) {}

    ngOnInit(): void {
        const userId = this.cookieServive.get("userId");
        if (userId) {
            this.ambilNamaPengguna(userId); // <-- Panggil fungsi API
        } else {
            this.username = "Belum Login";
        }
    }

    ambilNamaPengguna(userId: string): void {
        // Ganti dengan URL endpoint mahasiswa Anda
        const url = "https://stmikpontianak.cloud/011100862/mahasiswa.php?id=" + userId; 
        
        // Melakukan panggilan GET ke API
        this.httpClient.get(url).subscribe((data: any) => {
            console.log('Data pengguna dari API:', data);
            
            // Logika untuk mengambil field 'nama'
            if (data && data.length > 0) {
                this.username = data[0].nama; // <-- Mengambil NAMA LENGKAP dari hasil API
            } else {
                this.username = userId; // Fallback ke ID jika nama tidak ditemukan
            }
        });
    }
}