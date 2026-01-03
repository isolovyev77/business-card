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

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateYear();
    initTheme();
    initSmoothScroll();
    initScrollAnimations();
    initVCardDownload();
    
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
