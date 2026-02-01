# Projeyi Canlıya Alma (Deployment) Rehberi

Bu proje, modern bir React uygulaması olduğu için (Vite tabanlı), **Vercel**, **Netlify** veya **GitHub Pages** gibi platformlarda ücretsiz ve hızlı bir şekilde yayınlanabilir.

Aşağıda en popüler ve en kolay yöntem olan **Vercel** ile deployment adımları anlatılmıştır.

## 1. Yöntem: Vercel (Önerilen)

En kolay ve hızlı yöntemdir. Sadece birkaç tıklama ile siteniz yayına girer.

### Adımlar:

1.  Projenizi **GitHub**'a yüklediğinizden emin olun. (Eğer henüz yapmadıysanız, aşağıda "GitHub'a Yükleme" başlığına bakın).
2.  [Vercel.com](https://vercel.com) adresine gidin ve (GitHub hesabınızla) giriş yapın.
3.  **"Add New..."** butonuna tıklayın ve **"Project"** seçeneğini seçin.
4.  Listeden `ubbys-react` (veya GitHub'daki repo adınız neyse) projenizi bulun ve **"Import"** butonuna basın.
5.  Açılan sayfada ayarları olduğu gibi bırakabilirsiniz (Framework Preset: Vite otomatik seçilecektir).
6.  **"Deploy"** butonuna tıklayın.

Vercel, projenizi otomatik olarak build edecek ve size `https://proje-adiniz.vercel.app` gibi bir link verecektir. Artık siteniz canlıda!

---

## 2. Yöntem: Netlify

Vercel'e çok benzer bir alternatiftir.

1.  Projeniz GitHub'da olmalı.
2.  [Netlify.com](https://netlify.com) adresine gidin ve giriş yapın.
3.  **"Add new site"** -> **"Import an existing project"** deyin.
4.  **GitHub**'ı seçin ve projenizi listeden bulun.
5.  Ayarları varsayılan olarak bırakın (Build command: `npm run build`, Publish directory: `dist`).
6.  **"Deploy site"** butonuna tıklayın.

---

## 3. GitHub'a Nasıl Yüklenir?

Eğer projeniz henüz GitHub'da değilse, şu terminal komutlarını çalıştırarak yükleyebilirsiniz:

1.  GitHub.com'da yeni, boş bir repository oluşturun (isim örn: `ubbys-react`).
2.  VS Code terminalinde şu komutları sırasıyla yazın:

```bash
# Git başlatma (Eğer daha önce yapmadıysanız)
git init

# Tüm dosyaları ekle
git add .

# İlk commit'i oluştur
git commit -m "Proje tamamlandı"

# Oluşturduğunuz repo adresini ekleyin (URL'i kendi reponuzla değiştirin!)
git remote add origin https://github.com/KULLANICI_ADINIZ/ubbys-react.git

# Ana dala yükle
git branch -M main
git push -u origin main
```

Bu işlemden sonra 1. veya 2. yöntemi uygulayabilirsiniz.

## Manuel Build (Gelişmiş)

Eğer sadece statik dosyaları (HTML/CSS/JS) elde etmek istiyorsanız:

1.  Terminalde `npm run build` komutunu çalıştırın.
2.  Proje klasörünüzde `dist` adında yeni bir klasör oluşacaktır.
3.  Bu `dist` klasörünün içindekiler, sitenizin son halidir. Bu klasörü herhangi bir statik hosting servisine sürükleyip bırakabilirsiniz.
