let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Функция для отображения текущего слайда
function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0; // Возврат к первому слайду после последнего
    if (index < 0) slideIndex = totalSlides - 1; // Переход к последнему слайду перед первым
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Кнопка "Назад"
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Кнопка "Вперед"
document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Автопереключение слайдов (опционально)
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000); // Переключение каждые 5 секунд