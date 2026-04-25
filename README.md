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

### 1. Закоммитьте все файлы

Убедитесь, что все изменения добавлены в репозиторий:

```bash
git add .
git commit -m "Initial commit: business card website"
git push origin main
```

### 2. Включите GitHub Pages

1. Откройте репозиторий на GitHub: `https://github.com/isolovyev77/business-card`
2. Перейдите в **Settings** (Настройки) → **Pages** (в левом меню)
3. В разделе **Source** (Источник):
   - **Branch**: выберите `gh-pages`
   - **Folder**: выберите `/ (root)`
4. Нажмите **Save**

### 3. Дождитесь публикации

GitHub Pages автоматически опубликует сайт через 1-2 минуты.  
Ваш сайт будет доступен по адресу:

**https://isolovyev77.github.io/business-card/**

## 👀 Вариант 2: отдельное Preview до «боевой» версии

В проект добавлен workflow `.github/workflows/pages-preview.yml`, который публикует:

- ветку `main` → **боевая версия**:
  `https://isolovyev77.github.io/business-card/`
- ветку `preview` → **превью-версия**:
  `https://isolovyev77.github.io/business-card/preview/`

### Как пользоваться preview

1. Создайте/обновите ветку `preview`:

```bash
git checkout -B preview
git push -u origin preview
```

2. Делайте изменения и пушьте в `preview`:

```bash
git add .
git commit -m "Preview: test redesign"
git push
```

3. Проверяйте результат по ссылке:
   **https://isolovyev77.github.io/business-card/preview/**

Когда всё устраивает — переносите изменения в `main`.

## 🔄 Обновление сайта

Для обновления содержимого сайта:

1. Внесите изменения в файлы (`index.html`, `styles.css`, `script.js`)
2. Закоммитьте и отправьте изменения в нужную ветку:

```bash
git add .
git commit -m "Update website content"
git push origin main      # боевая версия
# или
git push origin preview   # превью-версия
```

3. GitHub Pages автоматически обновит соответствующий URL в течение нескольких минут

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
