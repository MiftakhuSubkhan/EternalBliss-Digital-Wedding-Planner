
const DEFAULT_STATE = {
  profile: {
    brideName: 'Sarah Amanda',
    groomName: 'Rizky Pratama',
    coupleTitle: 'Sarah & Rizky',
    weddingDate: '2026-11-28T09:00',
    weddingVenue: 'Glass House Ballroom, Plataran Dharmawangsa',
    weddingCity: 'Jakarta Selatan',
    totalBudget: 150000000,
    photo: 'assets/wedding_rings.jpg'
  },
  expenses: [
    { id: 'exp-1', category: 'vendor', name: 'Katering 500 Pax Buffet & Stall', est: 75000000, real: 75000000, dp: 75000000, status: 'Lunas', notes: 'Menu nusantara fusion, 5 gubukan' },
    { id: 'exp-2', category: 'vendor', name: 'Venue Glass House Ballroom', est: 30000000, real: 30000000, dp: 15000000, status: 'DP', notes: 'Sewa 6 jam termasuk ruang rias' },
    { id: 'exp-3', category: 'vendor', name: 'MUA & Busana Akad + Resepsi', est: 15000000, real: 15000000, dp: 15000000, status: 'Lunas', notes: 'Termasuk busana 2 ibu & beskap 2 bapak' },
    { id: 'exp-4', category: 'vendor', name: 'Dekorasi Pelaminan Champagne Blush', est: 20000000, real: 22000000, dp: 10000000, status: 'DP', notes: 'Pelaminan 10m, gate masuk, photo booth' },
    { id: 'exp-5', category: 'vendor', name: 'Dokumentasi Foto & Video Teaser', est: 12000000, real: 12000000, dp: 6000000, status: 'DP', notes: '2 Fotografer, 2 Videografer, Drone' },
    { id: 'exp-6', category: 'vendor', name: 'Entertainment Akustik & WO Hari H', est: 10000000, real: 10000000, dp: 5000000, status: 'DP', notes: '6 Crew WO, 1 MC, 4 Musisi' },
    { id: 'exp-7', category: 'bawaan', name: 'Cincin Kawin Emas Putih & Berlian', est: 12000000, real: 12500000, dp: 12500000, status: 'Lunas', notes: 'Sepasang kadar 75% grafir nama' },
    { id: 'exp-8', category: 'bawaan', name: 'Mahar Logam Mulia 15 Gram', est: 10000000, real: 10000000, dp: 10000000, status: 'Lunas', notes: 'Frame pigura kaca akrilik 3D' },
    { id: 'exp-9', category: 'bawaan', name: 'Seserahan & 8 Kotak Hantaran', est: 8000000, real: 8000000, dp: 0, status: 'Belum Bayar', notes: 'Perlengkapan ibadah, kosmetik, tas, sepatu' },
    { id: 'exp-10', category: 'bawaan', name: 'Perawatan Calon Pengantin (Pre-wedding Spa)', est: 3000000, real: 2500000, dp: 2500000, status: 'Lunas', notes: 'Body scrub, facial, hair care' },
    { id: 'exp-11', category: 'operasional', name: 'Souvenir Tamu (350 pcs Luxury Pouch)', est: 4500000, real: 4500000, dp: 4500000, status: 'Lunas', notes: 'Free embos nama & packaging pita' },
    { id: 'exp-12', category: 'operasional', name: 'Undangan Cetak & Digital Web/Video', est: 2500000, real: 2000000, dp: 2000000, status: 'Lunas', notes: '100 pcs fisik hard cover + web RSVP' },
    { id: 'exp-13', category: 'operasional', name: 'Administrasi KUA & Petugas Penghulu', est: 1000000, real: 1000000, dp: 1000000, status: 'Lunas', notes: 'Biaya nikah luar kantor KUA resmi' },
    { id: 'exp-14', category: 'operasional', name: 'Akomodasi & 2 Kamar Hotel Keluarga', est: 5000000, real: 5000000, dp: 2500000, status: 'DP', notes: 'Menginap H-1 untuk keluarga luar kota' }
  ],
  tasks: [
    { id: 't-1', phase: 'h12', title: 'Tentukan tanggal pernikahan & konsep impian', completed: true, note: 'Disepakati keluarga kedua pihak' },
    { id: 't-2', phase: 'h12', title: 'Tentukan estimasi total anggaran & pembagian pos biaya', completed: true, note: 'Alokasi plafon Rp 150 Juta' },
    { id: 't-3', phase: 'h12', title: 'Survei & booking ballroom venue acara', completed: true, note: 'Plataran Dharmawangsa locked' },
    { id: 't-4', phase: 'h12', title: 'Pilih & booking Wedding Organizer (WO)', completed: true, note: 'Paket koordinasi hari H + panitia' },
    { id: 't-5', phase: 'h6', title: 'Pilih vendor dekorasi tema champagne blush & gold', completed: true, note: 'Lotus Design Decor' },
    { id: 't-6', phase: 'h6', title: 'Test food & finalisasi menu katering utama', completed: true, note: 'Puspa Catering Luxury approved' },
    { id: 't-7', phase: 'h6', title: 'Booking MUA & fitting busana pengantin pertama', completed: true, note: 'Bennu Sorumba' },
    { id: 't-8', phase: 'h6', title: 'Beli & ukur cincin kawin sepasang', completed: true, note: 'Grafir nama Sarah & Rizky' },
    { id: 't-9', phase: 'h6', title: 'Sesi pemotretan pre-wedding outdoor/studio', completed: true, note: 'File siap cetak galeri' },
    { id: 't-10', phase: 'h3', title: 'Urus berkas kelengkapan KUA / Gereja (Surat N1-N4)', completed: true, note: 'Pengantar kelurahan beres' },
    { id: 't-11', phase: 'h3', title: 'Susun draf daftar tamu undangan & alokasi pax', completed: true, note: 'Target 300 - 350 pax' },
    { id: 't-12', phase: 'h3', title: 'Pesan souvenir pernikahan & hiasan kotak hantaran', completed: true, note: '350 pcs clutch' },
    { id: 't-13', phase: 'h1m', title: 'Final fitting baju pengantin dan seragam keluarga inti', completed: false, note: 'Jadwal fitting minggu depan' },
    { id: 't-14', phase: 'h1m', title: 'Sebar undangan cetak & kirim link undangan digital via WA', completed: false, note: 'Distribusi bertahap' },
    { id: 't-15', phase: 'h1m', title: 'Technical Meeting (TM) WO, vendor & keluarga di venue', completed: false, note: 'Cocokkan rundown detail' },
    { id: 't-16', phase: 'h1w', title: 'Rekap final konfirmasi RSVP & plotting nomor meja tamu', completed: false, note: 'Alokasi meja VIP & keluarga' },
    { id: 't-17', phase: 'h1w', title: 'Gladi resik tata tertib akad & kirab pengantin', completed: false, note: 'Bersama orang tua & saksi' },
    { id: 't-18', phase: 'h1w', title: 'Packing barang hantaran seserahan & mahar emas', completed: false, note: 'Cek kelengkapan buku nikah' },
    { id: 't-19', phase: 'h0', title: 'Sesi Makeup pengantin & ibu mulai 05:00 WIB', completed: false, note: 'Di bridal room hotel' },
    { id: 't-20', phase: 'h0', title: 'Prosesi Akad Nikah / Ijab Qabul & Sungkeman', completed: false, note: 'Pukul 08:30 WIB' },
    { id: 't-21', phase: 'h0', title: 'Resepsi pernikahan, lempar buket bunga & ramah tamah', completed: false, note: 'Pukul 11:30 - 14:30 WIB' }
  ],
  vendors: [
    {
      id: 'v-1',
      category: 'Venue & Gedung',
      name: 'Glass House Plataran Dharmawangsa',
      pic: 'Bpk. Hendra Wijaya',
      phone: '6281234567890',
      contract: 30000000,
      dp: 15000000,
      status: 'Booked',
      notes: 'Termasuk izin sound, listrik 10.000 watt, dan 2 kamar transit keluarga.'
    },
    {
      id: 'v-2',
      category: 'Katering',
      name: 'Puspa Catering Luxury',
      pic: 'Ibu Ratna Dewi',
      phone: '6281398765432',
      contract: 75000000,
      dp: 75000000,
      status: 'Lunas',
      notes: '500 Pax Buffet Internasional + 5 Gubukan Populer (Zuppa, Roast Beef, Sate).'
    },
    {
      id: 'v-3',
      category: 'Dekorasi & Florist',
      name: 'Lotus Design Decor',
      pic: 'Mas Dimas Prasetyo',
      phone: '6281122334455',
      contract: 22000000,
      dp: 10000000,
      status: 'Booked',
      notes: 'Nuansa Luxury Champagne Blush, Fresh Roses, Curved Arch & LED Lighting.'
    },
    {
      id: 'v-4',
      category: 'MUA & Busana',
      name: 'Bennu Sorumba Bridal Team',
      pic: 'Mbak Cindy Claudia',
      phone: '6281567890123',
      contract: 15000000,
      dp: 15000000,
      status: 'Lunas',
      notes: 'MUA flawless akad & resepsi, retouch 2x, melati ronce fresh asli.'
    },
    {
      id: 'v-5',
      category: 'Dokumentasi',
      name: 'The Bride Story Visuals',
      pic: 'Mas Aldi Bramantya',
      phone: '6281789012345',
      contract: 12000000,
      dp: 6000000,
      status: 'Booked',
      notes: 'Full day coverage, Same Day Edit video 1 menit teaser, 1 Album photobook premium.'
    },
    {
      id: 'v-6',
      category: 'Wedding Organizer & MC',
      name: 'Blissful Wedding Organizer',
      pic: 'Kak Dania Maharani',
      phone: '6281299887766',
      contract: 10000000,
      dp: 5000000,
      status: 'Booked',
      notes: '6 crew in-charge, 1 MC akad & resepsi, sound management & briefing keluarga.'
    }
  ],
  vendorComparisons: [
    {
      category: 'Katering (500 Pax)',
      candidates: [
        { name: 'Puspa Catering (Pilihan)', price: 75000000, pros: 'Rasa bintang lima, bonus 1 stall ice cream', isChosen: true },
        { name: 'Medina Catering', price: 78000000, pros: 'Dekor gubukan mewah, porsi besar', isChosen: false },
        { name: 'Chikal Catering', price: 68000000, pros: 'Harga ekonomis, tapi pilihan dessert standar', isChosen: false }
      ]
    },
    {
      category: 'Dokumentasi Foto & Video',
      candidates: [
        { name: 'The Bride Story (Pilihan)', price: 12000000, pros: 'Grading warna hangat romantis, ada drone', isChosen: true },
        { name: 'Momen Indah Visual', price: 14000000, pros: 'Termasuk photobooth 2 jam unlimited', isChosen: false }
      ]
    }
  ],
  guests: [
    { id: 'g-1', name: 'Bpk. H. Bambang Soediro & Keluarga', category: 'VIP', pax: 3, inviteSent: true, rsvp: 'Hadir', table: 'Meja VIP 01', phone: '628123000001' },
    { id: 'g-2', name: 'Ibu Hj. Siti Rahayu (Tante Sarah)', category: 'Keluarga', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja Keluarga 02', phone: '628123000002' },
    { id: 'g-3', name: 'Om Gunawan & Tante Rina', category: 'Keluarga', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja Keluarga 02', phone: '628123000003' },
    { id: 'g-4', name: 'Dr. Aditya Pratama, Sp.A', category: 'VIP', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja VIP 01', phone: '628123000004' },
    { id: 'g-5', name: 'Rangga Prawira (Bestman Rizky)', category: 'Sahabat', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja Sahabat 03', phone: '628123000005' },
    { id: 'g-6', name: 'Anisa Larasati (Bridesmaid Sarah)', category: 'Sahabat', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja Sahabat 03', phone: '628123000006' },
    { id: 'g-7', name: 'Dimas Wicaksono & Partner', category: 'Teman Kantor', pax: 2, inviteSent: true, rsvp: 'Ragu-ragu', table: 'Meja Kantor 04', phone: '628123000007' },
    { id: 'g-8', name: 'Clarissa Maharani (Rekan Divisi)', category: 'Teman Kantor', pax: 1, inviteSent: true, rsvp: 'Hadir', table: 'Meja Kantor 04', phone: '628123000008' },
    { id: 'g-9', name: 'Bayu & Gita (Sahabat Kuliah)', category: 'Sahabat', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja Sahabat 03', phone: '628123000009' },
    { id: 'g-10', name: 'Bpk. Ir. FX Hendarto (Direktur)', category: 'VIP', pax: 2, inviteSent: true, rsvp: 'Hadir', table: 'Meja VIP 01', phone: '628123000010' },
    { id: 'g-11', name: 'Farhan Maulana', category: 'Teman Kantor', pax: 1, inviteSent: false, rsvp: 'Belum Konfirmasi', table: 'Meja Kantor 04', phone: '628123000011' },
    { id: 'g-12', name: 'Nadia Kartika & Suami', category: 'Sahabat', pax: 2, inviteSent: true, rsvp: 'Berhalangan', table: '-', phone: '628123000012' },
    { id: 'g-13', name: 'Keluarga Bpk. Suroso (Solo)', category: 'Keluarga', pax: 4, inviteSent: true, rsvp: 'Hadir', table: 'Meja Keluarga 05', phone: '628123000013' },
    { id: 'g-14', name: 'Taufik Hidayat & Istri', category: 'Teman Kantor', pax: 2, inviteSent: false, rsvp: 'Belum Konfirmasi', table: 'Meja Kantor 04', phone: '628123000014' }
  ],
  rundowns: [
    { id: 'rd-1', time: '05:00 - 07:00', title: 'Makeup & Busana Pengantin & Ibu', pic: 'Mbak Cindy (MUA Bennu Team)', phone: '6281567890123', notes: 'Ruang rias utama ballroom. Sarapan ringan disediakan.' },
    { id: 'rd-2', time: '07:00 - 07:45', title: 'Briefing Panitia Keluarga & Wedding Organizer', pic: 'Kak Dania (WO Lead)', phone: '6281299887766', notes: 'Cek sound, saksi nikah, penghulu KUA, dan kesiapan serah terima seserahan.' },
    { id: 'rd-3', time: '08:00 - 08:30', title: 'Penyambutan Rombongan Calon Mempelai Pria', pic: 'Bpk. Hendra (MC & Jubir)', phone: '628123000001', notes: 'Pengalungan melati oleh Ibunda Sarah kepada Rizky, serah terima simbolis seserahan.' },
    { id: 'rd-4', time: '08:30 - 09:30', title: 'Prosesi Sakral Ijab Qabul / Akad Nikah & Mahar', pic: 'Petugas Penghulu KUA & Saksi', phone: '6281299887766', notes: 'Penyerahan mahar emas dan penyematan cincin kawin, foto buku nikah.' },
    { id: 'rd-5', time: '09:30 - 10:15', title: 'Prosesi Sungkeman kepada Orang Tua & Doa Bersama', pic: 'Kak Dania (WO)', phone: '6281299887766', notes: 'Suasana hening & musik instrumental syahdu.' },
    { id: 'rd-6', time: '10:15 - 11:00', title: 'Sesi Foto Formal Keluarga Inti & Ramah Tamah Tertutup', pic: 'Mas Aldi (Foto Lead)', phone: '6281789012345', notes: 'Keluarga inti kedua belah pihak di area pelaminan.' },
    { id: 'rd-7', time: '11:00 - 11:30', title: 'Retouch Makeup, Ganti Gaun Resepsi & Break Makan', pic: 'Mbak Cindy (MUA)', phone: '6281567890123', notes: 'Pengantin minum dan touch up lipstik/busana resepsi.' },
    { id: 'rd-8', time: '11:30 - 14:00', title: 'Kirab Pengantin, Grand Resepsi & Jamuan Tamu Prasmanan', pic: 'Kak Dania (WO) & MC', phone: '6281299887766', notes: 'Opening dance singkat, ucapan selamat para tamu, live acoustic music.' },
    { id: 'rd-9', time: '13:30 - 13:45', title: 'Sesi Lempar Buket Bunga (Wedding Bouquet Toss)', pic: 'MC Acara', phone: '6281299887766', notes: 'Dihadiri para sahabat pengantin yang belum menikah.' },
    { id: 'rd-10', time: '14:00 - 15:00', title: 'Closing Resepsi, Sayonara & Serah Terima Kotak Amplop', pic: 'Bpk. Gunawan (Keluarga)', phone: '628123000003', notes: 'Pemberesan barang bawaan dan serah terima kotak kado ke kamar keluarga.' }
  ],
  emergencyContacts: [
    { role: 'Koordinator Utama WO', name: 'Kak Dania Maharani', phone: '6281299887766' },
    { role: 'Penanggung Jawab Keluarga Pria', name: 'Bpk. Ir. H. Bambang', phone: '628123000001' },
    { role: 'Penanggung Jawab Keluarga Wanita', name: 'Bpk. Gunawan Soedirjo', phone: '628123000003' },
    { role: 'Koordinator Transport & Logistik', name: 'Rangga Prawira', phone: '628123000005' },
    { role: 'PIC Venue & Keamanan Plataran', name: 'Bpk. Hendra Wijaya', phone: '6281234567890' }
  ],
  seserahan: [
    {
      id: 'ses-1',
      kotakNumber: 1,
      title: 'Perlengkapan Ibadah (Mukena Sutra & Al-Qur\'an Emas)',
      category: 'Perlengkapan Ibadah',
      penerima: 'Mempelai Wanita',
      items: 'Mukena Silk Zara Blush, Sajadah Turki Beludru Lembut, Al-Qur\'an Cover Gold Tajwid, Tasbih Kristal Swarovski',
      budget: 1500000,
      actual: 1450000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'siap',
      pic: 'Kak Dimas (Keluarga Pria)',
      notes: 'Kotak akrilik hexagonal 35cm, pita champagne gold, bunga mawar blush segar'
    },
    {
      id: 'ses-2',
      kotakNumber: 2,
      title: 'Skincare & Kosmetik Treatment Set',
      category: 'Skincare & Kosmetik',
      penerima: 'Mempelai Wanita',
      items: 'Estée Lauder Advanced Night Repair, SK-II Facial Treatment Essence, Dior Lip Glow Oil, Foundation & Powder Glow',
      budget: 3500000,
      actual: 3200000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'siap',
      pic: 'Rangga Prawira (Bestman)',
      notes: 'Bantalan beludru nude, penataan bertingkat dengan aksen pearl'
    },
    {
      id: 'ses-3',
      kotakNumber: 3,
      title: 'Set Busana & Kain Songket Adat',
      category: 'Busana & Kain Adat',
      penerima: 'Mempelai Wanita',
      items: 'Kain Songket Palembang Asli Tenun Emas, Bahan Kebaya Silk Brokat Prancis Warna Rose Gold',
      budget: 2500000,
      actual: 2600000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'sedang_dihias',
      pic: 'Tante Dewi (Keluarga)',
      notes: 'Lipatan motif merak / kipas tradisional, aksen bros tembaga emas'
    },
    {
      id: 'ses-4',
      kotakNumber: 4,
      title: 'Tas Mewah & Sepatu Wedding Heels',
      category: 'Tas & Sepatu',
      penerima: 'Mempelai Wanita',
      items: 'Charles & Keith Luxury Shoulder Bag Cream, Sepatu Wedding Heels Mutiara 7cm',
      budget: 2800000,
      actual: 2750000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'siap',
      pic: 'Mas Aldi (Keluarga)',
      notes: 'Kotak akrilik transparan tebal 3mm, tatakan satin champagne'
    },
    {
      id: 'ses-5',
      kotakNumber: 5,
      title: 'Set Perhiasan Kalung & Gelang Emas',
      category: 'Perhiasan & Emas',
      penerima: 'Mempelai Wanita',
      items: 'Kalung Emas Putih 75% Liontin Berlian Solitaire, Gelang Rantai Bangle Emas',
      budget: 5000000,
      actual: 5200000,
      jasaHias: 200000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'siap',
      pic: 'Ibunda Rizky (Simbolis Serah Terima)',
      notes: 'Kotak beludru marun mewah, kunci pengaman gembok kecil'
    },
    {
      id: 'ses-6',
      kotakNumber: 6,
      title: 'Luxury Perfume & Body Care Glow',
      category: 'Parfum & Body Care',
      penerima: 'Mempelai Wanita',
      items: 'Jo Malone Peony & Blush Suede Cologne 100ml, L\'Occitane Almond Shower Oil & Rich Body Cream',
      budget: 2200000,
      actual: 2100000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'sedang_dihias',
      pic: 'Anisa Larasati (Bridesmaid)',
      notes: 'Hiasan pita organza, dried flowers gypsophila & baby breath'
    },
    {
      id: 'ses-7',
      kotakNumber: 7,
      title: 'Aneka Kue Tradisional & Buah Segar',
      category: 'Kue Tradisional & Buah',
      penerima: 'Mempelai Wanita',
      items: 'Lapis Legit Wisman Prunes, Jadah & Wajik Manis Ketan Simbolis, Anggur Muscat & Apel Fuji',
      budget: 800000,
      actual: 750000,
      jasaHias: 100000,
      vendorHias: 'Dapur Seserahan Puspa',
      status: 'belum_dibeli',
      pic: 'Bpk. Bambang (Keluarga)',
      notes: 'Dipesan H-1 subuh dari dapur kue agar tetap fresh & wangi saat penyerahan'
    },
    {
      id: 'ses-8',
      kotakNumber: 8,
      title: 'Seserahan Balasan untuk Mempelai Pria',
      category: 'Seserahan Balasan Pria',
      penerima: 'Mempelai Pria',
      items: 'Jam Tangan Fossil Leather Chronograph, Dompet Kulit Braun Buffel, Parfum Bleu de Chanel, Kemeja Batik Tulis Sutra Halus',
      budget: 4500000,
      actual: 4300000,
      jasaHias: 150000,
      vendorHias: 'Rosewood Seserahan Studio',
      status: 'siap',
      pic: 'Clarissa (Keluarga Wanita)',
      notes: 'Kotak nuansa midnight blue & gold foil, pita satin navy bronze'
    }
  ]
};

const CLEAN_STARTER_TASKS = [
  { id: 't-1', phase: 'h12', title: 'Tentukan tanggal pernikahan & estimasi total anggaran', completed: false, note: 'Rembuk bersama kedua keluarga inti' },
  { id: 't-2', phase: 'h12', title: 'Survei & booking lokasi / gedung pernikahan (Venue)', completed: false, note: 'Amankan tanggal sebelum penuh' },
  { id: 't-3', phase: 'h6', title: 'Pilih & DP vendor Katering dan Dekorasi pelaminan', completed: false, note: 'Lakukan food testing' },
  { id: 't-4', phase: 'h6', title: 'Booking MUA (Tata Rias Pengantin) & Busana Akad/Resepsi', completed: false, note: 'Jadwalkan test makeup & fitting' },
  { id: 't-5', phase: 'h6', title: 'Pilih vendor Dokumentasi (Foto & Video Cinematic)', completed: false, note: 'Termasuk paket prewedding jika ada' },
  { id: 't-6', phase: 'h3', title: 'Urus berkas pendaftaran nikah ke KUA / Catatan Sipil', completed: false, note: 'Siapkan pengantar kelurahan N1-N4' },
  { id: 't-7', phase: 'h3', title: 'Susun rincian daftar tamu undangan & pesanan souvenir', completed: false, note: 'Hitung estimasi pax katering' },
  { id: 't-8', phase: 'h3', title: 'Siapkan kotak seserahan & hantaran pengantin', completed: false, note: 'Cicil belanja barang & booking jasa hias' },
  { id: 't-9', phase: 'h1m', title: 'Distribusi undangan cetak & sebar undangan digital', completed: false, note: 'Pantau konfirmasi RSVP tamu' },
  { id: 't-10', phase: 'h1m', title: 'Fitting baju pengantin tahap akhir & gladi busana', completed: false, note: 'Pastikan busana nyaman dipakai' },
  { id: 't-11', phase: 'h1w', title: 'Technical meeting & gladi resik bersama WO dan panitia', completed: false, note: 'Finalisasi rundown menit per menit' },
  { id: 't-12', phase: 'h0', title: 'Hari Bahagia: Prosesi akad nikah / pemberkatan & resepsi', completed: false, note: 'Momen sakral & berkah' }
];

class WeddingStore {
  constructor() {
    this.storageKey = 'eternal_bliss_wedding_state_v1';
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        
        return {
          profile: { ...DEFAULT_STATE.profile, ...(parsed.profile || {}) },
          expenses: Array.isArray(parsed.expenses) ? parsed.expenses : DEFAULT_STATE.expenses,
          tasks: Array.isArray(parsed.tasks) ? parsed.tasks : DEFAULT_STATE.tasks,
          vendors: Array.isArray(parsed.vendors) ? parsed.vendors : DEFAULT_STATE.vendors,
          vendorComparisons: Array.isArray(parsed.vendorComparisons) ? parsed.vendorComparisons : DEFAULT_STATE.vendorComparisons,
          guests: Array.isArray(parsed.guests) ? parsed.guests : DEFAULT_STATE.guests,
          rundowns: Array.isArray(parsed.rundowns) ? parsed.rundowns : DEFAULT_STATE.rundowns,
          emergencyContacts: Array.isArray(parsed.emergencyContacts) ? parsed.emergencyContacts : DEFAULT_STATE.emergencyContacts,
          seserahan: Array.isArray(parsed.seserahan) ? parsed.seserahan : DEFAULT_STATE.seserahan
        };
      }
    } catch (e) {
      console.warn('Error loading state from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      this.notifyListeners();
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.state));
  }

  resetToDefault() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.saveState();
  }

  resetToCleanSlate(customProfile = {}, keepStarterChecklist = true) {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 180);
    const dateStr = defaultDate.toISOString().split('T')[0];

    const bride = (customProfile.brideName || '').trim();
    const groom = (customProfile.groomName || '').trim();
    let title = 'Pernikahan Impian';
    if (bride && groom) {
      title = `${bride} & ${groom}`;
    } else if (bride || groom) {
      title = `Pernikahan ${bride || groom}`;
    }

    this.state = {
      profile: {
        brideName: bride || 'Mempelai Wanita',
        groomName: groom || 'Mempelai Pria',
        coupleTitle: title,
        weddingDate: customProfile.weddingDate || dateStr,
        weddingVenue: customProfile.weddingVenue || 'Belum Ditentukan',
        weddingCity: customProfile.weddingCity || 'Jakarta',
        totalBudget: Number(customProfile.totalBudget) || 0,
        photo: customProfile.photo || 'assets/wedding_rings.jpg'
      },
      expenses: [],
      tasks: keepStarterChecklist ? JSON.parse(JSON.stringify(CLEAN_STARTER_TASKS)) : [],
      vendors: [],
      vendorComparisons: [],
      guests: [],
      rundowns: [],
      emergencyContacts: [],
      seserahan: []
    };
    this.saveState();
  }

  exportJson() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const dlAnchor = document.createElement('a');
    const safeName = (this.state.profile.coupleTitle || 'EternalBliss').replace(/\s+/g, '_');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `EternalBliss_${safeName}_Backup.json`);
    dlAnchor.click();
  }

  importJson(jsonData) {
    try {
      const parsed = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      if (!parsed.profile && !parsed.expenses) {
        throw new Error('Format file JSON tidak sesuai dengan skema EternalBliss');
      }
      this.state = {
        profile: { ...DEFAULT_STATE.profile, ...(parsed.profile || {}) },
        expenses: parsed.expenses || [],
        tasks: parsed.tasks || [],
        vendors: parsed.vendors || [],
        vendorComparisons: parsed.vendorComparisons || DEFAULT_STATE.vendorComparisons,
        guests: parsed.guests || [],
        rundowns: parsed.rundowns || [],
        emergencyContacts: parsed.emergencyContacts || DEFAULT_STATE.emergencyContacts,
        seserahan: parsed.seserahan || DEFAULT_STATE.seserahan
      };
      this.saveState();
      return true;
    } catch (err) {
      console.error('Import error:', err);
      return false;
    }
  }

  updateProfile(profileData) {
    this.state.profile = { ...this.state.profile, ...profileData };
    this.saveState();
  }

  addExpense(item) {
    item.id = 'exp-' + Date.now();
    this.state.expenses.unshift(item);
    this.saveState();
  }

  updateExpense(id, updated) {
    const idx = this.state.expenses.findIndex(e => e.id === id);
    if (idx !== -1) {
      this.state.expenses[idx] = { ...this.state.expenses[idx], ...updated };
      this.saveState();
    }
  }

  deleteExpense(id) {
    this.state.expenses = this.state.expenses.filter(e => e.id !== id);
    this.saveState();
  }

  toggleTask(id) {
    const task = this.state.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveState();
    }
  }

  addTask(task) {
    task.id = 't-' + Date.now();
    this.state.tasks.push(task);
    this.saveState();
  }

  deleteTask(id) {
    this.state.tasks = this.state.tasks.filter(t => t.id !== id);
    this.saveState();
  }

  addVendor(vendor) {
    vendor.id = 'v-' + Date.now();
    this.state.vendors.push(vendor);
    this.saveState();
  }

  updateVendor(id, updated) {
    const idx = this.state.vendors.findIndex(v => v.id === id);
    if (idx !== -1) {
      this.state.vendors[idx] = { ...this.state.vendors[idx], ...updated };
      this.saveState();
    }
  }

  deleteVendor(id) {
    this.state.vendors = this.state.vendors.filter(v => v.id !== id);
    this.saveState();
  }

  addGuest(guest) {
    guest.id = 'g-' + Date.now();
    this.state.guests.push(guest);
    this.saveState();
  }

  updateGuest(id, updated) {
    const idx = this.state.guests.findIndex(g => g.id === id);
    if (idx !== -1) {
      this.state.guests[idx] = { ...this.state.guests[idx], ...updated };
      this.saveState();
    }
  }

  deleteGuest(id) {
    this.state.guests = this.state.guests.filter(g => g.id !== id);
    this.saveState();
  }

  addRundown(item) {
    item.id = 'rd-' + Date.now();
    this.state.rundowns.push(item);
    this.saveState();
  }

  updateRundown(id, updated) {
    const idx = this.state.rundowns.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.state.rundowns[idx] = { ...this.state.rundowns[idx], ...updated };
      this.saveState();
    }
  }

  deleteRundown(id) {
    this.state.rundowns = this.state.rundowns.filter(r => r.id !== id);
    this.saveState();
  }

  addSeserahan(item) {
    item.id = 'ses-' + Date.now();
    if (!item.kotakNumber) {
      item.kotakNumber = (this.state.seserahan?.length || 0) + 1;
    }
    if (!this.state.seserahan) this.state.seserahan = [];
    this.state.seserahan.push(item);
    this.saveState();
  }

  updateSeserahan(id, updated) {
    if (!this.state.seserahan) return;
    const idx = this.state.seserahan.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.state.seserahan[idx] = { ...this.state.seserahan[idx], ...updated };
      this.saveState();
    }
  }

  deleteSeserahan(id) {
    if (!this.state.seserahan) return;
    this.state.seserahan = this.state.seserahan.filter(s => s.id !== id);
    this.saveState();
  }

  cycleSeserahanStatus(id) {
    if (!this.state.seserahan) return;
    const item = this.state.seserahan.find(s => s.id === id);
    if (!item) return;
    const cycle = ['belum_dibeli', 'sudah_dibeli', 'sedang_dihias', 'siap'];
    const curIdx = cycle.indexOf(item.status);
    const nextIdx = (curIdx + 1) % cycle.length;
    item.status = cycle[nextIdx];
    this.saveState();
  }
}

const store = new WeddingStore();

function formatRupiah(num) {
  if (isNaN(num)) return 'Rp 0';
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function showToast(message, icon = 'check-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-5 h-5 text-amber-300 flex-shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function updateCountdown() {
  const weddingDateStr = store.state.profile.weddingDate;
  if (!weddingDateStr) return;

  const targetDate = new Date(weddingDateStr).getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  const daysElem = document.getElementById('countdown-days');
  const hoursElem = document.getElementById('countdown-hours');
  const minsElem = document.getElementById('countdown-minutes');
  const secsElem = document.getElementById('countdown-seconds');

  if (diff <= 0) {
    if (daysElem) daysElem.textContent = '0';
    if (hoursElem) hoursElem.textContent = '0';
    if (minsElem) minsElem.textContent = '0';
    if (secsElem) secsElem.textContent = '0';
    const tag = document.getElementById('countdown-tag');
    if (tag) tag.textContent = 'HARI BAHAGIA TELAH TIBA! ✨';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (daysElem) daysElem.textContent = days;
  if (hoursElem) hoursElem.textContent = hours;
  if (minsElem) minsElem.textContent = minutes;
  if (secsElem) secsElem.textContent = seconds;
}

function switchTab(tabId) {
  const views = document.querySelectorAll('.tab-view');
  views.forEach(v => v.classList.remove('active'));

  const target = document.getElementById(`view-${tabId}`);
  if (target) {
    target.classList.add('active');
  }

  const links = document.querySelectorAll('.tab-link');
  links.forEach(l => {
    if (l.dataset.tab === tabId) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function renderDashboard() {
  const { profile, tasks, expenses, guests } = store.state;

  const greetingEl = document.getElementById('dash-couple-greeting');
  if (greetingEl) {
    greetingEl.textContent = `Hi, ${profile.coupleTitle || (profile.brideName + ' & ' + profile.groomName)}`;
  }

  const avatarEl = document.getElementById('dash-couple-avatar');
  if (avatarEl) {
    avatarEl.src = profile.photo || 'assets/wedding_rings.jpg';
  }

  const moreAvatarEl = document.getElementById('more-couple-avatar');
  if (moreAvatarEl) {
    moreAvatarEl.src = profile.photo || 'assets/wedding_rings.jpg';
  }

  const footerSig = document.getElementById('footer-couple-signature');
  if (footerSig) {
    footerSig.textContent = `Designed with Love for ${profile.coupleTitle || (profile.brideName + ' & ' + profile.groomName)}`;
  }

  const venueEl = document.getElementById('dash-venue-text');
  if (venueEl) {
    const d = new Date(profile.weddingDate);
    const dateFormatted = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    venueEl.textContent = `${dateFormatted} • ${profile.weddingVenue}`;
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const taskPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const taskPercentEl = document.getElementById('dash-task-percent');
  if (taskPercentEl) taskPercentEl.textContent = `${taskPercent}%`;

  const taskCountEl = document.getElementById('dash-task-count');
  if (taskCountEl) taskCountEl.textContent = `${completedTasks} dari ${totalTasks} tugas selesai`;

  const circleProgress = document.getElementById('dash-circle-progress');
  if (circleProgress) {
    const circumference = 2 * Math.PI * 34; 
    const offset = circumference - (taskPercent / 100) * circumference;
    circleProgress.style.strokeDashoffset = offset;
  }

  const totalBudget = Number(profile.totalBudget) || 0;
  const totalRealSpent = expenses.reduce((acc, curr) => acc + (Number(curr.real) || 0), 0);
  const remainingBudget = totalBudget - totalRealSpent;
  const budgetSpentPercent = totalBudget > 0 ? Math.min(100, Math.round((totalRealSpent / totalBudget) * 100)) : 0;

  const remainingBudgetEl = document.getElementById('dash-remaining-budget');
  if (remainingBudgetEl) {
    remainingBudgetEl.textContent = formatRupiah(remainingBudget);
    if (remainingBudget < 0) {
      remainingBudgetEl.classList.add('text-red-600');
    } else {
      remainingBudgetEl.classList.remove('text-red-600');
    }
  }

  const totalBudgetEl = document.getElementById('dash-total-budget');
  if (totalBudgetEl) totalBudgetEl.textContent = formatRupiah(totalBudget);

  const budgetBar = document.getElementById('dash-budget-bar');
  if (budgetBar) {
    budgetBar.style.width = `${budgetSpentPercent}%`;
    if (remainingBudget < 0) {
      budgetBar.className = 'h-full bg-red-500 rounded-full transition-all duration-500';
    } else {
      budgetBar.className = 'h-full bg-gradient-to-r from-amber-600 to-[#874E4A] rounded-full transition-all duration-500';
    }
  }

  const rsvpConfirmed = guests.filter(g => g.rsvp === 'Hadir').reduce((acc, g) => acc + (Number(g.pax) || 1), 0);
  const rsvpDoubt = guests.filter(g => g.rsvp === 'Ragu-ragu').reduce((acc, g) => acc + (Number(g.pax) || 1), 0);
  const rsvpPending = guests.filter(g => g.rsvp === 'Belum Konfirmasi').reduce((acc, g) => acc + (Number(g.pax) || 1), 0);
  const rsvpDeclined = guests.filter(g => g.rsvp === 'Berhalangan').reduce((acc, g) => acc + (Number(g.pax) || 1), 0);

  const rsvpConfirmedEl = document.getElementById('dash-rsvp-confirmed');
  if (rsvpConfirmedEl) rsvpConfirmedEl.textContent = `${rsvpConfirmed} Pax`;

  const rsvpDoubtEl = document.getElementById('dash-rsvp-doubt');
  if (rsvpDoubtEl) rsvpDoubtEl.textContent = `${rsvpDoubt} Pax`;

  const rsvpPendingEl = document.getElementById('dash-rsvp-pending');
  if (rsvpPendingEl) rsvpPendingEl.textContent = `${rsvpPending} Pax`;

  const cateringPortionEl = document.getElementById('dash-catering-portion');
  if (cateringPortionEl) {
    const estPorsi = Math.round(rsvpConfirmed * 1.25);
    cateringPortionEl.textContent = `${estPorsi} Porsi (Buffer 25%)`;
  }

  const expenseListEl = document.getElementById('dash-expense-list');
  if (expenseListEl) {
    const previewItems = expenses.slice(0, 4);
    if (previewItems.length === 0) {
      expenseListEl.innerHTML = `
        <div class="glass-card rounded-2xl p-4 text-center border border-dashed border-[#E8C5C8] text-xs text-[#7D5F56] space-y-2">
          <p class="font-semibold text-[#3E2723]">Belum ada pos pengeluaran</p>
          <p class="text-[11px] text-stone-500">Mulai catat anggaran katering, venue, MUA, dan kebutuhan lainnya.</p>
          <button onclick="openAddExpenseModal()" class="px-3.5 py-1.5 rounded-xl bg-[#FAF0E8] text-[#874E4A] font-semibold hover:bg-[#E8C5C8]/50 transition-colors inline-flex items-center gap-1.5 text-xs">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Tambah Pos Pengeluaran
          </button>
        </div>
      `;
    } else {
      expenseListEl.innerHTML = previewItems.map(item => {
        let icon = 'sparkles';
        if (item.name.toLowerCase().includes('katering')) icon = 'utensils';
        else if (item.name.toLowerCase().includes('venue') || item.name.toLowerCase().includes('gedung')) icon = 'landmark';
        else if (item.name.toLowerCase().includes('mua') || item.name.toLowerCase().includes('busana')) icon = 'sparkle';
        else if (item.name.toLowerCase().includes('souvenir') || item.name.toLowerCase().includes('hantaran')) icon = 'gift';
        else if (item.name.toLowerCase().includes('foto') || item.name.toLowerCase().includes('dokumentasi')) icon = 'camera';

        let badgeClass = 'badge-belum';
        let badgeLabel = item.status || 'Belum Bayar';
        if (item.status === 'Lunas') badgeClass = 'badge-lunas';
        else if (item.status === 'DP') {
          badgeClass = 'badge-dp';
          const dpPercent = item.real > 0 ? Math.round((item.dp / item.real) * 100) : 50;
          badgeLabel = `DP ${dpPercent}%`;
        }

        const percentOfTotal = totalRealSpent > 0 ? Math.round((item.real / totalRealSpent) * 100) : 0;

        return `
          <div class="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-subtle hover:border-[#C5A059] transition-all">
            <div class="w-11 h-11 rounded-2xl bg-[#FAF0E8] flex items-center justify-center text-[#874E4A] flex-shrink-0">
              <i data-lucide="${icon}" class="w-5 h-5"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="text-sm font-semibold text-[#3E2723] truncate">${item.name}</h4>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeClass}">${badgeLabel}</span>
              </div>
              <div class="flex items-center justify-between text-xs text-[#7D5F56] mb-1.5">
                <span>${formatRupiah(item.real)}</span>
                <span class="font-medium text-[#874E4A]">${percentOfTotal}%</span>
              </div>
              <div class="w-full bg-[#FAF0E8] h-1.5 rounded-full overflow-hidden">
                <div class="bg-[#B97B74] h-full rounded-full" style="width: ${percentOfTotal}%"></div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const seserahanList = store.state.seserahan || [];
  const totalSeserahan = seserahanList.length;
  const readySeserahan = seserahanList.filter(s => s.status === 'siap').length;
  const progressSeserahan = seserahanList.filter(s => s.status === 'sedang_dihias' || s.status === 'sudah_dibeli').length;
  const readyPercent = totalSeserahan > 0 ? Math.round((readySeserahan / totalSeserahan) * 100) : 0;

  const sesTotalEl = document.getElementById('dash-seserahan-total');
  if (sesTotalEl) sesTotalEl.textContent = `${totalSeserahan} Kotak`;
  const sesReadyEl = document.getElementById('dash-seserahan-ready');
  if (sesReadyEl) sesReadyEl.textContent = `${readySeserahan} Kotak`;
  const sesProgEl = document.getElementById('dash-seserahan-progress');
  if (sesProgEl) sesProgEl.textContent = `${progressSeserahan} Kotak`;
  const sesBarEl = document.getElementById('dash-seserahan-bar');
  if (sesBarEl) sesBarEl.style.width = `${readyPercent}%`;
}

function renderBudget() {
  const { profile, expenses } = store.state;
  const totalBudget = Number(profile.totalBudget) || 0;
  const totalReal = expenses.reduce((a, b) => a + (Number(b.real) || 0), 0);
  const totalEst = expenses.reduce((a, b) => a + (Number(b.est) || 0), 0);
  const totalDp = expenses.reduce((a, b) => a + (Number(b.dp) || 0), 0);
  const totalSisaPelunasan = totalReal - totalDp;
  const sisaAnggaran = totalBudget - totalReal;

  document.getElementById('budget-total-max').textContent = formatRupiah(totalBudget);
  document.getElementById('budget-total-real').textContent = formatRupiah(totalReal);
  document.getElementById('budget-total-est').textContent = formatRupiah(totalEst);
  document.getElementById('budget-total-dp').textContent = formatRupiah(totalDp);
  document.getElementById('budget-total-unpaid').textContent = formatRupiah(totalSisaPelunasan);

  const sisaAnggaranEl = document.getElementById('budget-remaining');
  sisaAnggaranEl.textContent = formatRupiah(sisaAnggaran);

  const overbudgetBanner = document.getElementById('overbudget-banner');
  if (sisaAnggaran < 0) {
    overbudgetBanner.classList.remove('hidden');
    document.getElementById('overbudget-amount').textContent = formatRupiah(Math.abs(sisaAnggaran));
    sisaAnggaranEl.classList.add('text-red-600');
  } else {
    overbudgetBanner.classList.add('hidden');
    sisaAnggaranEl.classList.remove('text-red-600');
  }

  const activeCategory = window.currentBudgetCategory || 'all';

  const filtered = activeCategory === 'all' ? expenses : expenses.filter(e => e.category === activeCategory);
  const tbody = document.getElementById('budget-table-body');
  if (tbody) {
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-sm text-[#7D5F56]">Belum ada data pengeluaran dalam kategori ini.</td></tr>`;
    } else {
      tbody.innerHTML = filtered.map(item => {
        let badge = 'badge-belum';
        if (item.status === 'Lunas') badge = 'badge-lunas';
        else if (item.status === 'DP') badge = 'badge-dp';

        const sisaPelunasan = Math.max(0, (item.real || 0) - (item.dp || 0));

        let categoryBadge = 'Vendor Utama';
        if (item.category === 'bawaan') categoryBadge = 'Barang Bawaan';
        else if (item.category === 'operasional') categoryBadge = 'Operasional';

        return `
          <tr class="border-b border-[#F5E8E2] hover:bg-[#FAF4F0]/60 transition-colors">
            <td class="py-3 px-3">
              <div class="font-medium text-[#3E2723] text-sm">${item.name}</div>
              <span class="inline-block text-[10px] uppercase font-bold tracking-wider text-[#A4645F] bg-[#FAF0E8] px-2 py-0.5 rounded-md mt-0.5">${categoryBadge}</span>
            </td>
            <td class="py-3 px-3 text-xs text-[#7D5F56]">${formatRupiah(item.est)}</td>
            <td class="py-3 px-3 text-xs font-semibold text-[#3E2723]">${formatRupiah(item.real)}</td>
            <td class="py-3 px-3 text-xs text-[#2A6E3B] font-medium">${formatRupiah(item.dp)}</td>
            <td class="py-3 px-3 text-xs text-[#B57900] font-medium">${formatRupiah(sisaPelunasan)}</td>
            <td class="py-3 px-3">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${badge}">${item.status}</span>
            </td>
            <td class="py-3 px-3 text-right">
              <div class="flex items-center justify-end gap-1.5">
                <button onclick="openEditExpenseModal('${item.id}')" class="p-1.5 text-[#7D5F56] hover:text-[#5A3E36] hover:bg-[#F3E4DC] rounded-lg transition-colors" title="Edit">
                  <i data-lucide="edit-2" class="w-4 h-4"></i>
                </button>
                <button onclick="deleteExpenseItem('${item.id}')" class="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const cardListEl = document.getElementById('budget-mobile-cards');
  if (cardListEl) {
    if (filtered.length === 0) {
      cardListEl.innerHTML = `<p class="text-center text-sm text-[#7D5F56] py-6">Belum ada pengeluaran.</p>`;
    } else {
      cardListEl.innerHTML = filtered.map(item => {
        let badge = 'badge-belum';
        if (item.status === 'Lunas') badge = 'badge-lunas';
        else if (item.status === 'DP') badge = 'badge-dp';

        const sisaPelunasan = Math.max(0, (item.real || 0) - (item.dp || 0));

        return `
          <div class="glass-card rounded-2xl p-4 shadow-subtle border border-[#F1DFDA] space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h4 class="font-semibold text-sm text-[#3E2723]">${item.name}</h4>
                <p class="text-[11px] text-[#A4645F] font-medium uppercase tracking-wider">${item.category === 'vendor' ? 'Vendor Utama' : item.category === 'bawaan' ? 'Barang Bawaan' : 'Operasional'}</p>
              </div>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${badge}">${item.status}</span>
            </div>
            
            <div class="grid grid-cols-2 gap-2 text-xs bg-[#FAF2EC] p-2.5 rounded-xl">
              <div>
                <span class="text-[10px] text-[#7D5F56] block">Biaya Riil:</span>
                <span class="font-semibold text-[#3E2723]">${formatRupiah(item.real)}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#7D5F56] block">Estimasi Awal:</span>
                <span class="text-[#7D5F56]">${formatRupiah(item.est)}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#7D5F56] block">DP Dibayar:</span>
                <span class="text-[#2A6E3B] font-medium">${formatRupiah(item.dp)}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#7D5F56] block">Sisa Pelunasan:</span>
                <span class="text-[#B57900] font-semibold">${formatRupiah(sisaPelunasan)}</span>
              </div>
            </div>

            ${item.notes ? `<p class="text-xs text-[#7D5F56] italic">"${item.notes}"</p>` : ''}

            <div class="flex justify-end gap-2 pt-1 border-t border-[#F5E8E2]">
              <button onclick="openEditExpenseModal('${item.id}')" class="text-xs px-2.5 py-1 text-[#5A3E36] bg-[#F3E4DC] hover:bg-[#E8C5C8] rounded-lg transition-colors flex items-center gap-1">
                <i data-lucide="edit-2" class="w-3 h-3"></i> Edit
              </button>
              <button onclick="deleteExpenseItem('${item.id}')" class="text-xs px-2.5 py-1 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex items-center gap-1">
                <i data-lucide="trash-2" class="w-3 h-3"></i> Hapus
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function renderTimeline() {
  const { tasks } = store.state;
  const activePhase = window.currentTimelinePhase || 'all';
  const activeStatus = window.currentTimelineStatus || 'all';

  let filtered = tasks;
  if (activePhase !== 'all') {
    filtered = filtered.filter(t => t.phase === activePhase);
  }
  if (activeStatus === 'done') {
    filtered = filtered.filter(t => t.completed);
  } else if (activeStatus === 'pending') {
    filtered = filtered.filter(t => !t.completed);
  }

  const phasesMap = {
    'h12': 'H-12 Bulan',
    'h6': 'H-6 Bulan',
    'h3': 'H-3 Bulan',
    'h1m': 'H-1 Bulan',
    'h1w': 'H-1 Minggu',
    'h0': 'Hari H'
  };

  const container = document.getElementById('timeline-tasks-container');
  if (container) {
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 bg-white/60 rounded-3xl p-6 border border-[#F1DFDA]">
          <i data-lucide="check-check" class="w-10 h-10 mx-auto text-[#C5A059] mb-2 opacity-50"></i>
          <p class="text-sm text-[#7D5F56]">Tidak ada checklist tugas dalam filter ini.</p>
        </div>
      `;
    } else {
      
      const groups = {};
      filtered.forEach(task => {
        if (!groups[task.phase]) groups[task.phase] = [];
        groups[task.phase].push(task);
      });

      let html = '';
      for (const [phaseKey, phaseName] of Object.entries(phasesMap)) {
        if (groups[phaseKey] && groups[phaseKey].length > 0) {
          html += `
            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#C5A059] ring-4 ring-[#C5A059]/20"></span>
                <h3 class="font-serif font-semibold text-sm text-[#5A3E36] tracking-wide">${phaseName}</h3>
              </div>
              <div class="space-y-2 pl-4 border-l-2 border-[#E8C5C8]/60 ml-1">
                ${groups[phaseKey].map(task => `
                  <div class="glass-card rounded-2xl p-3.5 flex items-start gap-3 shadow-subtle hover:border-[#C5A059] transition-all">
                    <input 
                      type="checkbox" 
                      class="custom-checkbox mt-0.5 flex-shrink-0" 
                      ${task.completed ? 'checked' : ''} 
                      onchange="toggleTaskCheck('${task.id}')"
                    >
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium ${task.completed ? 'line-through text-[#9C8178]' : 'text-[#3E2723]'} transition-colors">
                        ${task.title}
                      </p>
                      ${task.note ? `<p class="text-xs text-[#7D5F56] mt-0.5">${task.note}</p>` : ''}
                    </div>
                    <button onclick="deleteTaskItem('${task.id}')" class="text-[#B97B74] hover:text-red-700 p-1 opacity-70 hover:opacity-100 transition-opacity" title="Hapus Tugas">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }
      }
      container.innerHTML = html;
    }
  }

  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  
  const progText = document.getElementById('timeline-summary-text');
  if (progText) progText.textContent = `${done} dari ${total} tugas terselesaikan (${pct}%)`;

  const progBar = document.getElementById('timeline-summary-bar');
  if (progBar) progBar.style.width = `${pct}%`;
}

function renderVendors() {
  const { vendors, vendorComparisons, profile } = store.state;
  const container = document.getElementById('vendor-list-container');
  if (container) {
    if (vendors.length === 0) {
      container.innerHTML = `<p class="text-center py-8 text-sm text-[#7D5F56]">Belum ada data vendor yang dicatat.</p>`;
    } else {
      container.innerHTML = vendors.map(v => {
        let badge = 'badge-mencari';
        if (v.status === 'Booked') badge = 'badge-dp';
        else if (v.status === 'Lunas') badge = 'badge-lunas';

        const sisaPelunasan = Math.max(0, (v.contract || 0) - (v.dp || 0));

        const cleanPhone = (v.phone || '').replace(/\D/g, '');
        const brideNames = profile.coupleTitle || 'Sarah & Rizky';
        const waMessage = encodeURIComponent(
          `Halo ${v.pic || 'Kak'} (${v.name}), salam hangat dari ${brideNames}. Kami ingin berkonsultasi mengenai kelanjutan persiapan pernikahan kami. Mohon infonya ya, terima kasih!`
        );
        const waUrl = cleanPhone ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${waMessage}` : '#';

        return `
          <div class="glass-card rounded-2xl p-4 shadow-subtle border border-[#F1DFDA] space-y-3 hover:border-[#C5A059] transition-all">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] uppercase font-bold tracking-wider text-[#A4645F] bg-[#FAF0E8] px-2 py-0.5 rounded-md">${v.category}</span>
                <h3 class="font-serif font-bold text-base text-[#3E2723] mt-1">${v.name}</h3>
                <p class="text-xs text-[#7D5F56] flex items-center gap-1 mt-0.5">
                  <i data-lucide="user" class="w-3.5 h-3.5 text-[#C5A059]"></i> PIC: ${v.pic || '-'}
                </p>
              </div>
              <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${badge}">${v.status}</span>
            </div>

            <div class="grid grid-cols-3 gap-2 bg-[#FAF2EC] p-2.5 rounded-xl text-center text-xs">
              <div>
                <span class="text-[10px] text-[#7D5F56] block">Kontrak</span>
                <span class="font-bold text-[#3E2723]">${formatRupiah(v.contract)}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#7D5F56] block">DP Masuk</span>
                <span class="font-bold text-[#2A6E3B]">${formatRupiah(v.dp)}</span>
              </div>
              <div>
                <span class="text-[10px] text-[#7D5F56] block">Sisa Bayar</span>
                <span class="font-bold text-[#B57900]">${formatRupiah(sisaPelunasan)}</span>
              </div>
            </div>

            ${v.notes ? `
              <div class="text-xs text-[#5A3E36] bg-white/70 p-2.5 rounded-xl border border-[#F5E8E2]">
                <strong class="text-[11px] text-[#A4645F]">Catatan:</strong> ${v.notes}
              </div>
            ` : ''}

            <div class="flex items-center justify-between pt-2 border-t border-[#F5E8E2]">
              ${cleanPhone ? `
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors shadow-sm">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Hubungi WA
                </a>
              ` : `
                <span class="text-xs text-stone-400 italic">No WA belum diisi</span>
              `}

              <div class="flex items-center gap-1.5">
                <button onclick="openEditVendorModal('${v.id}')" class="p-1.5 text-[#5A3E36] hover:bg-[#FAF0E8] rounded-lg transition-colors" title="Edit">
                  <i data-lucide="edit" class="w-4 h-4"></i>
                </button>
                <button onclick="deleteVendorItem('${v.id}')" class="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const rfqContainer = document.getElementById('vendor-rfq-comparison');
  if (rfqContainer && vendorComparisons) {
    rfqContainer.innerHTML = vendorComparisons.map(item => `
      <div class="glass-card rounded-2xl p-4 shadow-subtle border border-[#F1DFDA] space-y-3">
        <h4 class="font-serif font-bold text-sm text-[#5A3E36] border-b border-[#F5E8E2] pb-1.5">${item.category}</h4>
        <div class="space-y-2">
          ${item.candidates.map(c => `
            <div class="p-2.5 rounded-xl ${c.isChosen ? 'bg-amber-50/80 border border-[#C5A059]' : 'bg-[#FAF4F0] border border-transparent'} flex items-center justify-between text-xs">
              <div>
                <div class="font-semibold text-[#3E2723] flex items-center gap-1.5">
                  ${c.name}
                  ${c.isChosen ? '<span class="text-[9px] bg-[#C5A059] text-white px-1.5 py-0.2 rounded-full uppercase tracking-wider font-bold">Terpilih</span>' : ''}
                </div>
                <div class="text-[11px] text-[#7D5F56] mt-0.5">${c.pros}</div>
              </div>
              <div class="font-bold text-[#874E4A]">${formatRupiah(c.price)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}

function renderGuests() {
  const { guests, profile } = store.state;
  const activeCategory = window.currentGuestCategory || 'all';
  const activeRsvp = window.currentGuestRsvp || 'all';
  const searchQuery = (window.currentGuestSearch || '').toLowerCase();

  let filtered = guests.filter(g => {
    const matchesCat = activeCategory === 'all' || g.category === activeCategory;
    const matchesRsvp = activeRsvp === 'all' || g.rsvp === activeRsvp;
    const matchesSearch = !searchQuery || g.name.toLowerCase().includes(searchQuery) || (g.table && g.table.toLowerCase().includes(searchQuery));
    return matchesCat && matchesRsvp && matchesSearch;
  });

  const totalGuests = guests.length;
  const totalPax = guests.reduce((a, b) => a + (Number(b.pax) || 1), 0);
  const confirmedPax = guests.filter(g => g.rsvp === 'Hadir').reduce((a, b) => a + (Number(b.pax) || 1), 0);
  const estCateringPax = Math.round(confirmedPax * 1.25);

  document.getElementById('guest-total-count').textContent = `${totalGuests} Undangan (${totalPax} Pax)`;
  document.getElementById('guest-confirmed-pax').textContent = `${confirmedPax} Pax Hadir`;
  document.getElementById('guest-catering-calc').textContent = `${estCateringPax} Porsi Disarankan`;

  const container = document.getElementById('guest-list-container');
  if (container) {
    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-center py-8 text-sm text-[#7D5F56]">Tidak ada data tamu yang cocok dengan filter atau pencarian.</p>`;
    } else {
      container.innerHTML = filtered.map(g => {
        let rsvpBadge = 'badge-belum';
        if (g.rsvp === 'Hadir') rsvpBadge = 'badge-hadir';
        else if (g.rsvp === 'Ragu-ragu') rsvpBadge = 'badge-ragu';
        else if (g.rsvp === 'Berhalangan') rsvpBadge = 'badge-berhalangan';

        const cleanPhone = (g.phone || '').replace(/\D/g, '');
        const groomBride = profile.coupleTitle || 'Sarah & Rizky';
        const weddingDate = new Date(profile.weddingDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        const invitationMessage = encodeURIComponent(
          `Yth. ${g.name},\n\nTanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami:\n\n✨ ${groomBride} ✨\n🗓 ${weddingDate}\n📍 ${profile.weddingVenue}\n\nKonfirmasi kehadiran & informasi lengkap: https://eternalbliss.wedding\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila berkenan hadir.\n\nSalam hangat,\n${groomBride}`
        );
        const waInviteUrl = cleanPhone ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${invitationMessage}` : '#';

        return `
          <div class="glass-card rounded-2xl p-3.5 shadow-subtle border border-[#F1DFDA] flex items-center justify-between gap-3 hover:border-[#C5A059] transition-all">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <h4 class="font-semibold text-sm text-[#3E2723] truncate">${g.name}</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF0E8] text-[#874E4A]">${g.category}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${rsvpBadge}">${g.rsvp}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-[#7D5F56]">
                <span><i data-lucide="users" class="w-3.5 h-3.5 inline text-[#C5A059]"></i> ${g.pax} Pax</span>
                <span><i data-lucide="layout-grid" class="w-3.5 h-3.5 inline text-[#C5A059]"></i> ${g.table || 'Belum diplot'}</span>
                <span class="text-[11px] ${g.inviteSent ? 'text-[#2A6E3B]' : 'text-stone-400'}">
                  ${g.inviteSent ? '✓ Undangan Terkirim' : '○ Belum Dikirim'}
                </span>
              </div>
            </div>

            <div class="flex items-center gap-1.5 flex-shrink-0">
              ${cleanPhone ? `
                <a href="${waInviteUrl}" target="_blank" rel="noopener noreferrer" class="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-xl transition-colors" title="Kirim Undangan WhatsApp">
                  <i data-lucide="send" class="w-4 h-4"></i>
                </a>
              ` : ''}
              <button onclick="openEditGuestModal('${g.id}')" class="p-2 text-[#7D5F56] hover:bg-[#FAF0E8] rounded-xl transition-colors" title="Edit Tamu">
                <i data-lucide="edit-2" class="w-4 h-4"></i>
              </button>
              <button onclick="deleteGuestItem('${g.id}')" class="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors" title="Hapus">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function renderRundown() {
  const { rundowns, emergencyContacts } = store.state;
  const container = document.getElementById('rundown-list-container');
  if (container) {
    if (rundowns.length === 0) {
      container.innerHTML = `<p class="text-center py-8 text-sm text-[#7D5F56]">Belum ada jadwal rundown.</p>`;
    } else {
      container.innerHTML = rundowns.map((r, index) => {
        const cleanPhone = (r.phone || '').replace(/\D/g, '');
        return `
          <div class="relative pl-6 pb-6 border-l-2 border-[#E8C5C8] last:border-l-0">
            <span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#C5A059] ring-4 ring-[#FAF0E8]"></span>
            <div class="glass-card rounded-2xl p-4 shadow-subtle border border-[#F1DFDA] space-y-2 hover:border-[#C5A059] transition-all">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-[#874E4A] bg-[#FAF0E8] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${r.time}
                </span>
                <div class="flex items-center gap-1">
                  <button onclick="openEditRundownModal('${r.id}')" class="p-1 text-[#7D5F56] hover:text-[#5A3E36] rounded" title="Edit">
                    <i data-lucide="edit" class="w-3.5 h-3.5"></i>
                  </button>
                  <button onclick="deleteRundownItem('${r.id}')" class="p-1 text-red-400 hover:text-red-700 rounded" title="Hapus">
                    <i data-lucide="trash" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
              <h3 class="font-serif font-bold text-sm text-[#3E2723]">${r.title}</h3>
              ${r.notes ? `<p class="text-xs text-[#7D5F56]">${r.notes}</p>` : ''}
              <div class="flex items-center justify-between pt-2 border-t border-[#F5E8E2] text-xs">
                <span class="text-[#5A3E36] font-medium flex items-center gap-1">
                  <i data-lucide="user-check" class="w-3.5 h-3.5 text-[#C5A059]"></i> PIC: ${r.pic}
                </span>
                ${cleanPhone ? `
                  <a href="tel:${cleanPhone}" class="text-xs text-[#2A6E3B] font-semibold hover:underline flex items-center gap-1">
                    <i data-lucide="phone-call" class="w-3 h-3"></i> Hubungi
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const emContainer = document.getElementById('emergency-contacts-container');
  if (emContainer && emergencyContacts) {
    emContainer.innerHTML = emergencyContacts.map(c => `
      <div class="p-3 rounded-2xl bg-[#FFFDFB] border border-[#F1DFDA] flex items-center justify-between text-xs">
        <div>
          <span class="text-[10px] text-[#A4645F] font-bold block uppercase">${c.role}</span>
          <span class="font-semibold text-[#3E2723]">${c.name}</span>
        </div>
        <a href="tel:${c.phone}" class="px-2.5 py-1 rounded-xl bg-[#FAF0E8] text-[#874E4A] hover:bg-[#874E4A] hover:text-white transition-colors font-semibold flex items-center gap-1">
          <i data-lucide="phone" class="w-3 h-3"></i> ${c.phone}
        </a>
      </div>
    `).join('');
  }
}

function renderSeserahan() {
  const seserahan = store.state.seserahan || [];

  const totalKotak = seserahan.length;
  const siapKotak = seserahan.filter(s => s.status === 'siap').length;
  const dihiasKotak = seserahan.filter(s => s.status === 'sedang_dihias').length;
  const dibeliKotak = seserahan.filter(s => s.status === 'sudah_dibeli').length;
  const belumKotak = seserahan.filter(s => s.status === 'belum_dibeli').length;

  const totalActual = seserahan.reduce((sum, s) => sum + (Number(s.actual) || 0), 0);
  const totalJasaHias = seserahan.reduce((sum, s) => sum + (Number(s.jasaHias) || 0), 0);
  const grandTotal = totalActual + totalJasaHias;
  const totalBudget = seserahan.reduce((sum, s) => sum + (Number(s.budget) || 0), 0);

  const siapPercent = totalKotak > 0 ? Math.round((siapKotak / totalKotak) * 100) : 0;

  const kpiTotalEl = document.getElementById('ses-kpi-total');
  if (kpiTotalEl) kpiTotalEl.textContent = `${totalKotak} Kotak`;

  const kpiReadyEl = document.getElementById('ses-kpi-ready');
  if (kpiReadyEl) kpiReadyEl.textContent = `${siapKotak} Siap (${siapPercent}%)`;

  const kpiActualEl = document.getElementById('ses-kpi-actual');
  if (kpiActualEl) kpiActualEl.textContent = formatRupiah(totalActual);

  const kpiJasaEl = document.getElementById('ses-kpi-jasa');
  if (kpiJasaEl) kpiJasaEl.textContent = formatRupiah(totalJasaHias);

  const kpiGrandEl = document.getElementById('ses-kpi-grand');
  if (kpiGrandEl) kpiGrandEl.textContent = formatRupiah(grandTotal);

  const kpiBudgetEl = document.getElementById('ses-kpi-budget');
  if (kpiBudgetEl) kpiBudgetEl.textContent = formatRupiah(totalBudget);

  const kpiBarEl = document.getElementById('ses-kpi-progress-bar');
  if (kpiBarEl) kpiBarEl.style.width = `${siapPercent}%`;

  const activeRecipient = window.currentSeserahanRecipient || 'all';
  const activeStatus = window.currentSeserahanStatus || 'all';
  const activeCategory = window.currentSeserahanCategory || 'all';

  let filtered = [...seserahan];
  if (activeRecipient !== 'all') {
    if (activeRecipient === 'wanita') {
      filtered = filtered.filter(s => s.penerima === 'Mempelai Wanita');
    } else if (activeRecipient === 'pria') {
      filtered = filtered.filter(s => s.penerima === 'Mempelai Pria');
    }
  }

  if (activeStatus !== 'all') {
    filtered = filtered.filter(s => s.status === activeStatus);
  }

  if (activeCategory !== 'all') {
    filtered = filtered.filter(s => s.category === activeCategory);
  }

  filtered.sort((a, b) => (Number(a.kotakNumber) || 0) - (Number(b.kotakNumber) || 0));

  const container = document.getElementById('seserahan-cards-container');
  if (container) {
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card rounded-3xl p-8 text-center border border-[#F1DFDA] space-y-2">
          <div class="w-12 h-12 rounded-2xl bg-[#FAF0E8] text-[#874E4A] flex items-center justify-center mx-auto">
            <i data-lucide="gift" class="w-6 h-6"></i>
          </div>
          <h4 class="font-serif font-bold text-base text-[#3E2723]">Tidak Ada Kotak Seserahan</h4>
          <p class="text-xs text-[#7D5F56]">Belum ada kotak yang sesuai dengan filter yang dipilih.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(item => {
        let statusBadgeClass = 'badge-ses-belum';
        let statusLabel = 'Belum Dibeli';
        let statusIcon = 'clock';

        if (item.status === 'siap') {
          statusBadgeClass = 'badge-ses-siap';
          statusLabel = 'Siap Diserahkan';
          statusIcon = 'check-circle';
        } else if (item.status === 'sedang_dihias') {
          statusBadgeClass = 'badge-ses-dihias';
          statusLabel = 'Sedang Dihias';
          statusIcon = 'scissors';
        } else if (item.status === 'sudah_dibeli') {
          statusBadgeClass = 'badge-ses-dibeli';
          statusLabel = 'Sudah Dibeli';
          statusIcon = 'shopping-bag';
        }

        const isForGroom = item.penerima === 'Mempelai Pria';
        const recipientBadge = isForGroom
          ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF2F7] text-[#295B82] border border-[#CDE1F0]">👔 Balasan Pria</span>`
          : `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FDF0F3] text-[#A63853] border border-[#FAD0DA]">🌸 Untuk Wanita</span>`;

        const itemsList = (item.items || '')
          .split(/,|\n/)
          .map(t => t.trim())
          .filter(t => t.length > 0);

        const totalCostThisBox = (Number(item.actual) || 0) + (Number(item.jasaHias) || 0);

        return `
          <div class="glass-card rounded-3xl p-4 sm:p-5 shadow-subtle border border-[#F1DFDA] hover:border-[#C5A059] transition-all space-y-3 relative overflow-hidden">
            
            <div class="flex items-center justify-between gap-2 border-b border-[#F5E8E2] pb-2.5">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-xl bg-gradient-to-r from-[#DFB967] to-[#C5A059] text-white font-bold text-xs shadow-gold">
                  KOTAK ${item.kotakNumber || '#'}
                </span>
                ${recipientBadge}
              </div>

              <button onclick="quickCycleSeserahanStatus('${item.id}')" class="text-[11px] font-semibold px-2.5 py-1 rounded-full ${statusBadgeClass} flex items-center gap-1 hover:opacity-85 transition-opacity" title="Klik untuk mengubah status kotak">
                <i data-lucide="${statusIcon}" class="w-3.5 h-3.5"></i>
                <span>${statusLabel}</span>
              </button>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase font-bold tracking-wider text-[#A4645F]">${item.category || 'Seserahan'}</span>
                <span class="text-[10px] text-stone-400">ID: ${item.id}</span>
              </div>
              <h3 class="font-serif font-bold text-base text-[#3E2723] leading-snug mt-0.5">${item.title}</h3>
            </div>

            <div class="bg-[#FAF4F0]/70 p-3 rounded-2xl border border-[#F1DFDA]/80 space-y-1.5">
              <span class="text-[10px] uppercase font-bold text-[#7D5F56] block tracking-wider">Isi Dalam Kotak:</span>
              <div class="flex flex-wrap gap-1.5">
                ${itemsList.length > 0 ? itemsList.map(it => `
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white border border-[#E8C5C8] text-xs text-[#3E2723] font-medium shadow-2xs">
                    <i data-lucide="sparkle" class="w-3 h-3 text-[#C5A059] flex-shrink-0"></i>
                    ${it}
                  </span>
                `).join('') : '<span class="text-xs text-stone-400">Belum ada rincian barang.</span>'}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 text-center text-xs">
              <div class="p-2 rounded-2xl bg-white border border-[#F1DFDA]">
                <span class="text-[10px] text-stone-500 block">Plafon Budget</span>
                <span class="font-semibold text-[#5A3E36] block mt-0.5">${formatRupiah(item.budget)}</span>
              </div>
              <div class="p-2 rounded-2xl bg-white border border-[#F1DFDA]">
                <span class="text-[10px] text-stone-500 block">Biaya Barang</span>
                <span class="font-semibold text-[#874E4A] block mt-0.5">${formatRupiah(item.actual)}</span>
              </div>
              <div class="p-2 rounded-2xl bg-[#FAF2EC] border border-[#E8C5C8]">
                <span class="text-[10px] text-[#A4645F] font-bold block">Jasa Hias Kotak</span>
                <span class="font-bold text-[#3E2723] block mt-0.5">${formatRupiah(item.jasaHias)}</span>
              </div>
            </div>

            <div class="space-y-1 pt-1 text-xs text-[#7D5F56]">
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-1 text-[#5A3E36]">
                  <i data-lucide="user" class="w-3.5 h-3.5 text-[#C5A059]"></i> PIC Pembawa: <strong>${item.pic || 'Belum Ditentukan'}</strong>
                </span>
                ${item.vendorHias ? `
                  <span class="flex items-center gap-1 text-[11px] text-stone-500">
                    <i data-lucide="palette" class="w-3 h-3 text-[#874E4A]"></i> ${item.vendorHias}
                  </span>
                ` : ''}
              </div>
              ${item.notes ? `
                <p class="text-[11px] text-stone-600 bg-white/70 p-2 rounded-xl border border-stone-100 flex items-start gap-1.5">
                  <i data-lucide="info" class="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5"></i>
                  <span>${item.notes}</span>
                </p>
              ` : ''}
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-[#F5E8E2]">
              <div class="text-xs">
                <span class="text-[10px] text-stone-500">Total Kotak Ini:</span>
                <span class="font-serif font-bold text-sm text-[#3E2723] ml-1">${formatRupiah(totalCostThisBox)}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <button onclick="quickCycleSeserahanStatus('${item.id}')" class="px-2.5 py-1.5 rounded-xl bg-[#FAF0E8] text-[#874E4A] hover:bg-[#874E4A] hover:text-white transition-colors text-xs font-semibold flex items-center gap-1" title="Putar Status">
                  <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i> Ganti Status
                </button>
                <button onclick="openEditSeserahanModal('${item.id}')" class="p-1.5 text-[#7D5F56] hover:text-[#5A3E36] hover:bg-[#FAF0E8] rounded-lg transition-colors" title="Edit Kotak">
                  <i data-lucide="edit-2" class="w-4 h-4"></i>
                </button>
                <button onclick="deleteSeserahanItem('${item.id}')" class="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" title="Hapus Kotak">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function renderAll() {
  renderDashboard();
  renderBudget();
  renderTimeline();
  renderVendors();
  renderGuests();
  renderSeatingChart();
  renderRundown();
  renderSeserahan();
  updateCountdown();
  lucide.createIcons();
}

function toggleTaskCheck(id) {
  store.toggleTask(id);
  triggerRosePetals(3500);
  showToast('Progres checklist berhasil diperbarui!', 'check-circle');
}

function deleteTaskItem(id) {
  if (confirm('Hapus tugas checklist ini?')) {
    store.deleteTask(id);
    showToast('Tugas checklist dihapus.', 'trash');
  }
}

function deleteExpenseItem(id) {
  if (confirm('Hapus item pengeluaran ini?')) {
    store.deleteExpense(id);
    showToast('Item pengeluaran dihapus.', 'trash');
  }
}

function deleteVendorItem(id) {
  if (confirm('Hapus vendor ini?')) {
    store.deleteVendor(id);
    showToast('Vendor dihapus.', 'trash');
  }
}

function deleteGuestItem(id) {
  if (confirm('Hapus tamu undangan ini?')) {
    store.deleteGuest(id);
    showToast('Data tamu dihapus.', 'trash');
  }
}

function deleteRundownItem(id) {
  if (confirm('Hapus jadwal rundown ini?')) {
    store.deleteRundown(id);
    showToast('Agenda rundown dihapus.', 'trash');
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
  lucide.createIcons();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

let tempProfilePhoto = '';

function openEditProfileModal() {
  const { profile } = store.state;
  document.getElementById('input-bride-name').value = profile.brideName || '';
  document.getElementById('input-groom-name').value = profile.groomName || '';
  document.getElementById('input-wedding-date').value = profile.weddingDate || '';
  document.getElementById('input-wedding-venue').value = profile.weddingVenue || '';
  document.getElementById('input-wedding-city').value = profile.weddingCity || '';
  document.getElementById('input-total-budget').value = profile.totalBudget || 150000000;

  tempProfilePhoto = profile.photo || 'assets/wedding_rings.jpg';
  const previewImg = document.getElementById('preview-profile-photo');
  if (previewImg) previewImg.src = tempProfilePhoto;

  const urlInput = document.getElementById('input-profile-photo-url');
  if (urlInput) {
    urlInput.value = (tempProfilePhoto && (tempProfilePhoto.startsWith('http://') || tempProfilePhoto.startsWith('https://'))) ? tempProfilePhoto : '';
  }

  const fileInput = document.getElementById('input-profile-photo-file');
  if (fileInput) fileInput.value = '';

  const urlContainer = document.getElementById('photo-url-container');
  if (urlContainer) urlContainer.classList.add('hidden');

  openModal('modal-edit-profile');
}

function handleProfilePhotoUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Harap pilih file gambar (JPG, PNG, WebP)', 'alert-circle');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      
      const canvas = document.createElement('canvas');
      const maxDim = 600;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
      tempProfilePhoto = compressedDataUrl;

      const preview = document.getElementById('preview-profile-photo');
      if (preview) preview.src = tempProfilePhoto;

      showToast('Foto berhasil dimuat & dioptimalkan!', 'check');
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function handleProfilePhotoUrlChange(url) {
  const trimmed = url.trim();
  if (trimmed) {
    tempProfilePhoto = trimmed;
    const preview = document.getElementById('preview-profile-photo');
    if (preview) preview.src = trimmed;
  }
}

function setProfilePhotoPreset(url) {
  tempProfilePhoto = url;
  const preview = document.getElementById('preview-profile-photo');
  if (preview) preview.src = url;

  const urlInput = document.getElementById('input-profile-photo-url');
  if (urlInput) urlInput.value = url;

  showToast('Preset foto dipilih', 'sparkles');
}

function resetProfilePhoto() {
  tempProfilePhoto = 'assets/wedding_rings.jpg';
  const preview = document.getElementById('preview-profile-photo');
  if (preview) preview.src = tempProfilePhoto;

  const urlInput = document.getElementById('input-profile-photo-url');
  if (urlInput) urlInput.value = '';

  const fileInput = document.getElementById('input-profile-photo-file');
  if (fileInput) fileInput.value = '';

  showToast('Foto dikembalikan ke default', 'rotate-ccw');
}

function togglePhotoUrlInput() {
  const container = document.getElementById('photo-url-container');
  if (container) {
    container.classList.toggle('hidden');
    lucide.createIcons();
  }
}

function saveProfileModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const bride = (document.getElementById('input-bride-name')?.value || '').trim();
  const groom = (document.getElementById('input-groom-name')?.value || '').trim();
  const date = document.getElementById('input-wedding-date')?.value || '';
  const venue = (document.getElementById('input-wedding-venue')?.value || '').trim();
  const city = (document.getElementById('input-wedding-city')?.value || '').trim();
  const budget = Number(document.getElementById('input-total-budget')?.value) || 0;

  if (!bride || !groom) {
    showToast('Harap isi nama kedua mempelai!', 'alert-circle');
    return;
  }

  const brideFirst = bride.split(' ')[0];
  const groomFirst = groom.split(' ')[0];
  const title = (brideFirst && groomFirst) ? `${brideFirst} & ${groomFirst}` : `${bride} & ${groom}`;

  store.updateProfile({
    brideName: bride,
    groomName: groom,
    coupleTitle: title,
    weddingDate: date,
    weddingVenue: venue || 'Venue Pilihan',
    weddingCity: city || 'Jakarta',
    totalBudget: budget,
    photo: tempProfilePhoto || 'assets/wedding_rings.jpg'
  });

  closeModal('modal-edit-profile');
  renderAll();
  showToast('Profil pernikahan berhasil diperbarui!', 'heart');
}

let editingExpenseId = null;
function openAddExpenseModal() {
  editingExpenseId = null;
  document.getElementById('form-expense-title').textContent = 'Tambah Pos Pengeluaran';
  document.getElementById('input-exp-name').value = '';
  document.getElementById('input-exp-category').value = 'vendor';
  document.getElementById('input-exp-est').value = '';
  document.getElementById('input-exp-real').value = '';
  document.getElementById('input-exp-dp').value = '';
  document.getElementById('input-exp-status').value = 'Belum Bayar';
  document.getElementById('input-exp-notes').value = '';
  openModal('modal-expense');
}

function openEditExpenseModal(id) {
  editingExpenseId = id;
  const item = store.state.expenses.find(e => e.id === id);
  if (!item) return;

  document.getElementById('form-expense-title').textContent = 'Edit Pos Pengeluaran';
  document.getElementById('input-exp-name').value = item.name;
  document.getElementById('input-exp-category').value = item.category;
  document.getElementById('input-exp-est').value = item.est || 0;
  document.getElementById('input-exp-real').value = item.real || 0;
  document.getElementById('input-exp-dp').value = item.dp || 0;
  document.getElementById('input-exp-status').value = item.status;
  document.getElementById('input-exp-notes').value = item.notes || '';
  openModal('modal-expense');
}

function saveExpenseModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const name = (document.getElementById('input-exp-name')?.value || '').trim();
  const category = document.getElementById('input-exp-category')?.value || 'vendor';
  const est = Number(document.getElementById('input-exp-est')?.value) || 0;
  const real = Number(document.getElementById('input-exp-real')?.value) || 0;
  const dp = Number(document.getElementById('input-exp-dp')?.value) || 0;
  let status = document.getElementById('input-exp-status')?.value || 'Belum Bayar';
  const notes = (document.getElementById('input-exp-notes')?.value || '').trim();

  if (!name) {
    showToast('Harap isi nama item pengeluaran!', 'alert-circle');
    return;
  }

  if (dp >= real && real > 0) status = 'Lunas';
  else if (dp > 0 && dp < real) status = 'DP';

  const payload = { name, category, est, real, dp, status, notes };

  if (editingExpenseId) {
    store.updateExpense(editingExpenseId, payload);
    showToast('Pos pengeluaran berhasil diperbarui!', 'check');
  } else {
    store.addExpense(payload);
    showToast('Pengeluaran baru berhasil ditambahkan!', 'plus');
  }

  closeModal('modal-expense');
  renderAll();
}

function openAddTaskModal() {
  document.getElementById('input-task-title').value = '';
  document.getElementById('input-task-phase').value = 'h1m';
  document.getElementById('input-task-note').value = '';
  openModal('modal-task');
}

function saveTaskModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const title = (document.getElementById('input-task-title')?.value || '').trim();
  const phase = document.getElementById('input-task-phase')?.value || 'h1m';
  const note = (document.getElementById('input-task-note')?.value || '').trim();

  if (!title) {
    showToast('Harap isi nama aktivitas tugas!', 'alert-circle');
    return;
  }

  store.addTask({
    title,
    phase,
    note,
    completed: false
  });

  closeModal('modal-task');
  renderAll();
  showToast('Checklist tugas baru ditambahkan!', 'check-square');
}

let editingVendorId = null;
function openAddVendorModal() {
  editingVendorId = null;
  document.getElementById('form-vendor-title').textContent = 'Tambah Vendor Baru';
  document.getElementById('input-vendor-name').value = '';
  document.getElementById('input-vendor-category').value = 'Katering';
  document.getElementById('input-vendor-pic').value = '';
  document.getElementById('input-vendor-phone').value = '';
  document.getElementById('input-vendor-contract').value = '';
  document.getElementById('input-vendor-dp').value = '';
  document.getElementById('input-vendor-status').value = 'Booked';
  document.getElementById('input-vendor-notes').value = '';
  openModal('modal-vendor');
}

function openEditVendorModal(id) {
  editingVendorId = id;
  const v = store.state.vendors.find(item => item.id === id);
  if (!v) return;

  document.getElementById('form-vendor-title').textContent = 'Edit Data Vendor';
  document.getElementById('input-vendor-name').value = v.name;
  document.getElementById('input-vendor-category').value = v.category;
  document.getElementById('input-vendor-pic').value = v.pic || '';
  document.getElementById('input-vendor-phone').value = v.phone || '';
  document.getElementById('input-vendor-contract').value = v.contract || 0;
  document.getElementById('input-vendor-dp').value = v.dp || 0;
  document.getElementById('input-vendor-status').value = v.status;
  document.getElementById('input-vendor-notes').value = v.notes || '';
  openModal('modal-vendor');
}

function saveVendorModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const name = (document.getElementById('input-vendor-name')?.value || '').trim();
  const category = (document.getElementById('input-vendor-category')?.value || '').trim();
  const pic = (document.getElementById('input-vendor-pic')?.value || '').trim();
  const phone = (document.getElementById('input-vendor-phone')?.value || '').trim();
  const contract = Number(document.getElementById('input-vendor-contract')?.value) || 0;
  const dp = Number(document.getElementById('input-vendor-dp')?.value) || 0;
  const status = document.getElementById('input-vendor-status')?.value || 'Booked';
  const notes = (document.getElementById('input-vendor-notes')?.value || '').trim();

  if (!name) {
    showToast('Harap isi nama vendor!', 'alert-circle');
    return;
  }

  const payload = { name, category, pic, phone, contract, dp, status, notes };

  if (editingVendorId) {
    store.updateVendor(editingVendorId, payload);
    showToast('Data vendor diperbarui!', 'check');
  } else {
    store.addVendor(payload);
    showToast('Vendor baru ditambahkan!', 'plus');
  }

  closeModal('modal-vendor');
  renderAll();
}

let editingGuestId = null;
function openAddGuestModal() {
  editingGuestId = null;
  document.getElementById('form-guest-title').textContent = 'Tambah Tamu Undangan';
  document.getElementById('input-guest-name').value = '';
  document.getElementById('input-guest-category').value = 'Keluarga';
  document.getElementById('input-guest-pax').value = '2';
  document.getElementById('input-guest-table').value = '';
  document.getElementById('input-guest-phone').value = '';
  document.getElementById('input-guest-sent').checked = false;
  document.getElementById('input-guest-rsvp').value = 'Belum Konfirmasi';
  openModal('modal-guest');
}

function openEditGuestModal(id) {
  editingGuestId = id;
  const g = store.state.guests.find(item => item.id === id);
  if (!g) return;

  document.getElementById('form-guest-title').textContent = 'Edit Tamu Undangan';
  document.getElementById('input-guest-name').value = g.name;
  document.getElementById('input-guest-category').value = g.category;
  document.getElementById('input-guest-pax').value = g.pax || 1;
  document.getElementById('input-guest-table').value = g.table || '';
  document.getElementById('input-guest-phone').value = g.phone || '';
  document.getElementById('input-guest-sent').checked = !!g.inviteSent;
  document.getElementById('input-guest-rsvp').value = g.rsvp;
  openModal('modal-guest');
}

function saveGuestModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const name = (document.getElementById('input-guest-name')?.value || '').trim();
  const category = document.getElementById('input-guest-category')?.value || 'Keluarga';
  const pax = Number(document.getElementById('input-guest-pax')?.value) || 1;
  const table = (document.getElementById('input-guest-table')?.value || '').trim();
  const phone = (document.getElementById('input-guest-phone')?.value || '').trim();
  const inviteSent = document.getElementById('input-guest-sent')?.checked ?? false;
  const rsvp = document.getElementById('input-guest-rsvp')?.value || 'Belum Konfirmasi';

  if (!name) {
    showToast('Harap isi nama tamu undangan!', 'alert-circle');
    return;
  }

  const payload = { name, category, pax, table, phone, inviteSent, rsvp };

  if (editingGuestId) {
    store.updateGuest(editingGuestId, payload);
    showToast('Data tamu berhasil diperbarui!', 'check');
  } else {
    store.addGuest(payload);
    showToast('Tamu baru berhasil ditambahkan!', 'user-plus');
  }

  closeModal('modal-guest');
  renderAll();
}

let editingRundownId = null;
function openAddRundownModal() {
  editingRundownId = null;
  document.getElementById('form-rundown-title').textContent = 'Tambah Sesi Rundown';
  document.getElementById('input-rundown-time').value = '08:00 - 09:00';
  document.getElementById('input-rundown-title').value = '';
  document.getElementById('input-rundown-pic').value = '';
  document.getElementById('input-rundown-phone').value = '';
  document.getElementById('input-rundown-notes').value = '';
  openModal('modal-rundown');
}

function openEditRundownModal(id) {
  editingRundownId = id;
  const r = store.state.rundowns.find(item => item.id === id);
  if (!r) return;

  document.getElementById('form-rundown-title').textContent = 'Edit Sesi Rundown';
  document.getElementById('input-rundown-time').value = r.time;
  document.getElementById('input-rundown-title').value = r.title;
  document.getElementById('input-rundown-pic').value = r.pic;
  document.getElementById('input-rundown-phone').value = r.phone || '';
  document.getElementById('input-rundown-notes').value = r.notes || '';
  openModal('modal-rundown');
}

function saveRundownModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const time = (document.getElementById('input-rundown-time')?.value || '').trim();
  const title = (document.getElementById('input-rundown-title')?.value || '').trim();
  const pic = (document.getElementById('input-rundown-pic')?.value || '').trim();
  const phone = (document.getElementById('input-rundown-phone')?.value || '').trim();
  const notes = (document.getElementById('input-rundown-notes')?.value || '').trim();

  if (!title) {
    showToast('Harap isi judul sesi acara!', 'alert-circle');
    return;
  }

  const payload = { time, title, pic, phone, notes };

  if (editingRundownId) {
    store.updateRundown(editingRundownId, payload);
    showToast('Jadwal rundown diperbarui!', 'check');
  } else {
    store.addRundown(payload);
    showToast('Jadwal rundown baru ditambahkan!', 'calendar');
  }

  closeModal('modal-rundown');
  renderAll();
}

let editingSeserahanId = null;

function openAddSeserahanModal() {
  editingSeserahanId = null;
  const currentCount = (store.state.seserahan?.length || 0) + 1;
  const titleEl = document.getElementById('form-seserahan-title');
  if (titleEl) titleEl.textContent = 'Tambah Kotak Seserahan';

  const numEl = document.getElementById('input-ses-number');
  if (numEl) numEl.value = currentCount;

  const tEl = document.getElementById('input-ses-title');
  if (tEl) tEl.value = '';

  const catEl = document.getElementById('input-ses-category');
  if (catEl) catEl.value = 'Perlengkapan Ibadah';

  const penEl = document.getElementById('input-ses-penerima');
  if (penEl) penEl.value = 'Mempelai Wanita';

  const itemsEl = document.getElementById('input-ses-items');
  if (itemsEl) itemsEl.value = '';

  const budEl = document.getElementById('input-ses-budget');
  if (budEl) budEl.value = '';

  const actEl = document.getElementById('input-ses-actual');
  if (actEl) actEl.value = '';

  const jasEl = document.getElementById('input-ses-jasa');
  if (jasEl) jasEl.value = '150000';

  const statEl = document.getElementById('input-ses-status');
  if (statEl) statEl.value = 'belum_dibeli';

  const picEl = document.getElementById('input-ses-pic');
  if (picEl) picEl.value = '';

  const venEl = document.getElementById('input-ses-vendor');
  if (venEl) venEl.value = 'Rosewood Seserahan Studio';

  const noteEl = document.getElementById('input-ses-notes');
  if (noteEl) noteEl.value = '';

  openModal('modal-seserahan');
}

function openEditSeserahanModal(id) {
  editingSeserahanId = id;
  const s = (store.state.seserahan || []).find(item => item.id === id);
  if (!s) return;

  const titleEl = document.getElementById('form-seserahan-title');
  if (titleEl) titleEl.textContent = 'Edit Kotak Seserahan';

  const numEl = document.getElementById('input-ses-number');
  if (numEl) numEl.value = s.kotakNumber || 1;

  const tEl = document.getElementById('input-ses-title');
  if (tEl) tEl.value = s.title || '';

  const catEl = document.getElementById('input-ses-category');
  if (catEl) catEl.value = s.category || 'Perlengkapan Ibadah';

  const penEl = document.getElementById('input-ses-penerima');
  if (penEl) penEl.value = s.penerima || 'Mempelai Wanita';

  const itemsEl = document.getElementById('input-ses-items');
  if (itemsEl) itemsEl.value = s.items || '';

  const budEl = document.getElementById('input-ses-budget');
  if (budEl) budEl.value = s.budget || '';

  const actEl = document.getElementById('input-ses-actual');
  if (actEl) actEl.value = s.actual || '';

  const jasEl = document.getElementById('input-ses-jasa');
  if (jasEl) jasEl.value = s.jasaHias || 0;

  const statEl = document.getElementById('input-ses-status');
  if (statEl) statEl.value = s.status || 'belum_dibeli';

  const picEl = document.getElementById('input-ses-pic');
  if (picEl) picEl.value = s.pic || '';

  const venEl = document.getElementById('input-ses-vendor');
  if (venEl) venEl.value = s.vendorHias || '';

  const noteEl = document.getElementById('input-ses-notes');
  if (noteEl) noteEl.value = s.notes || '';

  openModal('modal-seserahan');
}

function saveSeserahanModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const kotakNumber = Number(document.getElementById('input-ses-number')?.value) || 1;
  const title = (document.getElementById('input-ses-title')?.value || '').trim();
  const category = document.getElementById('input-ses-category')?.value || 'Lainnya';
  const penerima = document.getElementById('input-ses-penerima')?.value || 'Mempelai Wanita';
  const items = (document.getElementById('input-ses-items')?.value || '').trim();
  const budget = Number(document.getElementById('input-ses-budget')?.value) || 0;
  const actual = Number(document.getElementById('input-ses-actual')?.value) || 0;
  const jasaHias = Number(document.getElementById('input-ses-jasa')?.value) || 0;
  const status = document.getElementById('input-ses-status')?.value || 'belum_dibeli';
  const pic = (document.getElementById('input-ses-pic')?.value || '').trim();
  const vendorHias = (document.getElementById('input-ses-vendor')?.value || '').trim();
  const notes = (document.getElementById('input-ses-notes')?.value || '').trim();

  if (!items) {
    showToast('Harap isi rincian daftar barang kotak!', 'alert-circle');
    return;
  }

  const payload = {
    kotakNumber,
    title,
    category,
    penerima,
    items,
    budget,
    actual,
    jasaHias,
    status,
    pic,
    vendorHias,
    notes
  };

  if (editingSeserahanId) {
    store.updateSeserahan(editingSeserahanId, payload);
    showToast(`Kotak #${kotakNumber} berhasil diperbarui!`, 'check');
  } else {
    store.addSeserahan(payload);
    triggerRosePetals(3000);
    showToast(`Kotak #${kotakNumber} baru berhasil ditambahkan!`, 'gift');
  }

  closeModal('modal-seserahan');
  renderAll();
}

function deleteSeserahanItem(id) {
  if (confirm('Hapus kotak seserahan ini dari daftar?')) {
    store.deleteSeserahan(id);
    showToast('Kotak seserahan dihapus.', 'trash');
  }
}

function quickCycleSeserahanStatus(id) {
  store.cycleSeserahanStatus(id);
  const item = (store.state.seserahan || []).find(s => s.id === id);
  if (item && item.status === 'siap') {
    triggerRosePetals(2500);
  }
  const labelMap = {
    'belum_dibeli': 'Belum Dibeli',
    'sudah_dibeli': 'Sudah Dibeli',
    'sedang_dihias': 'Sedang Dihias',
    'siap': 'Siap Diserahkan ✨'
  };
  showToast(`Status kotak diubah: ${labelMap[item?.status] || ''}`, 'sparkles');
}

function syncSeserahanToBudget() {
  const seserahan = store.state.seserahan || [];
  const totalActual = seserahan.reduce((sum, s) => sum + (Number(s.actual) || 0), 0);
  const totalJasaHias = seserahan.reduce((sum, s) => sum + (Number(s.jasaHias) || 0), 0);
  const grandTotal = totalActual + totalJasaHias;

  let expItem = store.state.expenses.find(e => e.name.toLowerCase().includes('seserahan'));
  if (expItem) {
    expItem.real = grandTotal;
    expItem.est = grandTotal;
    expItem.notes = `Sinkron ${seserahan.length} Kotak: Belanja ${formatRupiah(totalActual)} + Jasa Hias ${formatRupiah(totalJasaHias)}`;
  } else {
    store.addExpense({
      name: `Seserahan & ${seserahan.length} Kotak Hantaran`,
      category: 'bawaan',
      est: grandTotal,
      real: grandTotal,
      dp: grandTotal,
      status: 'Lunas',
      notes: `Sinkron ${seserahan.length} Kotak: Belanja ${formatRupiah(totalActual)} + Jasa Hias ${formatRupiah(totalJasaHias)}`
    });
  }
  store.saveState();
  triggerRosePetals(4000);
  showToast(`Anggaran seserahan disinkronkan: ${formatRupiah(grandTotal)}!`, 'sparkles');
}

function buildPrintDocument(moduleName) {
  const { profile, expenses, tasks, vendors, guests, rundowns, emergencyContacts, seserahan } = store.state;
  const d = new Date(profile.weddingDate);
  const dateFormatted = d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const todayFormatted = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  function renderDocHeader(docTitle) {
    return `
      <div style="text-align: center; border-bottom: 2px solid #5A3E36; padding-bottom: 12px; margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: #777; margin-bottom: 4px;">
          <span>EternalBliss • Digital Wedding Planner</span>
          <span>Tanggal Cetak: ${todayFormatted}</span>
        </div>
        <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: bold; color: #3E2723; margin: 4px 0;">${profile.coupleTitle || (profile.brideName + ' & ' + profile.groomName)}</h1>
        <p style="font-size: 11px; color: #874E4A; font-weight: 600; margin: 2px 0;">${dateFormatted} • ${profile.weddingVenue}, ${profile.weddingCity}</p>
        <div style="display: inline-block; margin-top: 8px; padding: 4px 14px; background: #FAF0E8; border: 1px solid #E8C5C8; border-radius: 20px; font-size: 11px; font-weight: bold; color: #3E2723; text-transform: uppercase; letter-spacing: 0.1em;">
          ${docTitle}
        </div>
      </div>
    `;
  }

  function renderSignatureBlock(leftTitle = 'Koordinator Wedding Organizer', rightTitle = 'Pihak Keluarga / Calon Pengantin') {
    return `
      <div style="margin-top: 30px; display: flex; justify-content: space-between; font-size: 11px; page-break-inside: avoid; text-align: center;">
        <div style="width: 40%;">
          <p style="margin-bottom: 48px; color: #555;">Mengetahui & Bertanggung Jawab,</p>
          <p style="font-weight: bold; border-top: 1px solid #777; padding-top: 4px; color: #222;">( ${leftTitle} )</p>
        </div>
        <div style="width: 40%;">
          <p style="margin-bottom: 48px; color: #555;">Disetujui Oleh,</p>
          <p style="font-weight: bold; border-top: 1px solid #777; padding-top: 4px; color: #222;">( ${rightTitle} )</p>
        </div>
      </div>
    `;
  }

  function getRundownHtml() {
    return `
      ${renderDocHeader('Rundown Acara Hari-H & Kontak Darurat')}
      <div style="margin-bottom: 10px; font-size: 11px; color: #555;">
        Berikut adalah urutan susunan acara resmi pernikahan dan daftar kontak panitia untuk koordinasi teknis di lapangan:
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10.5px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 6px; width: 14%;">Waktu</th>
            <th style="border: 1px solid #777; padding: 6px; width: 30%;">Sesi Acara</th>
            <th style="border: 1px solid #777; padding: 6px; width: 26%;">PIC (Penanggung Jawab)</th>
            <th style="border: 1px solid #777; padding: 6px; width: 30%;">Petunjuk Teknis / Catatan</th>
          </tr>
        </thead>
        <tbody>
          ${rundowns.map(r => `
            <tr>
              <td style="border: 1px solid #777; padding: 6px; font-weight: bold; white-space: nowrap;">${r.time}</td>
              <td style="border: 1px solid #777; padding: 6px; font-weight: 600;">${r.title}</td>
              <td style="border: 1px solid #777; padding: 6px;">${r.pic} ${r.phone ? `<br><small style="color: #555;">Telp: ${r.phone}</small>` : ''}</td>
              <td style="border: 1px solid #777; padding: 6px; font-size: 10px;">${r.notes || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3 style="font-size: 12px; font-weight: bold; color: #3E2723; margin: 14px 0 6px;">KONTAK PENTING & DARURAT HARI-H</h3>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10.5px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 35%;">Peran / Divisi</th>
            <th style="border: 1px solid #777; padding: 5px; width: 35%;">Nama Lengkap</th>
            <th style="border: 1px solid #777; padding: 5px; width: 30%;">Nomor Kontak / WhatsApp</th>
          </tr>
        </thead>
        <tbody>
          ${emergencyContacts.map(c => `
            <tr>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600;">${c.role}</td>
              <td style="border: 1px solid #777; padding: 5px;">${c.name}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: bold;">${c.phone}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${renderSignatureBlock('Koordinator Acara WO', 'Penanggung Jawab Keluarga')}
    `;
  }

  function getBudgetHtml() {
    const totalBudget = Number(profile.totalBudget) || 0;
    const totalReal = expenses.reduce((a, b) => a + (Number(b.real) || 0), 0);
    const totalEst = expenses.reduce((a, b) => a + (Number(b.est) || 0), 0);
    const totalDp = expenses.reduce((a, b) => a + (Number(b.dp) || 0), 0);
    const totalSisaPelunasan = totalReal - totalDp;
    const sisaAnggaran = totalBudget - totalReal;

    return `
      ${renderDocHeader('Laporan Anggaran & Rekapitulasi Pengeluaran')}
      
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 14px; font-size: 11px; text-align: center;">
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL PLAFON</div>
          <div style="font-weight: bold; font-size: 12px; color: #3E2723;">${formatRupiah(totalBudget)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL REALISASI</div>
          <div style="font-weight: bold; font-size: 12px; color: #874E4A;">${formatRupiah(totalReal)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL DP DIBAYAR</div>
          <div style="font-weight: bold; font-size: 12px; color: #237A3B;">${formatRupiah(totalDp)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">SISA ANGGARAN</div>
          <div style="font-weight: bold; font-size: 12px; color: ${sisaAnggaran >= 0 ? '#237A3B' : '#C0392B'};">${formatRupiah(sisaAnggaran)}</div>
        </div>
      </div>

      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 10px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 4%; text-align: center;">No</th>
            <th style="border: 1px solid #777; padding: 5px; width: 28%;">Pos Pengeluaran</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">Kategori</th>
            <th style="border: 1px solid #777; padding: 5px; width: 13%;">Estimasi</th>
            <th style="border: 1px solid #777; padding: 5px; width: 13%;">Biaya Riil</th>
            <th style="border: 1px solid #777; padding: 5px; width: 12%;">DP</th>
            <th style="border: 1px solid #777; padding: 5px; width: 10%; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${expenses.map((e, idx) => `
            <tr>
              <td style="border: 1px solid #777; padding: 5px; text-align: center;">${idx + 1}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600;">
                ${e.name}
                ${e.notes ? `<br><small style="color: #666; font-weight: normal;">${e.notes}</small>` : ''}
              </td>
              <td style="border: 1px solid #777; padding: 5px; text-transform: capitalize;">${e.category}</td>
              <td style="border: 1px solid #777; padding: 5px;">${formatRupiah(e.est)}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: bold;">${formatRupiah(e.real)}</td>
              <td style="border: 1px solid #777; padding: 5px;">${formatRupiah(e.dp)}</td>
              <td style="border: 1px solid #777; padding: 5px; text-align: center; font-weight: 600;">${e.status}</td>
            </tr>
          `).join('')}
          <tr style="background: #F9F4F0; font-weight: bold;">
            <td colspan="3" style="border: 1px solid #777; padding: 6px; text-align: right;">TOTAL:</td>
            <td style="border: 1px solid #777; padding: 6px;">${formatRupiah(totalEst)}</td>
            <td style="border: 1px solid #777; padding: 6px; color: #874E4A;">${formatRupiah(totalReal)}</td>
            <td style="border: 1px solid #777; padding: 6px; color: #237A3B;">${formatRupiah(totalDp)}</td>
            <td style="border: 1px solid #777; padding: 6px; text-align: center;">-</td>
          </tr>
        </tbody>
      </table>
      ${renderSignatureBlock('Mempelai Pria', 'Mempelai Wanita')}
    `;
  }

  function getTimelineHtml() {
    const phaseNames = {
      'h12': 'H-12 Bulan',
      'h6': 'H-6 Bulan',
      'h3': 'H-3 Bulan',
      'h1m': 'H-1 Bulan',
      'h1w': 'H-1 Minggu',
      'h0': 'Hari H'
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const percent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

    return `
      ${renderDocHeader('Checklist & Timeline Persiapan Pernikahan')}
      <div style="margin-bottom: 10px; font-size: 11px; color: #555;">
        Progres Persiapan: <strong>${completedCount} dari ${tasks.length} Tugas Selesai (${percent}%)</strong>
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10.5px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 6%; text-align: center;">Status</th>
            <th style="border: 1px solid #777; padding: 5px; width: 24%;">Fase Waktu</th>
            <th style="border: 1px solid #777; padding: 5px; width: 45%;">Nama Tugas / Aktivitas</th>
            <th style="border: 1px solid #777; padding: 5px; width: 25%;">Keterangan / Catatan</th>
          </tr>
        </thead>
        <tbody>
          ${tasks.map(t => `
            <tr style="${t.completed ? 'background: #FAF8F6;' : ''}">
              <td style="border: 1px solid #777; padding: 5px; text-align: center; font-size: 13px;">
                ${t.completed ? '☑' : '☐'}
              </td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600; font-size: 10px;">${phaseNames[t.phase] || t.phase}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: ${t.completed ? 'normal' : 'bold'};">${t.title}</td>
              <td style="border: 1px solid #777; padding: 5px; font-size: 10px; color: #666;">${t.note || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${renderSignatureBlock('Wedding Organizer Lead', 'Calon Pengantin')}
    `;
  }

  function getVendorHtml() {
    const totalContract = vendors.reduce((a, b) => a + (Number(b.contract) || 0), 0);
    const totalDp = vendors.reduce((a, b) => a + (Number(b.dp) || 0), 0);
    const totalSisa = totalContract - totalDp;

    return `
      ${renderDocHeader('Direktori Vendor & Status Kontrak')}
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; font-size: 11px; text-align: center;">
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL NILAI KONTRAK</div>
          <div style="font-weight: bold; font-size: 12px; color: #3E2723;">${formatRupiah(totalContract)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL DP DIBAYAR</div>
          <div style="font-weight: bold; font-size: 12px; color: #237A3B;">${formatRupiah(totalDp)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">SISA PELUNASAN</div>
          <div style="font-weight: bold; font-size: 12px; color: #B57900;">${formatRupiah(totalSisa)}</div>
        </div>
      </div>

      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 16%;">Kategori</th>
            <th style="border: 1px solid #777; padding: 5px; width: 24%;">Nama Vendor</th>
            <th style="border: 1px solid #777; padding: 5px; width: 18%;">PIC & WhatsApp</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">Nilai Kontrak</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">DP Dibayar</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${vendors.map(v => `
            <tr>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600;">${v.category}</td>
              <td style="border: 1px solid #777; padding: 5px;">
                <strong>${v.name}</strong>
                ${v.notes ? `<br><small style="color: #666;">${v.notes}</small>` : ''}
              </td>
              <td style="border: 1px solid #777; padding: 5px;">${v.pic}<br><small>${v.phone}</small></td>
              <td style="border: 1px solid #777; padding: 5px;">${formatRupiah(v.contract)}</td>
              <td style="border: 1px solid #777; padding: 5px;">${formatRupiah(v.dp)}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: bold;">${v.status}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${renderSignatureBlock('Koordinator Vendor WO', 'Keluarga Mempelai')}
    `;
  }

  function getGuestsHtml() {
    const totalPax = guests.reduce((sum, g) => sum + (Number(g.pax) || 1), 0);
    const confirmedGuests = guests.filter(g => g.rsvp === 'Hadir');
    const confirmedPax = confirmedGuests.reduce((sum, g) => sum + (Number(g.pax) || 1), 0);

    return `
      ${renderDocHeader('Daftar Tamu Undangan, RSVP & Meja')}
      <div style="margin-bottom: 10px; font-size: 11px; color: #555;">
        Total Tamu: <strong>${guests.length} Undangan (${totalPax} Pax)</strong> • Konfirmasi Hadir: <strong>${confirmedPax} Pax</strong>
      </div>
      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 4%; text-align: center;">No</th>
            <th style="border: 1px solid #777; padding: 5px; width: 32%;">Nama Tamu / Gelar</th>
            <th style="border: 1px solid #777; padding: 5px; width: 15%;">Kategori</th>
            <th style="border: 1px solid #777; padding: 5px; width: 8%; text-align: center;">Pax</th>
            <th style="border: 1px solid #777; padding: 5px; width: 17%;">Plotting Meja</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">RSVP</th>
            <th style="border: 1px solid #777; padding: 5px; width: 10%; text-align: center;">Undangan</th>
          </tr>
        </thead>
        <tbody>
          ${guests.map((g, idx) => `
            <tr>
              <td style="border: 1px solid #777; padding: 5px; text-align: center;">${idx + 1}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600;">${g.name}</td>
              <td style="border: 1px solid #777; padding: 5px;">${g.category}</td>
              <td style="border: 1px solid #777; padding: 5px; text-align: center; font-weight: bold;">${g.pax}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600; color: #874E4A;">${g.table || '-'}</td>
              <td style="border: 1px solid #777; padding: 5px;">${g.rsvp}</td>
              <td style="border: 1px solid #777; padding: 5px; text-align: center;">${g.inviteSent ? 'Terkirim' : 'Belum'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${renderSignatureBlock('Penerima Tamu / Usher Lead', 'Penanggung Jawab Keluarga')}
    `;
  }

  function getSeserahanHtml() {
    const list = seserahan || [];
    const totalActual = list.reduce((a, b) => a + (Number(b.actual) || 0), 0);
    const totalJasa = list.reduce((a, b) => a + (Number(b.jasaHias) || 0), 0);
    const grandTotal = totalActual + totalJasa;
    const readyCount = list.filter(s => s.status === 'siap').length;

    return `
      ${renderDocHeader('Daftar Inventaris Kotak Seserahan & Hantaran')}
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 14px; font-size: 11px; text-align: center;">
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL KOTAK</div>
          <div style="font-weight: bold; font-size: 12px; color: #3E2723;">${list.length} Kotak</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">KOTAK SIAP</div>
          <div style="font-weight: bold; font-size: 12px; color: #237A3B;">${readyCount} Kotak</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">BELANJA BARANG</div>
          <div style="font-weight: bold; font-size: 12px; color: #874E4A;">${formatRupiah(totalActual)}</div>
        </div>
        <div style="border: 1px solid #CCC; padding: 6px; border-radius: 6px; background: #FAF4F0;">
          <div style="color: #666; font-size: 10px;">TOTAL BIAYA</div>
          <div style="font-weight: bold; font-size: 12px; color: #3E2723;">${formatRupiah(grandTotal)}</div>
        </div>
      </div>

      <table class="print-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 10px;">
        <thead>
          <tr style="background: #F4EBE6;">
            <th style="border: 1px solid #777; padding: 5px; width: 6%; text-align: center;">Kotak</th>
            <th style="border: 1px solid #777; padding: 5px; width: 14%;">Penerima</th>
            <th style="border: 1px solid #777; padding: 5px; width: 22%;">Tema & Kategori</th>
            <th style="border: 1px solid #777; padding: 5px; width: 28%;">Rincian Isi Barang</th>
            <th style="border: 1px solid #777; padding: 5px; width: 12%;">Biaya Belanja</th>
            <th style="border: 1px solid #777; padding: 5px; width: 10%;">PIC Pembawa</th>
            <th style="border: 1px solid #777; padding: 5px; width: 8%;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(s => `
            <tr>
              <td style="border: 1px solid #777; padding: 5px; text-align: center; font-weight: bold;">#${s.kotakNumber}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: 600;">${s.penerima}</td>
              <td style="border: 1px solid #777; padding: 5px;">
                <strong>${s.title}</strong>
                <br><small style="color: #666;">${s.category}</small>
              </td>
              <td style="border: 1px solid #777; padding: 5px;">${s.items}</td>
              <td style="border: 1px solid #777; padding: 5px; font-weight: bold;">
                ${formatRupiah(s.actual)}
                ${s.jasaHias ? `<br><small style="color: #666; font-weight: normal;">Hias: ${formatRupiah(s.jasaHias)}</small>` : ''}
              </td>
              <td style="border: 1px solid #777; padding: 5px;">${s.pic || '-'}</td>
              <td style="border: 1px solid #777; padding: 5px; text-transform: capitalize; font-weight: 600;">${s.status.replace('_', ' ')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      ${renderSignatureBlock('Penanggung Jawab Seserahan', 'Keluarga Pengantin')}
    `;
  }

  function getAllHtml() {
    return `
      
      <div style="text-align: center; padding: 100px 20px 60px; page-break-after: always; break-after: page;">
        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #C5A059; margin-bottom: 20px;">ETERNALBLISS • WEDDING PLANNER</h3>
        <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: bold; color: #3E2723; margin-bottom: 16px;">${profile.coupleTitle || (profile.brideName + ' & ' + profile.groomName)}</h1>
        <p style="font-size: 14px; color: #874E4A; font-weight: 600; margin-bottom: 30px;">${dateFormatted}</p>
        <p style="font-size: 12px; color: #555; margin-bottom: 70px;">${profile.weddingVenue}<br>${profile.weddingCity}</p>
        
        <div style="display: inline-block; padding: 10px 24px; border: 2px solid #5A3E36; border-radius: 12px; font-size: 12px; font-weight: bold; color: #3E2723; text-transform: uppercase; letter-spacing: 0.15em;">
          BUNDEL LENGKAP LAPORAN PERSIAPAN PERNIKAHAN
        </div>
      </div>

      <div style="page-break-after: always; break-after: page;">
        ${getRundownHtml()}
      </div>

      <div style="page-break-after: always; break-after: page;">
        ${getBudgetHtml()}
      </div>

      <div style="page-break-after: always; break-after: page;">
        ${getTimelineHtml()}
      </div>

      <div style="page-break-after: always; break-after: page;">
        ${getVendorHtml()}
      </div>

      <div style="page-break-after: always; break-after: page;">
        ${getGuestsHtml()}
      </div>

      <div>
        ${getSeserahanHtml()}
      </div>
    `;
  }

  if (moduleName === 'rundown') return { html: getRundownHtml(), title: 'Pratinjau: Rundown Hari-H & Kontak Darurat' };
  if (moduleName === 'budget') return { html: getBudgetHtml(), title: 'Pratinjau: Laporan Anggaran & Biaya' };
  if (moduleName === 'timeline') return { html: getTimelineHtml(), title: 'Pratinjau: Checklist Persiapan Pernikahan' };
  if (moduleName === 'vendor') return { html: getVendorHtml(), title: 'Pratinjau: Direktori Vendor & Kontrak' };
  if (moduleName === 'guests') return { html: getGuestsHtml(), title: 'Pratinjau: Daftar Tamu Undangan & Meja' };
  if (moduleName === 'seserahan') return { html: getSeserahanHtml(), title: 'Pratinjau: Daftar Kotak Seserahan' };
  return { html: getAllHtml(), title: 'Pratinjau: Bundel Lengkap Seluruh Dokumen' };
}

function triggerPrint(moduleName) {
  const doc = buildPrintDocument(moduleName);

  const previewSheet = document.getElementById('print-preview-sheet');
  if (previewSheet) {
    previewSheet.innerHTML = doc.html;
  }

  const modalTitle = document.getElementById('print-preview-modal-title');
  if (modalTitle) {
    modalTitle.textContent = doc.title;
  }

  const printArea = document.getElementById('print-document-area');
  if (printArea) {
    printArea.innerHTML = doc.html;
  }

  openModal('modal-print-preview');
}

function executeSystemPrint() {
  window.print();
}

function handleJsonImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    const ok = store.importJson(content);
    if (ok) {
      showToast('Data berhasil diimpor & dipulihkan!', 'check-check');
      renderAll();
    } else {
      alert('Gagal mengimpor file. Pastikan file JSON sesuai format EternalBliss.');
    }
  };
  reader.readAsText(file);
}

function copyVendorRfqTemplate() {
  const profile = store.state.profile;
  const weddingDate = new Date(profile.weddingDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const text = `Halo, salam hangat dari kami (${profile.coupleTitle || 'Sarah & Rizky'}).\n\nKami berencana menyelenggarakan pernikahan pada:\n🗓 Tanggal: ${weddingDate}\n📍 Lokasi: ${profile.weddingVenue}\n\nKami sangat tertarik dengan portofolio Anda dan ingin meminta informasi pricelist serta ketersediaan jadwal (availability) untuk tanggal tersebut.\n\nTerima kasih banyak, ditunggu kabar baiknya! ✨`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Draf penawaran WA berhasil disalin!', 'copy');
    }).catch(() => {
      showToast('Gagal menyalin, periksa izin clipboard.', 'alert-circle');
    });
  } else {
    showToast('Draf penawaran siap dibagikan!', 'copy');
  }
}

function showPwaInstallGuide() {
  openModal('modal-pwa-guide');
}

function openCleanResetModal() {
  const brideInput = document.getElementById('reset-bride-name');
  const groomInput = document.getElementById('reset-groom-name');
  const dateInput = document.getElementById('reset-wedding-date');
  const venueInput = document.getElementById('reset-wedding-venue');
  const budgetInput = document.getElementById('reset-total-budget');
  const keepTasksInput = document.getElementById('reset-keep-tasks');

  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 180);
  const defaultDateStr = defaultDate.toISOString().split('T')[0];

  if (brideInput) brideInput.value = '';
  if (groomInput) groomInput.value = '';
  if (dateInput) dateInput.value = defaultDateStr;
  if (venueInput) venueInput.value = '';
  if (budgetInput) budgetInput.value = '';
  if (keepTasksInput) keepTasksInput.checked = true;

  openModal('modal-clean-reset');
}

function executeCleanReset(e) {
  if (e) e.preventDefault();
  const bride = (document.getElementById('reset-bride-name')?.value || '').trim();
  const groom = (document.getElementById('reset-groom-name')?.value || '').trim();
  const date = document.getElementById('reset-wedding-date')?.value || '';
  const venue = (document.getElementById('reset-wedding-venue')?.value || '').trim();
  const budget = Number(document.getElementById('reset-total-budget')?.value) || 0;
  const keepTasks = document.getElementById('reset-keep-tasks')?.checked ?? true;

  store.resetToCleanSlate({
    brideName: bride,
    groomName: groom,
    weddingDate: date,
    weddingVenue: venue || 'Venue Pilihan',
    totalBudget: budget
  }, keepTasks);

  closeModal('modal-clean-reset');
  switchTab('dashboard');
  renderAll();
  triggerRosePetals(4000);
  showToast('Aplikasi siap! Data berhasil dibersihkan untuk pernikahan Anda.', 'sparkles');
}

function executeTotalWipeClean() {
  if (confirm('Yakin ingin mengosongkan SELURUH data aplikasi 100% tanpa mengisi form sekarang? Anda bisa mengisi profil nanti.')) {
    store.resetToCleanSlate({}, false);
    closeModal('modal-clean-reset');
    switchTab('dashboard');
    renderAll();
    showToast('Seluruh data berhasil dikosongkan bersih (Clean Slate).', 'trash-2');
  }
}

function handleRestoreDemoData() {
  if (confirm('Muat kembali data simulasi demo (Sarah & Rizky)? Data pernikahan Anda saat ini akan digantikan dengan data contoh.')) {
    store.resetToDefault();
    renderAll();
    showToast('Data simulasi demo (Sarah & Rizky) berhasil dimuat kembali.', 'rotate-ccw');
  }
}

let petalsCanvas = null;
let petalsCtx = null;
let petalParticles = [];
let petalsAnimationId = null;
let petalsEndTime = 0;

function initCelebrationCanvas() {
  petalsCanvas = document.getElementById('celebration-canvas');
  if (!petalsCanvas) return;
  petalsCtx = petalsCanvas.getContext('2d');
  resizePetalsCanvas();
  window.addEventListener('resize', resizePetalsCanvas);
}

function resizePetalsCanvas() {
  if (petalsCanvas) {
    petalsCanvas.width = window.innerWidth;
    petalsCanvas.height = window.innerHeight;
  }
}

function triggerRosePetals(durationMs = 4500) {
  if (!petalsCanvas) initCelebrationCanvas();
  if (!petalsCanvas || !petalsCtx) return;

  petalsEndTime = Date.now() + durationMs;
  const count = 55;
  const colors = ['#E8C5C8', '#D29D9D', '#F5DDD5', '#DFB967', '#C5A059', '#FFEBEF'];

  for (let i = 0; i < count; i++) {
    petalParticles.push({
      x: Math.random() * petalsCanvas.width,
      y: -20 - Math.random() * 80,
      size: 8 + Math.random() * 11,
      color: colors[Math.floor(Math.random() * colors.length)],
      isGold: Math.random() > 0.6,
      vx: (Math.random() - 0.5) * 2.2,
      vy: 1.8 + Math.random() * 2.6,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 4,
      oscillation: Math.random() * Math.PI * 2,
      vOsc: 0.03 + Math.random() * 0.04
    });
  }

  if (!petalsAnimationId) {
    animatePetals();
  }
}

function animatePetals() {
  if (!petalsCtx || !petalsCanvas) return;
  petalsCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);

  const now = Date.now();
  const isSpawning = now < petalsEndTime;

  for (let i = petalParticles.length - 1; i >= 0; i--) {
    const p = petalParticles[i];
    p.oscillation += p.vOsc;
    p.x += p.vx + Math.sin(p.oscillation) * 1.3;
    p.y += p.vy;
    p.rotation += p.vRot;

    petalsCtx.save();
    petalsCtx.translate(p.x, p.y);
    petalsCtx.rotate((p.rotation * Math.PI) / 180);

    if (p.isGold) {
      
      petalsCtx.fillStyle = p.color;
      petalsCtx.beginPath();
      petalsCtx.ellipse(0, 0, p.size * 0.35, p.size * 0.65, 0, 0, Math.PI * 2);
      petalsCtx.fill();
    } else {
      
      petalsCtx.fillStyle = p.color;
      petalsCtx.beginPath();
      petalsCtx.ellipse(0, 0, p.size * 0.55, p.size * 0.85, Math.PI / 4, 0, Math.PI * 2);
      petalsCtx.fill();
      petalsCtx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      petalsCtx.lineWidth = 0.8;
      petalsCtx.stroke();
    }

    petalsCtx.restore();

    if (p.y > petalsCanvas.height + 30) {
      if (isSpawning) {
        p.y = -20;
        p.x = Math.random() * petalsCanvas.width;
      } else {
        petalParticles.splice(i, 1);
      }
    }
  }

  if (petalParticles.length > 0) {
    petalsAnimationId = requestAnimationFrame(animatePetals);
  } else {
    petalsAnimationId = null;
    petalsCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);
  }
}

const STANDARD_TABLES = [
  { id: 'tbl-1', name: 'Meja VIP 01', category: 'VIP', capacity: 8 },
  { id: 'tbl-2', name: 'Meja Keluarga 02', category: 'Keluarga', capacity: 8 },
  { id: 'tbl-3', name: 'Meja Sahabat 03', category: 'Sahabat', capacity: 8 },
  { id: 'tbl-4', name: 'Meja Kantor 04', category: 'Teman Kantor', capacity: 8 },
  { id: 'tbl-5', name: 'Meja Keluarga 05', category: 'Keluarga', capacity: 8 },
  { id: 'tbl-6', name: 'Meja VIP 06', category: 'VIP', capacity: 8 }
];

function switchGuestSubtab(mode) {
  const listBtn = document.getElementById('btn-subtab-guest-list');
  const seatingBtn = document.getElementById('btn-subtab-guest-seating');
  const listContainer = document.getElementById('container-guest-list');
  const seatingContainer = document.getElementById('container-guest-seating');

  if (mode === 'seating') {
    listContainer.classList.add('hidden');
    seatingContainer.classList.remove('hidden');
    if (listBtn) listBtn.className = 'flex-1 py-1.5 rounded-xl text-[#7D5F56] hover:text-[#874E4A] transition-all flex items-center justify-center gap-1.5';
    if (seatingBtn) seatingBtn.className = 'flex-1 py-1.5 rounded-xl bg-white text-[#874E4A] shadow-sm transition-all flex items-center justify-center gap-1.5';
    renderSeatingChart();
  } else {
    seatingContainer.classList.add('hidden');
    listContainer.classList.remove('hidden');
    if (seatingBtn) seatingBtn.className = 'flex-1 py-1.5 rounded-xl text-[#7D5F56] hover:text-[#874E4A] transition-all flex items-center justify-center gap-1.5';
    if (listBtn) listBtn.className = 'flex-1 py-1.5 rounded-xl bg-white text-[#874E4A] shadow-sm transition-all flex items-center justify-center gap-1.5';
  }
  lucide.createIcons();
}

function renderSeatingChart() {
  const container = document.getElementById('seating-tables-grid');
  if (!container) return;

  const guests = store.state.guests;

  container.innerHTML = STANDARD_TABLES.map(tbl => {
    const seatedGuests = guests.filter(g => g.table && g.table.toLowerCase().trim() === tbl.name.toLowerCase().trim());
    const filledPax = seatedGuests.reduce((sum, g) => sum + (Number(g.pax) || 1), 0);
    const capacity = tbl.capacity;
    const isFull = filledPax >= capacity;

    return `
      <div onclick="openTableDetail('${tbl.id}')" class="round-table-container glass-card rounded-3xl p-3.5 border border-[#F1DFDA] flex flex-col items-center justify-between shadow-subtle hover:border-[#C5A059]">
        <div class="w-full flex items-center justify-between mb-1">
          <span class="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${tbl.category === 'VIP' ? 'bg-amber-100 text-amber-800' : tbl.category === 'Keluarga' ? 'bg-[#FAF0E8] text-[#874E4A]' : 'bg-stone-100 text-[#5A3E36]'}">
            ${tbl.category}
          </span>
          <span class="text-[10px] font-bold ${isFull ? 'text-[#874E4A]' : 'text-[#2A6E3B]'}">
            ${filledPax}/${capacity}
          </span>
        </div>

        <div class="relative w-24 h-24 my-2 flex items-center justify-center">
          <div class="w-14 h-14 rounded-full round-table-center flex items-center justify-center text-center p-1 z-10">
            <span class="font-serif font-bold text-[10px] text-[#3E2723] leading-tight">${tbl.name.replace('Meja ', '')}</span>
          </div>

          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            ${Array.from({ length: capacity }).map((_, idx) => {
              const angle = (idx * (360 / capacity)) * (Math.PI / 180);
              const radius = 38;
              const x = Math.round(radius * Math.cos(angle));
              const y = Math.round(radius * Math.sin(angle));
              const isFilled = idx < filledPax;
              return `<span class="seat-dot ${isFilled ? 'filled' : 'empty'} absolute" style="transform: translate(${x}px, ${y}px)"></span>`;
            }).join('')}
          </div>
        </div>

        <div class="w-full text-center mt-1 pt-1.5 border-t border-[#F5E8E2]">
          <span class="text-[11px] font-semibold text-[#5A3E36] block truncate">${tbl.name}</span>
          <span class="text-[10px] text-[#7D5F56]">${seatedGuests.length} Undangan (${filledPax} Pax)</span>
        </div>
      </div>
    `;
  }).join('');
}

function openTableDetail(tblId) {
  const tbl = STANDARD_TABLES.find(t => t.id === tblId);
  if (!tbl) return;

  const guests = store.state.guests;
  const seatedGuests = guests.filter(g => g.table && g.table.toLowerCase().trim() === tbl.name.toLowerCase().trim());
  const filledPax = seatedGuests.reduce((sum, g) => sum + (Number(g.pax) || 1), 0);

  document.getElementById('detail-table-title').textContent = tbl.name;
  document.getElementById('detail-table-category').textContent = tbl.category;
  document.getElementById('detail-table-capacity').textContent = `${filledPax} dari ${tbl.capacity} Kursi Terisi`;

  const guestListEl = document.getElementById('detail-table-guest-list');
  if (guestListEl) {
    if (seatedGuests.length === 0) {
      guestListEl.innerHTML = `<p class="text-xs text-[#7D5F56] py-4 text-center">Belum ada tamu yang diplot ke meja ini.</p>`;
    } else {
      guestListEl.innerHTML = seatedGuests.map(g => {
        let badge = 'badge-belum';
        if (g.rsvp === 'Hadir') badge = 'badge-hadir';
        else if (g.rsvp === 'Ragu-ragu') badge = 'badge-ragu';

        const cleanPhone = (g.phone || '').replace(/\D/g, '');

        return `
          <div class="p-2.5 rounded-2xl bg-[#FAF4F0] border border-[#F1DFDA] flex items-center justify-between text-xs">
            <div>
              <div class="font-semibold text-[#3E2723] flex items-center gap-1.5">
                ${g.name}
                <span class="text-[10px] font-bold px-1.5 py-0.2 rounded-full ${badge}">${g.rsvp}</span>
              </div>
              <span class="text-[11px] text-[#7D5F56]">${g.pax} Pax • Kategori: ${g.category}</span>
            </div>
            ${cleanPhone ? `
              <a href="https://api.whatsapp.com/send?phone=${cleanPhone}" target="_blank" class="p-1.5 text-green-600 bg-white rounded-lg shadow-xs hover:bg-green-50" title="Kirim WA">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              </a>
            ` : ''}
          </div>
        `;
      }).join('');
    }
  }

  openModal('modal-table-detail');
}

function openCateringCalculatorModal() {
  const confirmedPax = store.state.guests.filter(g => g.rsvp === 'Hadir').reduce((a, b) => a + (Number(b.pax) || 1), 0);
  const totalPax = confirmedPax > 0 ? Math.round(confirmedPax * 1.25) : 500;
  
  const invitesInput = document.getElementById('input-cat-invites');
  const paxInput = document.getElementById('input-cat-pax');
  if (invitesInput) invitesInput.value = Math.round(totalPax / 2);
  if (paxInput) paxInput.value = totalPax;

  calculateIndoCatering();
  openModal('modal-catering-calculator');
}

function calculateIndoCatering() {
  const invites = Number(document.getElementById('input-cat-invites').value) || 250;
  let pax = Number(document.getElementById('input-cat-pax').value) || (invites * 2);
  
  const buffetRatio = Number(document.getElementById('select-cat-buffet-ratio').value) || 0.5;
  const stallMultiplier = Number(document.getElementById('select-cat-stall-multiplier').value) || 4.5;

  const buffetPortions = Math.round(pax * buffetRatio);
  const totalStalls = Math.round(pax * stallMultiplier);

  const zuppaQty = Math.round(totalStalls * 0.25);
  const sateQty = Math.round(totalStalls * 0.25);
  const beefQty = Math.round(totalStalls * 0.20);
  const siomayQty = Math.round(totalStalls * 0.15);
  const dessertQty = Math.round(totalStalls * 0.15);

  const estCost = (buffetPortions * 95000) + (totalStalls * 24000);

  document.getElementById('calc-buffet-result').textContent = `${buffetPortions.toLocaleString('id-ID')} Porsi`;
  document.getElementById('calc-stall-result').textContent = `${totalStalls.toLocaleString('id-ID')} Porsi`;

  document.getElementById('stall-zuppa-qty').textContent = `${zuppaQty.toLocaleString('id-ID')} Porsi`;
  document.getElementById('stall-sate-qty').textContent = `${sateQty.toLocaleString('id-ID')} Porsi`;
  document.getElementById('stall-beef-qty').textContent = `${beefQty.toLocaleString('id-ID')} Porsi`;
  document.getElementById('stall-siomay-qty').textContent = `${siomayQty.toLocaleString('id-ID')} Porsi`;
  document.getElementById('stall-dessert-qty').textContent = `${dessertQty.toLocaleString('id-ID')} Porsi`;

  document.getElementById('calc-catering-cost').textContent = formatRupiah(estCost);
}

function applyCateringToBudget() {
  const estCostText = document.getElementById('calc-catering-cost').textContent;
  const numericCost = Number(estCostText.replace(/\D/g, '')) || 75000000;
  
  const buffetText = document.getElementById('calc-buffet-result').textContent;
  const stallText = document.getElementById('calc-stall-result').textContent;

  const kateringExp = store.state.expenses.find(e => e.name.toLowerCase().includes('katering'));
  if (kateringExp) {
    kateringExp.real = numericCost;
    kateringExp.est = numericCost;
    kateringExp.notes = `Rasio: ${buffetText} Buffet + ${stallText} Gubukan`;
    store.saveState();
  }

  closeModal('modal-catering-calculator');
  triggerRosePetals(4000);
  showToast(`Anggaran katering diperbarui ke ${formatRupiah(numericCost)}!`, 'utensils');
}

document.addEventListener('DOMContentLoaded', () => {
  initCelebrationCanvas();
  
  store.subscribe(() => {
    renderAll();
  });

  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.tab;
      switchTab(tabId);
      if (history.pushState) {
        history.pushState(null, null, '#' + tabId);
      }
    });
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`view-${initialHash}`)) {
    switchTab(initialHash);
  } else {
    switchTab('home');
  }

  setInterval(updateCountdown, 1000);

  const budgetCatBtns = document.querySelectorAll('.btn-budget-cat');
  budgetCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      budgetCatBtns.forEach(b => b.classList.remove('bg-[#874E4A]', 'text-white'));
      btn.classList.add('bg-[#874E4A]', 'text-white');
      window.currentBudgetCategory = btn.dataset.cat;
      renderBudget();
    });
  });

  const phaseSelect = document.getElementById('select-timeline-phase');
  if (phaseSelect) {
    phaseSelect.addEventListener('change', (e) => {
      window.currentTimelinePhase = e.target.value;
      renderTimeline();
    });
  }

  const statusSelect = document.getElementById('select-timeline-status');
  if (statusSelect) {
    statusSelect.addEventListener('change', (e) => {
      window.currentTimelineStatus = e.target.value;
      renderTimeline();
    });
  }

  const guestSearch = document.getElementById('input-guest-search');
  if (guestSearch) {
    guestSearch.addEventListener('input', (e) => {
      window.currentGuestSearch = e.target.value;
      renderGuests();
    });
  }

  const guestCatFilter = document.getElementById('select-guest-category');
  if (guestCatFilter) {
    guestCatFilter.addEventListener('change', (e) => {
      window.currentGuestCategory = e.target.value;
      renderGuests();
    });
  }

  const guestRsvpFilter = document.getElementById('select-guest-rsvp');
  if (guestRsvpFilter) {
    guestRsvpFilter.addEventListener('change', (e) => {
      window.currentGuestRsvp = e.target.value;
      renderGuests();
    });
  }

  const sesRecipientFilter = document.getElementById('select-seserahan-recipient');
  if (sesRecipientFilter) {
    sesRecipientFilter.addEventListener('change', (e) => {
      window.currentSeserahanRecipient = e.target.value;
      renderSeserahan();
    });
  }

  const sesStatusFilter = document.getElementById('select-seserahan-status');
  if (sesStatusFilter) {
    sesStatusFilter.addEventListener('change', (e) => {
      window.currentSeserahanStatus = e.target.value;
      renderSeserahan();
    });
  }

  const sesCategoryFilter = document.getElementById('select-seserahan-category');
  if (sesCategoryFilter) {
    sesCategoryFilter.addEventListener('change', (e) => {
      window.currentSeserahanCategory = e.target.value;
      renderSeserahan();
    });
  }

  const toggleViewBtn = document.getElementById('btn-toggle-view');
  const appContainer = document.querySelector('.app-container');
  const modeIndicator = document.getElementById('mobile-mode-indicator');
  const desktopMenuLinks = document.getElementById('desktop-menu-links');

  if (toggleViewBtn && appContainer) {
    toggleViewBtn.addEventListener('click', () => {
      const isExpanded = appContainer.classList.toggle('expanded-view');
      document.body.classList.toggle('expanded-view-mode', isExpanded);
      
      if (isExpanded) {
        toggleViewBtn.innerHTML = `<i data-lucide="smartphone" class="w-4 h-4 text-[#C5A059]"></i> Mode Simulasi HP (Mobile)`;
        if (modeIndicator) modeIndicator.style.display = 'none';
        if (desktopMenuLinks) desktopMenuLinks.style.display = 'flex';
      } else {
        toggleViewBtn.innerHTML = `<i data-lucide="monitor" class="w-4 h-4 text-[#C5A059]"></i> Buka Layar Penuh Desktop`;
        if (modeIndicator) modeIndicator.style.display = 'flex';
        if (desktopMenuLinks) desktopMenuLinks.style.display = 'none';
      }
      lucide.createIcons();
    });
  }

  renderAll();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('EternalBliss PWA Service Worker Registered', reg))
        .catch(err => console.log('Service Worker registration failed:', err));
    });
  }
});
