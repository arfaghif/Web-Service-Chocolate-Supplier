#Deskripsi web service
WSS Merupakan Web Service yang digunakan untuk mengatur transaksi jual beli bahan antara superuser pada Willy Wangky’s Factory dengan Supplier. Web Service ini menggunakan framework express js. Pada local akan dijalankan di http://localhost:3001/ *  Kemudian nantinya akan di panggil di frontend react js dan php. Pada web service ini menyediakan dua API yaitu API untuk melakukan pembelian bahan dan API untuk melihat daftar bahan yang tersedia di database.
#Basis data yang digunakan web service
Database yang digunakan pada tugas kali ini menggunakan MySQL yang berisi tabel bahan pada tabel bahan berisi kolom nama sebagai primary key dan dan harga dari bahan tersebut. Untuk melakukan koneksi dengan express js menggunakan modul mysql yang disediakan oleh npm.
