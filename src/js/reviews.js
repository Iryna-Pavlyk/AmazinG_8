// Функція для отримання відгуків з сервера
async function fetchReviews() {
    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
         if (!response.ok) {
            throw new Error(response.statusText || response.status);
        }
        const data = await response.json();

        if (data.error) {
            showErrorMessage(data.error);
        } else {
            showReviews(data);
            
        }
    } catch (error) {
        showErrorMessage('Failed to fetch reviews. Please try again later.');
    }
}

// Функція для відображення відгуків
function showReviews(reviews) {
    const reviewsList = document.getElementById('reviewsList');

    // Очищення вмісту списку перед додаванням нових відгуків
    reviewsList.innerHTML = '';

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<div class="swiper-slide">Not found</div>';
    } else {
        // Додавання відгуків до списку
        reviews.forEach(review => {
            const slide = document.createElement('li');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `
                <div class="review-card" id="review_${review._id}"> 
                    <div class="avatar-review-js">
                        <img class="review-img-js" src="${review.avatar_url}" alt="Avatar of ${review.author}">
                    </div>
                    <div class="review-content-js">
                        <p class="author-review-js">${review.author}</p>
                        <p class="text-review-js">${review.review}</p>
                    </div>
                </div>`;
            reviewsList.appendChild(slide);
            
        });
       
    }
}

// Функція для відображення повідомлення про помилку
function showErrorMessage(message) {
    alert(message);
}


// Виклик функції отримання відгуків при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchReviews);



