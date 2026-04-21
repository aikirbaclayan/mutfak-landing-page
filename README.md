# Mutfak Yazılım — İtibar Yönetimi Platformu

Restoran ve hizmet işletmeleri için **QR kod tabanlı geri bildirim**, **işletme paneli** ve **itibar yönetimi** odaklı bir web uygulaması. Next.js 14 (App Router), Prisma ve PostgreSQL üzerinde çalışır.

---

## Özellikler

- **QR ile müşteri deneyimi** — Masaya özel QR ile hızlı geri bildirim toplama
- **Çok kiracılı yapı** — İşletme (`Business`) bazlı veri modeli ve kullanıcı rolleri
- **Kimlik doğrulama** — NextAuth.js ile oturum yönetimi
- **AI ve iletişim altyapısı** — OpenAI, Twilio ve e-posta (SMTP) için hazır ortam değişkenleri
- **Ödeme alanları** — Şemada abonelik; Stripe ve İyzico için yapılandırma şablonu
- **Modern arayüz** — React 18, Tailwind CSS, Radix UI / shadcn tarzı bileşenler

---

## Teknoloji yığını


| Katman   | Teknoloji                                               |
| -------- | ------------------------------------------------------- |
| Uygulama | [Next.js 14](https://nextjs.org/), React 18, TypeScript |
| Stil     | Tailwind CSS                                            |
| Veri     | [Prisma](https://www.prisma.io/), PostgreSQL            |
| Kimlik   | [NextAuth.js](https://next-auth.js.org/)                |
| Diğer    | OpenAI SDK, Twilio, Nodemailer, Zod, Zustand            |


---

## Gereksinimler

- **Node.js** 18.x veya üzeri (20 LTS önerilir)
- **npm** veya uyumlu paket yöneticisi
- **PostgreSQL** 14+ (yerel veya Docker)

---

## Hızlı başlangıç

### 1. Depoyu klonlayın ve bağımlılıkları yükleyin

```bash
git clone https://github.com/aikirbaclayan/mutfak-landing-page.git
cd mutfak-landing-page
npm install
```

### 2. Ortam değişkenleri

`env.template` dosyasını `.env.local` olarak kopyalayın ve değerleri doldurun.

**Windows (PowerShell):**

```powershell
Copy-Item env.template .env.local
```

**macOS / Linux:**

```bash
cp env.template .env.local
```

**Önemli:** Geliştirme sunucusu varsayılan olarak **3003** portunda çalışır (`npm run dev`). `NEXTAUTH_URL` ve `APP_URL` değerlerini buna göre ayarlayın, örneğin:

```env
NEXTAUTH_URL="http://localhost:3003"
APP_URL="http://localhost:3003"
```

### 3. Veritabanı

PostgreSQL’in ayakta olduğundan emin olun. Örnek Docker komutu (tek satır):

```bash
docker run --name mutfak-postgres -e POSTGRES_DB=mutfak_yazilim -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:15
```

`DATABASE_URL` değerini `.env.local` içinde güncelleyin, ardından:

```bash
npm run db:push
npm run db:generate
```

### 4. Geliştirme sunucusu

```bash
npm run dev
```

Uygulama: **[http://localhost:3003](http://localhost:3003)**

---

## NPM scriptleri


| Komut                 | Açıklama                             |
| --------------------- | ------------------------------------ |
| `npm run dev`         | Geliştirme sunucusu (port **3003**)  |
| `npm run build`       | Üretim derlemesi                     |
| `npm run start`       | Üretim sunucusu (port **3003**)      |
| `npm run lint`        | ESLint                               |
| `npm run db:push`     | Şemayı veritabanına uygular (Prisma) |
| `npm run db:migrate`  | Geliştirme migrasyonları             |
| `npm run db:studio`   | Prisma Studio                        |
| `npm run db:generate` | Prisma Client üretir                 |


---

## Proje yapısı

```
src/
├── app/                 # App Router — sayfalar, layout, API route’ları
│   ├── api/
│   ├── auth/
│   ├── dashboard/
│   └── qr/
├── components/          # React bileşenleri (ui, reputation, …)
├── lib/                 # Yardımcılar, yapılandırma
└── styles/

prisma/
└── schema.prisma        # Veritabanı modeli
```

---

## Veri modeli (özet)

- **Business** — İşletme, plan, ayarlar  
- **User** — İşletmeye bağlı kullanıcılar ve roller  
- **QRCode** — QR kodlar ve masa ilişkileri  
- **Table** — Masa düzeni  
- **Review** — Geri bildirim / yorum kayıtları  
- **PlatformIntegration** — Dış platform bağlantıları  
- **Subscription** — Abonelik alanları (Stripe / İyzico referansları şemada tanımlı)

---

## Güvenlik ve üretim

- Gizli anahtarları asla repoya eklemeyin; yalnızca `.env.local` veya güvenli gizli yönetimi kullanın.
- Üretimde güçlü `NEXTAUTH_SECRET`, HTTPS ve güvenilir `DATABASE_URL` kullanın.
- Twilio, OpenAI ve ödeme anahtarları için ayrı kısıtlı anahtarlar ve webhook doğrulaması uygulayın.

---

## Katkı

İçerik, issue ve pull request önerileri için lütfen depo kurallarını veya iletişim bilgilerinizi buraya ekleyin.

---

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında yayınlanmaktadır.

**İlgili depo (landing / tanıtım):** [github.com/aikirbaclayan/mutfak-landing-page](https://github.com/aikirbaclayan/mutfak-landing-page)

---

**İletişim / ürün:** İhtiyaca göre buraya web sitesi, e-posta veya dokümantasyon bağlantılarınızı ekleyin.