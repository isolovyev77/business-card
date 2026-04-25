# Сайт-визитка Ивана Соловьева

Статический одностраничный сайт-визитка с информацией об энтузиасте ИИ, промт-инжиниринга и вайб-кодинга.

## 🚀 Быстрый старт

### Локальный запуск

Запустите локальный сервер из корня репозитория:

```bash
python3 -m http.server 8000
```

Откройте в браузере: [http://localhost:8000](http://localhost:8000)

### Структура проекта

```
.
├── index.html              # Главная страница
├── styles.css              # Стили сайта
├── script.js               # Интерактивность и переключатель темы
├── assets/
│   ├── avatar.png          # Аватар для сайта и favicon
│   ├── og-image.png        # Изображение для социальных сетей (Open Graph)
│   ├── ivan-solovyev.vcf   # vCard контакт
│   ├── telegram-bot.png    # Превью кейса: Telegram-бот
│   ├── generated-pictures.png  # Превью кейса: сгенерированные изображения
│   ├── parliament-film.png # Превью кейса: видео Parliament
│   ├── yeti-film.png       # Превью кейса: мультфильм
│   ├── star-seed.png       # Превью кейса: детская сказка
│   ├── star-seed.pdf       # PDF буклет детской сказки
│   ├── muscle-growth.png   # Превью кейса: учебные материалы
│   ├── muscle-infographics.png  # Инфографика о росте мышц
│   └── muscle-presentation.pdf  # Презентация о росте мышц
└── README.md
```

## 🌐 Публикация на GitHub Pages

Репозиторий использует GitHub Actions для двух окружений:

- `main` - продакшен: `https://isolovyev77.github.io/business-card/`
- `preview` - превью: `https://isolovyev77.github.io/business-card/preview/`

### 1. Включите GitHub Pages

1. Откройте репозиторий на GitHub: `https://github.com/isolovyev77/business-card`
2. Перейдите в **Settings** → **Pages**
3. В разделе **Build and deployment** выберите:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Нажмите **Save**

### 2. Как работает деплой

- workflow `.github/workflows/pages.yml` публикует ветку `main` в корень `gh-pages`
- workflow `.github/workflows/pages-preview.yml` публикует ветку `preview` в папку `preview/` внутри `gh-pages`
- после push в соответствующую ветку GitHub Actions обновляет сайт автоматически

### 3. Обновление сайта

Продакшен:

```bash
git checkout main
git add index.html styles.css script.js README.md .github/workflows/pages.yml .github/workflows/pages-preview.yml
git commit -m "Update production site"
git push origin main
```

Превью:

```bash
git checkout preview
git merge main
git push origin preview
```

После выполнения workflow сайт обычно обновляется за 1-2 минуты.

## ✨ Возможности

- 🎨 Минималистичный современный дизайн
- 🌓 Переключатель темы (светлая/темная) с сохранением в localStorage
- 📱 Полностью адаптивная верстка
- 🚀 Без внешних зависимостей (чистые HTML/CSS/JS)
- 📇 Скачивание vCard контакта
- 🔍 SEO-оптимизация и OpenGraph meta-теги
- 🎯 Секции: о себе, навыки, области применения, кейсы, контакты
- 📊 6 кейсов с превью изображений и кнопками действий
- 📋 Копирование контактов в буфер обмена

## 📝 Контакты

- Telegram: [@isolovyev](https://t.me/isolovyev)
- Instagram: [@isolovyev](https://instagram.com/isolovyev)
- Email: [isolovyev@mail.ru](mailto:isolovyev@mail.ru)

---

© 2026 Иван Соловьев
