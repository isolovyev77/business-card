// Словарь переводов. Ключи совпадают с data-i18n в разметке.
const I18N = {
    ru: {
        "logo": "Иван Соловьев",
        "nav.about": "Обо мне",
        "nav.focus": "Фокус",
        "nav.cases": "Кейсы",
        "nav.contacts": "Контакты",
        "aria.nav": "Навигация по странице",
        "aria.theme": "Переключить тему",
        "aria.lang": "Switch to English",
        "hero.title": "Энтузиаст ИИ, промт-инжиниринга и вайб-кодинга",
        "hero.subtitle": "Внедряю ИИ в профессиональную деятельность (GR-менеджер) и хобби (тренер CrossFit).",
        "hero.btnCases": "Смотреть кейсы",
        "hero.btnContact": "Связаться",
        "metric1": "направления применения ИИ",
        "metric2": "публичных кейсов и материалов",
        "metric3": "тестирование новых инструментов",
        "sec.focus": "Что делаю",
        "focus1.title": "Промт-инжиниринг",
        "focus1.text": "Создаю эффективные промпты для решения сложных задач с помощью больших языковых моделей. Оптимизирую взаимодействие с ИИ-ассистентами.",
        "focus2.title": "Вайб-кодинг",
        "focus2.text": "Разрабатываю прототипы и решения с помощью ИИ-инструментов. Быстро воплощаю идеи в работающий код.",
        "focus3.title": "Автоматизация",
        "focus3.text": "Внедряю ИИ-решения для оптимизации рабочих процессов, аналитики и коммуникаций. Делаю рутину проще и эффективнее.",
        "sec.apply": "Где применяю",
        "apply1.title": "GR-менеджмент",
        "apply1.text": "Использую ИИ для анализа регуляторной среды, подготовки аналитических материалов и оптимизации коммуникаций с государственными структурами.",
        "apply2.title": "CrossFit тренировки",
        "apply2.text": "Применяю ИИ для создания персонализированных программ тренировок, анализа техники движений и мотивации спортсменов.",
        "apply3.title": "Личные проекты",
        "apply3.text": "Экспериментирую с новыми ИИ-инструментами, создаю автоматизированные решения для повседневных задач и делюсь опытом.",
        "sec.cases": "Кейсы",
        "case1.title": "Telegram-бот: анализ законопроектов",
        "case1.desc": "Разбор документов и выделение ключевых изменений в удобном формате.",
        "case1.btn": "Открыть бота",
        "case2.title": "Сгенерированные изображения",
        "case2.desc": "Подборка примеров генерации и стилизации.",
        "case2.btn": "Открыть подборку",
        "case3.title": "Видео: Parliament (Budapest)",
        "case3.desc": "Короткий ролик с кинематографической подачей.",
        "case4.title": "Мультфильм: Снежный человек",
        "case4.desc": "Короткий анимационный ролик.",
        "case5.title": "Детская сказка: Star Seed",
        "case5.desc": "Иллюстрация + буклет в PDF.",
        "case5.btn": "Открыть буклет",
        "case6.title": "Учебные материалы: рост мышечных волокон",
        "case6.desc": "Подкаст + инфографика + презентация.",
        "case6.btn1": "Смотреть подкаст",
        "case6.btn2": "Инфографика",
        "case6.btn3": "Презентация (PDF)",
        "case7.title": "Акторы для сбора данных на Apify",
        "case7.desc": "Одиннадцать публичных сборщиков по России и Казахстану: цены на маркетплейсах, розничные сети, госзакупки, открытые реестры.",
        "case7.btn": "Открыть на Apify",
        "case8.title": "Coach Workout Tools",
        "case8.desc": "Открытый набор команд и навыков: переносит и составляет тренировки между BTWB, Trenda и CAP.",
        "case8.btn": "Открыть на GitHub",
        "btn.youtube": "Смотреть на YouTube",
        "btn.downloadPdf": "Скачать PDF",
        "sec.contacts": "Контакты",
        "contacts.intro": "Открыт к новым знакомствам и сотрудничеству. Всегда рад обсудить ИИ, промт-инжиниринг и интересные проекты.",
        "contact.tg": "Написать в Telegram",
        "contact.mail": "Написать письмо",
        "contact.vcard": "Скачать контакт (vCard)",
        "copy.tgLabel": "Telegram:",
        "copy.mailLabel": "E-mail:",
        "copy.btn": "Скопировать",
        "copy.done": "Скопировано!",
        "copy.error": "Ошибка",
        "pageTitle": "Иван Соловьев - Энтузиаст ИИ",
        "metaDescription": "Иван Соловьев - энтузиаст ИИ, промт-инжиниринга и вайб-кодинга. Внедряю искусственный интеллект в GR-менеджмент и тренерскую практику CrossFit."
    },
    en: {
        "logo": "Ivan Solovyev",
        "nav.about": "About",
        "nav.focus": "Focus",
        "nav.cases": "Cases",
        "nav.contacts": "Contacts",
        "aria.nav": "Page navigation",
        "aria.theme": "Switch theme",
        "aria.lang": "Переключить на русский",
        "hero.title": "AI, prompt engineering and vibe coding enthusiast",
        "hero.subtitle": "I bring AI into my profession (government relations) and my hobby (CrossFit coaching).",
        "hero.btnCases": "See the cases",
        "hero.btnContact": "Get in touch",
        "metric1": "areas where I apply AI",
        "metric2": "public cases and materials",
        "metric3": "testing new tools",
        "sec.focus": "What I do",
        "focus1.title": "Prompt engineering",
        "focus1.text": "I write prompts that get large language models to solve hard tasks, and I tune the way I work with AI assistants.",
        "focus2.title": "Vibe coding",
        "focus2.text": "I build prototypes and working solutions with AI tools, turning ideas into running code quickly.",
        "focus3.title": "Automation",
        "focus3.text": "I put AI into workflows, analytics and communication, so routine work takes less time.",
        "sec.apply": "Where I apply it",
        "apply1.title": "Government relations",
        "apply1.text": "I use AI to analyse the regulatory environment, prepare briefing materials and streamline communication with public bodies.",
        "apply2.title": "CrossFit training",
        "apply2.text": "I use AI to build personalised training programmes, analyse movement technique and keep athletes motivated.",
        "apply3.title": "Personal projects",
        "apply3.text": "I experiment with new AI tools, automate everyday tasks and share what I learn.",
        "sec.cases": "Cases",
        "case1.title": "Telegram bot: draft law analysis",
        "case1.desc": "It breaks documents down and highlights the key changes in a readable form.",
        "case1.btn": "Open the bot",
        "case2.title": "Generated images",
        "case2.desc": "A selection of generation and styling examples.",
        "case2.btn": "Open the selection",
        "case3.title": "Video: Parliament (Budapest)",
        "case3.desc": "A short clip with a cinematic feel.",
        "case4.title": "Animation: The Snowman",
        "case4.desc": "A short animated clip.",
        "case5.title": "Children's story: Star Seed",
        "case5.desc": "Illustration plus a PDF booklet.",
        "case5.btn": "Open the booklet",
        "case6.title": "Learning materials: muscle fibre growth",
        "case6.desc": "Podcast, infographic and slides.",
        "case6.btn1": "Listen to the podcast",
        "case6.btn2": "Infographic",
        "case6.btn3": "Slides (PDF)",
        "case7.title": "Data actors on Apify",
        "case7.desc": "Eleven public scrapers for Russia and Kazakhstan: marketplace prices, retail chains, public tenders and open registries.",
        "case7.btn": "Open on Apify",
        "case8.title": "Coach Workout Tools",
        "case8.desc": "An open toolkit of commands and skills that moves and builds workouts across BTWB, Trenda and CAP.",
        "case8.btn": "View on GitHub",
        "btn.youtube": "Watch on YouTube",
        "btn.downloadPdf": "Download PDF",
        "sec.contacts": "Contacts",
        "contacts.intro": "Open to new contacts and collaboration. Always glad to talk about AI, prompt engineering and interesting projects.",
        "contact.tg": "Message me on Telegram",
        "contact.mail": "Send an email",
        "contact.vcard": "Download contact (vCard)",
        "copy.tgLabel": "Telegram:",
        "copy.mailLabel": "E-mail:",
        "copy.btn": "Copy",
        "copy.done": "Copied!",
        "copy.error": "Error",
        "pageTitle": "Ivan Solovyev, AI enthusiast",
        "metaDescription": "Ivan Solovyev, an AI, prompt engineering and vibe coding enthusiast. I bring artificial intelligence into government relations work and CrossFit coaching."
    }
};

let CURRENT_LANG = "ru";

function t(key) {
    const dict = I18N[CURRENT_LANG] || I18N.ru;
    return dict[key] !== undefined ? dict[key] : key;
}

function detectLang() {
    const saved = localStorage.getItem("lang");
    if (saved === "ru" || saved === "en") {
        return saved;
    }
    const nav = (navigator.language || "ru").toLowerCase();
    return nav.startsWith("ru") ? "ru" : "en";
}

function applyLang(lang) {
    const dict = I18N[lang] || I18N.ru;
    CURRENT_LANG = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        el.getAttribute("data-i18n-attr").split("|").forEach((pair) => {
            const parts = pair.split(":");
            const attr = parts[0];
            const key = parts[1];
            if (attr && key && dict[key] !== undefined) {
                el.setAttribute(attr, dict[key]);
            }
        });
    });

    if (dict.pageTitle) {
        document.title = dict.pageTitle;
    }
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict.metaDescription) {
        meta.setAttribute("content", dict.metaDescription);
    }

    // На кнопке показываем язык, на который переключимся
    const code = document.getElementById("langCode");
    if (code) {
        code.textContent = lang === "ru" ? "EN" : "RU";
    }

    localStorage.setItem("lang", lang);
}

function initLang() {
    applyLang(detectLang());
    const btn = document.getElementById("langToggle");
    if (btn) {
        btn.addEventListener("click", () => {
            applyLang(CURRENT_LANG === "ru" ? "en" : "ru");
        });
    }
}

// Автоматическая подстановка текущего года в футере
function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Управление темой
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Получаем сохраненную тему из localStorage или используем системную
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Устанавливаем тему
    html.setAttribute('data-theme', currentTheme);
    
    // Обработчик переключения темы
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Добавляем небольшую анимацию кнопке
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'rotate(0deg)';
            }, 300);
        });
        
        // Плавная анимация для кнопки
        themeToggle.style.transition = 'transform 0.3s ease';
    }
}

// Плавная прокрутка для якорных ссылок (если будут добавлены)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Анимация появления элементов при прокрутке (опционально)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Обработка загрузки vCard (добавляем атрибуты для корректной загрузки)
function initVCardDownload() {
    const vcardLink = document.querySelector('a[href*=".vcf"]');
    if (vcardLink) {
        vcardLink.setAttribute('download', 'ivan-solovyev.vcf');
    }
}

// Копирование контактов в буфер обмена
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.getAttribute('data-copy');
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Визуальная обратная связь
                const originalText = button.innerHTML;
                button.classList.add('copied');
                button.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    ${t("copy.done")}
                `;
                
                // Возвращаем исходное состояние через 2 секунды
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = originalText;
                }, 2000);
                
            } catch (err) {
                // Fallback для старых браузеров
                console.error('Ошибка копирования:', err);
                
                // Показываем сообщение об ошибке
                button.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    ${t("copy.error")}
                `;
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 2000);
            }
        });
    });
}

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initLang();
    updateYear();
    initTheme();
    initSmoothScroll();
    initScrollAnimations();
    initVCardDownload();
    initCopyButtons();
    
    // Добавляем обработчик для системного изменения темы
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Применяем системную тему только если пользователь не выбрал тему вручную
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    });
});

// Дополнительная функция для обработки внешних ссылок
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем rel="noopener noreferrer" ко всем внешним ссылкам для безопасности
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        const rel = link.getAttribute('rel') || '';
        if (!rel.includes('noopener')) {
            link.setAttribute('rel', rel + ' noopener noreferrer');
        }
    });
});
