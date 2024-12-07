document.addEventListener('DOMContentLoaded', function () {
    // Star rating logic
    const stars = document.querySelectorAll('.star');
    let rating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => highlightStars(star.dataset.value));
        star.addEventListener('mouseout', () => resetStars());
        star.addEventListener('click', () => selectRating(star.dataset.value));
    });

    function highlightStars(value) {
        stars.forEach(star => {
            star.style.color = star.dataset.value <= value ? 'gold' : '#ccc';
            star.style.transform = star.dataset.value <= value ? 'scale(1.3)' : 'scale(1)'; // Grow the star when hovered
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.style.color = star.dataset.value <= rating ? 'gold' : '#ccc';
            star.style.transform = 'scale(1)'; // Reset size when not hovered
        });
    }

    function selectRating(value) {
        rating = value;
        resetStars();
    }

    // Review submission logic
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const foodPhoto = document.getElementById('food-photo').files[0];
        const reviewText = document.getElementById('review-text').value;
        const reviewList = document.getElementById('reviews-list');

        if (!foodPhoto || !reviewText || rating === 0) {
            alert("Please fill in all fields.");
            return;
        }

        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        // Photo section
        const img = document.createElement('img');
        img.classList.add('review-photo');
        img.src = URL.createObjectURL(foodPhoto);
        reviewCard.appendChild(img);

        // Review section
        const reviewBody = document.createElement('p');
        reviewBody.textContent = reviewText;
        reviewCard.appendChild(reviewBody);

        // Rating section
        const ratingElement = document.createElement('div');
        ratingElement.classList.add('review-footer');
        ratingElement.innerHTML = `<span class="rating">★ ${rating}</span> | Posted just now`;
        reviewCard.appendChild(ratingElement);

        // Append the new review card
        reviewList.appendChild(reviewCard);

        // Reset the form
        reviewForm.reset();
        resetStars();
        rating = 0;
    });

    // Past Review Photo submission logic
    const pastReviewForm = document.getElementById('past-review-form');
    pastReviewForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const pastReviewPhoto = document.getElementById('past-review-photo').files[0];
        const pastReviewsGallery = document.getElementById('past-reviews-gallery');

        if (!pastReviewPhoto) {
            alert("Please upload a photo.");
            return;
        }

        const img = document.createElement('img');
        img.src = URL.createObjectURL(pastReviewPhoto);
        pastReviewsGallery.appendChild(img);

        // Reset the past review form
        pastReviewForm.reset();
    });
});

