# OTIKA — Customize AI Agent

Website resmi PT Otika Solusi Nusantara untuk memperkenalkan layanan Customize AI Agent melalui WhatsApp dan Instagram.

## Teknologi

V3 dikerjakan di branch `redesign/otika-landing-v3`. Halaman statis tetap
dapat dideploy ke Vercel maupun container Nginx/Easypanel.

Desain V3 mempertahankan logo OTIKA, warna biru/cyan, klien, testimoni,
harga paket, serta seluruh URL halaman yang sudah ada. Hero menyediakan
contoh percakapan interaktif untuk otomotif, material, dan travel; contoh
tersebut merupakan ilustrasi, bukan koneksi langsung ke layanan AI.

Efek visual memakai CSS dan IntersectionObserver tanpa dependensi animasi.
Preferensi `prefers-reduced-motion` dihormati. Halaman legal, fitur, dan
kalkulator dimuat terpisah agar tidak membebani unduhan awal beranda.
Style V3 ada di `src/v3.css`.

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Nginx untuk container production

## Menjalankan secara lokal

Pastikan Node.js 20 atau versi LTS yang kompatibel sudah tersedia.

```bash
npm ci
npm run dev
```

Server development berjalan pada `http://localhost:8080`.

## Pemeriksaan sebelum deploy

```bash
npm run lint
npm run build
```

Hasil build production tersimpan di folder `dist`.

## Deploy ke Vercel

Repository sudah menyediakan `vercel.json` untuk menangani clean URL, cache aset, dan fallback halaman.

Konfigurasi build:

```text
Framework Preset : Vite
Build Command    : npm run build
Output Directory : dist
Install Command  : npm ci
```

## Deploy ke Netlify

Repository menyediakan `netlify.toml` dengan build Vite, cache aset, dan
fallback SPA agar URL halaman langsung tidak menghasilkan 404.

Hubungkan repository ke Netlify lalu pilih branch yang ingin dideploy.
Konfigurasi build akan terbaca otomatis:

```text
Build Command     : npm run build
Publish Directory : dist
Node.js           : 20
```

Meta tag verifikasi Search Console sengaja tidak disertakan pada branch V3.
Tambahkan token verifikasi baru setelah domain produksi V3 ditentukan.

## Deploy ke Docker atau Easypanel

`Dockerfile` menggunakan multi-stage build Node.js dan Nginx. Nginx sudah dikonfigurasi untuk melayani aset statis, route halaman legal, dan endpoint health check `/health`.

```bash
docker build -t otika-landing .
docker run --rm -p 8080:80 otika-landing
```

Pada Easypanel, gunakan deployment dari repository dan arahkan domain ke port container `80`.

## Halaman

- `/` — Landing page
- `/kebijakan-privasi`
- `/syarat-ketentuan`
- `/kebijakan-penggunaan`
- `/fitur/whatsapp-api`
- `/fitur/whatsapp-coexistence`
- `/fitur/ai-agent`
- `/fitur/follow-up-ai`
- `/fitur/broadcast-whatsapp`
- `/kalkulator-biaya-whatsapp`

Menu Blog tetap mengarah ke https://otika.biz.id/blog/.

## Kontak

- Website: https://otika.biz.id
- Email: hai@otika.biz.id
- WhatsApp: 0851-1720-2425

© PT Otika Solusi Nusantara.
