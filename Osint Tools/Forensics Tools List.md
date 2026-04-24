## 🔍 Awesome Digital Forensics Tools List

![Unit](https://img.shields.io/badge/Unit-123Tool%20Intelligence-7000ff?style=for-the-badge)
![Category](https://img.shields.io/badge/Focus-Digital%20Forensics-blue?style=for-the-badge)

Daftar lengkap alat forensik digital profesional berdasarkan pemetaan aset **SPY-E Intelligence**. Gunakan alat ini untuk akuisisi data, analisis artefak, dan investigasi siber.
---
## 🏛️ 1. Full Forensic Suites
Alat paket lengkap yang mencakup hampir semua alur kerja investigasi.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **Autopsy** | GUI berbasis Sleuth Kit untuk investigasi hard drive secara mendalam. | [Link](https://www.autopsy.com/) |
| **The Sleuth Kit** | Koleksi alat baris perintah untuk analisis sistem berkas. | [Link](https://www.sleuthkit.org/) |
| **Magnet AXIOM** | Platform komprehensif untuk bukti dari cloud, smartphone, dan komputer. | [Link](https://www.magnetforensics.com/) |
| **Cellebrite UFED** | Standar industri untuk ekstraksi data perangkat seluler (Mobile). | [Link](https://cellebrite.com/) |
| **X-Ways Forensics** | Workstation forensik tingkat lanjut yang sangat cepat dan efisien. | [Link](http://www.x-ways.net/) |

---
## 💾 2. Disk Imaging & Acquisition
Fokus pada pengambilan salinan identik (bit-by-bit) dari media penyimpanan.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **FTK Imager** | Alat pratinjau dan pencitraan data tanpa mengubah bukti asli. | [Link](https://www.exterro.com/ftk-imager) |
| **WinFE** | Lingkungan boot Windows untuk forensik tanpa menyentuh hard drive. | [Link](https://winfe.wordpress.com/) |
| **Guymager** | Alat pencitraan disk open-source berbasis GUI untuk Linux. | [Link](https://guymager.sourceforge.io/) |
| **dc3dd** | Versi modifikasi dari perintah 'dd' dengan fitur hashing terintegrasi. | [Link](https://sourceforge.net/projects/dc3dd/) |
| **ewfacquire** | Alat untuk menulis data media ke dalam format EWF (Expert Witness). | [Link](https://github.com/libyal/libewf) |
| **Disk-Arbitrator** | Tool macOS untuk mencegah mounting disk secara otomatis (Write-block). | [Link](https://github.com/daidodo/disk-arbitrator) |

---
## ⚡ 3. Live Forensic Collection
Pengumpulan bukti pada sistem yang masih berjalan (Live System).

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **KAPE** | Alat pengumpul dan pengurai artefak yang sangat cepat. | [Link](https://www.kroll.com/en/services/cyber-risk/incident-response-services/kape) |
| **Velociraptor** | Platform untuk pemantauan endpoint dan respon insiden skala besar. | [Link](https://docs.velociraptor.app/) |
| **GRR Rapid Response** | Kerangka kerja investigasi endpoint jarak jauh milik Google. | [Link](https://github.com/google/grr) |
| **F-Response** | Memberikan akses jarak jauh ke disk fisik dan memori. | [Link](https://www.f-response.com/) |
| **CyLR** | Kolektor log insiden untuk sistem Windows, Linux, dan macOS. | [Link](https://github.com/orlikoski/CyLR) |
| **UAC** | (Unix Artifact Collector) Script untuk mengumpulkan artefak sistem Unix/Linux. | [Link](https://github.com/tclahr/uac) |

---
## 🧠 4. Memory Forensics
Analisis data yang tersimpan di dalam RAM (Volatile Data).

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **Volatility** | Framework paling populer untuk analisis dump memori di dunia. | [Link](https://www.volatilityfoundation.org/) |
| **WinPmem** | Alat pengambil (imager) memori fisik untuk sistem Windows. | [Link](https://github.com/Velocidex/WinPmem) |
| **RAM Capturer** | Tool gratis untuk mengambil dump RAM tanpa meninggalkan jejak besar. | [Link](https://www.belkasoft.com/ram-capturer) |
| **Magnet RAM Capture** | Alat ringan untuk mengambil memori fisik pada komputer target. | [Link](https://www.magnetforensics.com/resources/magnet-ram-capture/) |

---
## 🌐 5. Network Forensics
Investigasi lalu lintas jaringan dan deteksi intrusi.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **Wireshark** | Penganalisis protokol jaringan paling banyak digunakan di dunia. | [Link](https://www.wireshark.org/) |
| **NetworkMiner** | Alat analisis jaringan pasif (Sniffer) untuk deteksi OS, sesi, dan file. | [Link](https://www.netresec.com/?page=NetworkMiner) |
| **Zeek** | Kerangka kerja pemantauan keamanan jaringan berbasis analisis trafik. | [Link](https://zeek.org/) |
| **Snort** | Sistem deteksi dan pencegahan intrusi (IDS/IPS) secara real-time. | [Link](https://www.snort.org/) |
| **Suricata** | Mesin pemantauan keamanan jaringan yang cepat dan tangguh. | [Link](https://suricata.io/) |
| **Arkime** | Alat pengindeksan paket jaringan skala besar dan pencarian data PCAP. | [Link](https://arkime.com/) |
| **Kismet** | Detektor jaringan nirkabel (Wi-Fi, Bluetooth, Zigbee) dan penganalisis paket. | [Link](https://www.kismetwireless.net/) |

---
## 📁 6. File, Metadata & Data Carving
Mengekstrak data tersembunyi atau file yang sudah dihapus.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **bulk-extractor** | Ekstraksi informasi penting seperti email/URL dari disk secara massal. | [Link](https://github.com/simsong/bulk_extractor) |
| **binwalk** | Alat untuk menganalisis, mengekstrak, dan merekayasa balik firmware. | [Link](https://github.com/ReFirmLabs/binwalk) |
| **ExifTool** | Alat membaca, menulis, dan memanipulasi metadata (gambar/video). | [Link](https://exiftool.org/) |
| **Foremost** | Program baris perintah untuk memulihkan file berdasarkan header/footer. | [Link](http://foremost.sourceforge.net/) |
| **Scalpel** | Alat carving file yang sangat cepat berbasis Foremost. | [Link](https://github.com/sleuthkit/scalpel) |
| **FLOSS** | Secara otomatis mengekstrak string tersembunyi dari file malware. | [Link](https://github.com/mandiant/flare-floss) |

---
## 📅 7. Timeline, Artifact & Log Analysis
Menyusun urutan kejadian perkara berdasarkan waktu.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **Log2timeline** | Alat utama (Plaso) untuk membuat timeline super dari artefak sistem. | [Link](https://github.com/log2timeline/plaso) |
| **Timesketch** | Alat kolaboratif untuk analisis timeline forensik secara visual. | [Link](https://timesketch.googleplex.com/) |
| **Hindsight** | Analisis riwayat browser internet (Chrome/Chromium). | [Link](https://github.com/obsidianforensics/hindsight) |
| **DFTimewolf** | Framework untuk mengotomatisasi pengumpulan bukti dan pemrosesan timeline. | [Link](https://github.com/log2timeline/dftimewolf) |

---
## 📱 8. Mobile Forensics
Investigasi perangkat seluler (Android/iOS).

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **libimobiledevice** | Pustaka software untuk berkomunikasi dengan perangkat iOS secara native. | [Link](https://libimobiledevice.org/) |
| **ALEAPP** | Pengurai artefak log dari perangkat Android. | [Link](https://github.com/abrignoni/ALEAPP) |
| **iLEAPP** | Pengurai artefak log dari perangkat iOS (iPhone/iPad). | [Link](https://github.com/abrignoni/iLEAPP) |
| **ArtEx** | Penjelajah artefak tingkat lanjut untuk perangkat iOS. | [Link](https://github.com/YogeshKhatri/ArtEx) |
| **MobSF** | Kerangka kerja analisis keamanan aplikasi mobile (Android/iOS/Windows). | [Link](https://mobsf.github.io/Mobile-Security-Framework-MobSF/) |
| **MSAB XRY** | Alat ekstraksi data forensik mobile kelas profesional/pemerintah. | [Link](https://www.msab.com/product/xry-extract/) |

---
## 🪟 9. Windows Artifacts
Fokus pada artefak spesifik yang ditinggalkan oleh sistem operasi Windows.

| Nama Alat | Keterangan | Link Resmi |
| :--- | :--- | :--- |
| **Hayabusa** | Analis log peristiwa Windows (Event Log) yang sangat cepat. | [Link](https://github.com/Yamato-Security/hayabusa) |
| **LoginTracer** | Visualisasi dan analisis log Windows untuk mendeteksi login mencurigakan. | [Link](https://github.com/JPCERTCC/LoginTracer) |
| **RegRippy** | Framework berbasis Python untuk mengurai file Registry Windows. | [Link](https://github.com/airbus-cert/regrippy) |
| **RecuperaBit** | Alat untuk memulihkan partisi NTFS yang rusak atau hilang. | [Link](https://github.com/Lazza/RecuperaBit) |
| **NTFSTool** | Utilitas untuk membaca dan mengekstrak data dari sistem berkas NTFS. | [Link](https://github.com/ufrisk/ntfs) |

---
**Unit:** SPY-E Intelligence // 123TOOL  
© 2026 ALL RIGHTS RESERVED.
