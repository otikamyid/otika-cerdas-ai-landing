# OTIKA — Customize AI Agent

Website resmi PT Otika Solusi Nusantara untuk memperkenalkan layanan Customize AI Agent melalui WhatsApp dan Instagram.

## Teknologi

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

## Kontak

- Website: https://otika.biz.id
- Email: hai@otika.biz.id
- WhatsApp: 0851-1720-2425

© PT Otika Solusi Nusantara.
