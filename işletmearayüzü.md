Mutfak Yazılım - Ultra Detaylı Panel Tasarımı ve Etkileşim Kılavuzu
A. Genişletilmiş Tasarım Sistemi (Advanced Design System)
Bu sistem, sadece renk ve fontları değil, arayüzün "his"sini ve "davranışını" da tanımlar.

Renk Paleti ve Tipografi: Belirlendiği gibi korunur.

Gölge ve Kenarlık (Shadows & Borders):

Kart Gölgesi: box-shadow: 0px 4px 12px rgba(44, 62, 80, 0.08); - Kartlara modern ve havada duran bir his vermek için yumuşak, yayvan bir gölge.

Kenarlık: border: 1px solid #EAECEF; - Kartlar ve input alanları gibi elementleri birbirinden ayırmak için ince ve nötr bir çizgi.

Animasyon ve Geçişler (Animation & Transitions):

Tüm hover ve focus etkileşimleri transition: all 0.2s ease-in-out; ile yumuşatılır. Bu, arayüzün daha akıcı ve profesyonel hissettirmesini sağlar.

Durumlar (States):

Hover: Butonlar ve tıklanabilir elementlerin üzerine gelindiğinde gölgesi hafifçe artar veya rengi %10 açılır.

Focus: Metin giriş alanları seçildiğinde, çerçevesi Vurgu Rengi (Turuncu) olur.

Disabled: Pasif butonlar ve alanlar %50 opaklıkta ve not-allowed cursor'ı ile gösterilir.

Boş Durum ve Yükleme (Empty & Loading States):

Yükleme (Loading): Veri çekilen alanlarda (grafikler, listeler) içeriğin iskeletini yansıtan skeleton loader (gri, yanıp sönen barlar) kullanılır. Bu, kullanıcının bir şeylerin yüklendiğini anlamasını sağlar.

Boş Durum (Empty State): Bir listede (örn: hiç yorum yoksa) veya grafikte veri olmadığında, durumu açıklayan bir ikon ve kısa, yardımcı bir metin gösterilir. Örn: "Harika! Henüz yanıtlanmamış kötü yorumunuz bulunmuyor."

B. Hiper-Detaylı Ekran Tasarımları
0. İlk Giriş & Onboarding (Yeni Kullanıcı Deneyimi)
Kullanıcı ilk kez giriş yaptığında, ekranın ortasında modal bir pencere açılır: 

"Mutfak Yazılım'a Hoş Geldiniz! 🚀 Sadece 3 adımda panelinizi uçuşa hazırlayalım." 


Adım 1: Profilinizi Onaylayın: İşletme adı ve logo gibi bilgileri teyit ettirir.


Adım 2: İlk Yorum Kanalınızı Ekleyin: En çok kullandığı platformu (örn: Google Maps) seçtirir ve mağaza linkini girmesini ister. Arka planda ilk veri çekme işlemi tetiklenir.


Adım 3: Örnek QR Kodunuzu Oluşturun: "Masa 1" için otomatik bir QR kod üretilir ve [İndir] butonu ile kullanıcıya ilk başarı hissi yaşatılır.


Sihirbaz bittiğinde, kullanıcıyı ana panele yönlendirir ve uygulama içi bir tur (in-app tour) ile ana menü elemanlarını tanıtır.

1. Ana Panel (Dashboard)
Üst Metrik Kartları:

Etkileşim: Her kartın üzerine gelindiğinde, hafifçe yukarı kalkarak (transform: translateY(-4px);) üç boyutlu bir his yaratır.

Sparkline Grafikler: "Pozitif Yorum Artışı" kartındaki mini grafik Başarı Yeşili, "Yanıt Bekleyenler" için potansiyel bir "Negatif Yorum Trendi" kartındaki grafik ise Hata Kırmızısı olabilir.


Veri Kaynağı: Bu kartlar "Toplam Yorum Sayısı", "Ortalama Puan", "Yanıtlanmamış Kötü Yorum Sayısı" gibi kilit metrikleri gösterir.

Sol Kolon:

Puan Trend Grafiği:

Yükleme Durumu: Sayfa ilk açıldığında, grafiğin yerinde 4-5 adet skeleton bar belirir.

Boş Durum: Seçilen periyotta hiç yorum yoksa, grafiğin ortasında bir ikon ve "Bu periyoda ait görüntülenecek veri bulunamadı." metni yer alır.

Son Geri Bildirim Listesi:

Her bir liste elemanı, platform logosu, tam yıldız gösterimi (örn: 3 dolu, 2 boş yıldız), yorumun ilk 150 karakteri ve "2 saat önce" gibi bir göreceli zaman damgası içerir.

Sağ Kolon:

Şikayet Kök Nedenleri Grafiği:

Neden Doughnut?: Pasta grafik, yüzdeleri göstermede iyidir ancak ortasının boş olması, oraya toplam şikayet sayısı gibi ek bir metrik koymamıza olanak tanır. Bu, veri yoğunluğunu artırır.

Etkileşim: Bir dilimin üzerine gelindiğinde, o dilim hafifçe dışarı doğru büyür ve tam yüzde oranı ile yorum sayısı bir tooltip'te belirir.

Operasyonel Isı Haritası:

Minyatür haritadaki en sorunlu 3 masa, 

Hata Kırmızısı bir glow efekti ile belirginleştirilir.

2. Yorum Yönetimi (Kontrol Merkezi)
Layout Felsefesi: 3 bölmeli yapı, kullanıcının bağlamını kaybetmeden (hangi yorum listesinde olduğunu unutmadan) bir yorumu okumasını ve ona yanıt vermesini sağlar. Bu, en verimli iş akışıdır.

Orta Bölme (Yorum Listesi):

Toplu İşlemler (Bulk Actions): Listenin en üstünde, kullanıcıların birden fazla yorumu seçmesine olanak tanıyan bir checkbox bulunur. Seçim yapıldığında, [Tümünü Arşivle], [Okundu Olarak İşaretle] gibi butonlar aktif olur.

Boş Durum: "Yanıt Bekleyenler" filtresi seçildiğinde hiç yorum yoksa, büyük bir yeşil tik ikonu ve "Tebrikler! Tüm olumsuz yorumları yanıtladınız." mesajı gösterilir.

Sağ Bölme (Detay ve Aksiyon Alanı):


Müşteri Geçmişi: Müşteri adının yanında, tıklandığında bu müşterinin daha önceki yorumlarını ve onlara verilen yanıtları gösteren bir "Geçmişi Görüntüle" butonu bulunur.

AI Analiz Kartı:

GPT-4 ile şikayetlerin kök nedenini, duygu analizini ve trendleri otomatik raporlar.

"Yeniden Üret" ikonuna basıldığında, mevcut öneri bir animasyonla kaybolur ve yerine yenisi gelir.

Yanıt Alanı:

Şablonlar: [Şablon Kullan] butonu, "Gecikme İçin Özür", "Yemek Hakkında Geri Bildirim" gibi önceden hazırlanmış yanıtları listeleyen bir dropdown açar.

Bildirim: [Yanıtı Gönder] butonuna basıldığında, buton loading spinner'a dönüşür. İşlem başarılı olduğunda, ekranın sağ üst köşesinden Başarı Yeşili renkte bir toast notification kayarak girer: "✓ Yanıt başarıyla gönderildi."

3. Mekan Zekası (Isı Haritası)
Sol Bölme (Tasarım Tuvali):

Hizalama: Objeler tuvalde sürüklenirken, diğer objelere veya görünmez bir ızgaraya yapışarak (snap-to-grid) mükemmel hizalama yapmayı kolaylaştırır.


Sürükle-Bırak Tasarım: Kullanıcı, kendi restoranının yerleşim planını kolayca çizebilir.

Sağ Bölme (Araçlar ve Detay):

Katmanlar (Layers): Sağ panelde "Masalar", "Duvarlar", "Objeler" gibi katmanların görünürlüğünü açıp kapatmaya yarayan toggle butonları bulunur. Bu, kalabalık planlarda çalışmayı kolaylaştırır.


Önizleme Modu: Sağ üstte bulunan bir [Müşteri Gözüyle Bak] butonu, tuvali geçici olarak kilitler ve masaların üzerine tıklandığında, müşterinin QR kodu okuttuğunda göreceği arayüzün bir önizlemesini açar. Bu, deneyimi test etmek için kritik bir özelliktir.
4. Analitik ve Raporlar - "Veriye Dayalı Karar Merkezi"
Bu sayfa, işletme sahibine sadece ne olduğunu değil, neden olduğunu da anlatmayı hedefler.


Layout: Sayfanın üst kısmında genel bir tarih aralığı filtresi (Son 30 Gün, Bu Ay, Özel Tarih Aralığı) ve sağında belirgin bir [Raporu İndir (PDF/CSV)] butonu  bulunur. Ana içerik, sekmeli (tabbed) bir yapıda sunulur.

Sekme 1: Genel Performans

Üst Alan: İki büyük grafik yan yana yer alır.


Platforma Göre Puan Gelişimi: Her platformun (Google, Yemeksepeti vb.) farklı renklerle gösterildiği, zaman içindeki puan değişimini sunan bir çizgi grafiği. Kullanıcı, grafik üzerindeki lejantlardan platformları açıp kapatabilir.

Yorum Hacmi Analizi: Toplam yorum sayısını, pozitif, negatif ve nötr olarak üç farklı renkte gösteren bir yığılmış çubuk (stacked bar) grafik. Bu, örneğin bir kampanyanın sadece puanı değil, yorum sayısını ne kadar artırdığını da gösterir.

Alt Alan: Detaylı Metrikler Tablosu:

Sıralanabilir bir tablo. Başlıklar: Platform, Toplam Yorum, Ortalama Puan, Pozitif Yorum %, Negatif Yorum %, Ortalama Yanıt Süresi.

Sekme 2: Şikayet Analizi

Sol Panel: Kök Neden Dağılımı:

Ana Panel'deki pasta grafiğin daha detaylı bir versiyonu. "Servis Yavaşlığı", "Personel Tavrı", "Soğuk Yemek" gibi şikayetlerin yüzdelik dağılımını gösterir. Bir nedene tıklandığında, sağdaki yorum listesi sadece o konuyla ilgili yorumları gösterecek şekilde filtrelenir.

Sağ Panel: İlgili Yorumlar Akışı:

Seçilen kök nedene ait yorumların tam metinlerinin ve detaylarının aktığı bir liste.

Alt Panel: Ürün/Hizmet Bazlı Şikayetler:

En çok olumsuz geri bildirim alan ürünleri (örn: "Mercimek Çorbası", "Adana Kebap") ve aldıkları negatif yorum sayısını gösteren bir yatay çubuk grafik. Bu, menüdeki sorunlu kalemleri tespit etmeyi sağlar.

Sekme 3: Personel / Şube Performansı

Layout: Bir liderlik tablosu (leaderboard) görünümünde.


İçerik: Her satır bir personeli veya şubeyi temsil eder.

Sütunlar: Personel/Şube Adı, Sorumlu Olduğu Yorum Sayısı, Aldığı Ortalama Puan, Negatif Yorum Sayısı, Pozitif Yorum Sayısı. Tablo, herhangi bir sütuna göre sıralanabilir. Bu, prim veya eğitim ihtiyacı gibi kararları doğrudan destekler.

5. İletişim ve Pazarlama - "Müşteriyle Bağ Kurma Araçları"
Layout: İki ana işlevi ayıran, solda dikey bir menü veya üstte sekmeli bir yapı.


Bölüm 1: Toplu Mesaj Gönderimi 

Arayüz: Adım adım ilerleyen bir sihirbaz (wizard) yapısı.

Adım 1: Alıcıları Seç:

Seçenek A: [CSV Yükle] butonu ile bir müşteri listesi yükleme. Arayüz, CSV'deki sütunları (isim, telefon, email) doğru şekilde eşleştirmesi için kullanıcıya yardımcı olur.

Seçenek B: "Son 3 ayda 5 yıldız veren müşteriler" gibi akıllı filtrelerle mevcut veritabanından bir segment oluşturma.

Adım 2: Mesajı Oluştur:

[SMS] ve [E-posta] arasında bir seçim yapılır.

Geniş bir metin editörü ve "Müşteri Adı Ekle" gibi kişiselleştirme etiketleri.

SMS için karakter sayacı ve maliyet tahmini gösterilir.

Adım 3: Önizleme ve Gönderim:

Gönderilecek mesajın farklı cihazlarda nasıl görüneceğine dair bir önizleme.

"Toplam 127 müşteriye kampanya mesajı gönderilecek. Onaylıyor musunuz?" gibi son bir onay kutusu ve büyük bir [Gönderimi Başlat] butonu.


Bölüm 2: E-posta Şablonları 

Sol Taraf: "Olumsuz Yorum Sonrası", "Doğum Günü Kutlaması", "Kampanya Duyurusu" gibi düzenlenebilir şablonların listesi.

Sağ Taraf: Seçilen şablonun logosunun, renklerinin ve metinlerinin düzenlenebildiği canlı bir editör. Değişiklikler anında yandaki önizleme panelinde görüntülenir.

6. Ayarlar - "İşletmenin Dijital Kimliği"
Layout: Sol tarafta dikey bir navigasyon menüsü, sağda ise seçilen ayar sayfasının içeriği.


Menü 1: İşletme Profili 

Logo yükleme alanı, işletme adı, adres, telefon gibi temel bilgilerin düzenlendiği basit form alanları.


Menü 2: Kullanıcı Yönetimi 

Mevcut kullanıcıları (Admin, Şube Müdürü rolleriyle) listeleyen bir tablo.

[+ Yeni Kullanıcı Davet Et] butonu bir modal açar. E-posta adresi girilir ve rol seçilir. Kullanıcıya bir davet linki gönderilir. Bu, şube müdürlerinin sadece kendi şube verilerini görmesini sağlar.


Menü 3: Entegrasyonlar ve Kanallar 

Platformların listelendiği bir alan. Her platform (Google, Yemeksepeti, Tripadvisor) için bir kart bulunur.

Kart içinde, platformdaki mağaza linkinin yapıştırılacağı bir metin kutusu ve 

[Bağlantıyı Doğrula] butonu yer alır.


Twilio/Telnux gibi iletişim servisleri için API anahtarlarının girileceği ayrı ve güvenli alanlar bulunur.


Menü 4: Bildirimler 

"Yeni 1 yıldızlı yorum geldiğinde E-posta gönder."

"Yeni bir yorum yanıtlandığında Mobil Bildirim gönder."

"AI kredisi %10'un altına düştüğünde uyar."

gibi durumlar için bir dizi açma/kapama (toggle) anahtarı.


Menü 5: Abonelik ve Kullanım 

Üst Kart: Mevcut planın adı ("Profesyonel"), aylık ücreti ve sonraki fatura tarihi.

Alt Alan: Kullanım Hakları:

"AI Token Kullanımı", "Aylık E-posta Hakkı", "Aylık SMS Hakkı" için ilerleme çubukları (progress bars). Örneğin: 750/1000 Token Kullanıldı.

[Fatura Geçmişini Görüntüle] ve [Planı Değiştir] butonları.

Menü 6: Güvenlik ve Subdomain

Standart "Şifre Değiştirme" form alanları.

Subdomain ayarı: [boşluk] .mutfakyazilim.com şeklinde bir alan. Kullanıcı 

isletme-adi gibi bir ön ek girerek kendi özel yorum toplama linkini oluşturabilir.
7. Müşterinin Gördüğü Ekranlar (QR Kod Akışı)
Bu arayüz, mobil öncelikli, son derece hızlı ve basit olmalıdır. Amaç, müşteriyi saniyeler içinde doğru aksiyona yönlendirmektir.


Genel Tasarım: İşletmenin logosu ve renkleri ile özelleştirilebilir bir arayüz. Sade, büyük butonlar ve net metinler kullanılır.


Ekran 1: Anlık Değerlendirme Ekranı 


Görünüm: Müşteri QR kodu okuttuğu an, karşısına çıkan ilk ekran budur. Ortada işletmenin logosu, altında büyük puntolarla net bir soru yer alır: 

"Deneyiminizi Değerlendirir misiniz?".


Seçenekler: Altında yan yana iki büyük, dokunması kolay alan bulunur:

Mutlu Seçenek: Yeşil arka planlı, içinde büyük bir 👍 ikonu ve "Memnun Kaldım" metni. (Alternatif: 4 ve 5. yıldızlar).

Mutsuz Seçenek: Kırmızı arka planlı, içinde büyük bir 👎 ikonu ve "Memnun Kalmadım" metni. (Alternatif: 1, 2 ve 3. yıldızlar).


Ekran 2 (Senaryo A): Müşteri Memnunsa 

Görünüm: Müşteri mutlu seçeneğe tıkladığında, bu ekrana yönlendirilir.


Başlık: "Harika! Bu güzel yorumunuzu nerede paylaşmak istersiniz?".


İçerik: Alt alta, her platformun kendi logosu, rengi ve yazı tipiyle tasarlanmış butonlar yer alır:


[Google Logosu] Google'da Yorum Yap 


[Yemeksepeti Logosu] Yemeksepeti'nde Puanla 


[Tripadvisor Logosu] Tripadvisor'da Paylaş 


Not: Eğer işletme panelden sadece tek bir link (örn: Google) eklediyse, bu ekran hiç gösterilmez ve müşteri doğrudan o linke yönlendirilir.


Ekran 3 (Senaryo B): Müşteri Memnun Değilse 


Görünüm: Müşteri mutsuz seçeneğe tıkladığında, şikayeti gizli tutmak ve detayları öğrenmek için bu özel forma yönlendirilir. 

Asla halka açık bir platforma yönlendirilmez.


Başlık: Empatik bir ifade: "Yaşadığınız olumsuzluk için üzgünüz. Size daha iyi hizmet verebilmemiz için yardımcı olur musunuz?".


Form Alanları:

Ad Soyad (İsteğe bağlı) 

Telefon Numarası (İsteğe bağlı) 

Yorumunuz (Zorunlu alan, geniş metin kutusu) 


Onay Kutucuğu (KVKK): [ ] "Geri bildirimimin işlenmesine ve benimle iletişime geçilmesine izin veriyorum.".


Buton: Belirgin, turuncu bir [Geri Bildirimi Gönder] butonu.


Ekran 4: Teşekkür Ekranı 

İşlem tamamlandığında, senaryoya göre özelleşmiş bir teşekkür mesajı gösterilir.


Memnun Müşteri İçin: "Değerli yorumunuz için teşekkür ederiz! Sizi tekrar aramızda görmek dileğiyle.".


Memnun Olmayan Müşteri İçin: "Geri bildiriminiz başarıyla alınmıştır. Konuyla yakından ilgileneceğimizden emin olabilirsiniz.".



9. İşletme Paneli'ne Son Dokunuşlar
Affiliate/Referral Programı:

Yer: İşletme Paneli > Ayarlar menüsüne yeni bir sekme: "Arkadaşını Davet Et".

İçerik: Bu sayfada işletme sahibine özel, kopyalanabilir bir referans linki sunulur. Altında, bu linkle kayıt olan işletmelerin bir listesi ve kazanılan krediler/indirimler gösterilir. Bu, platformun organik büyümesi için bir araçtır.

Uygulama İçi Rehber Yönetimi:

Yer: Süper Admin Paneli > Kiracı İletişimi & Başarısı.


İşlev: Adminler, işletme paneli için hazırlanan "İlk Giriş Sihirbazı" veya "Yeni Özellik Turu" gibi uygulama içi rehberlerin içeriğini ve adımlarını buradan yönetebilir.

Mobil Uygulama Stratejisi:

Tüm tasarım, React Native ile geliştirilecek mobil uygulamaya kolayca uyarlanabilir. Özellikle "Yorum Yönetimi" ve "Ana Panel" ekranları, mobil cihazlarda anlık aksiyon almak için optimize edilir.

"Ayarlar > Bildirimler" bölümünde aktive edilen her alarm, doğrudan kullanıcının mobil cihazına native push notification olarak gönderilir. Bu, işletme sahibinin bilgisayar başında değilken bile anında müdahale etmesini sağlar.