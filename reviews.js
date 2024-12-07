const stars = document.querySelectorAll('.star');
const ratingOutput = document.getElementById('rating-output');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        // Highlight stars up to the hovered one
        stars.forEach((s, i) => {
            s.style.color = i <= index ? '#ff0' : '#ccc';
        });
    });

    star.addEventListener('mouseout', () => {
        // Reset to the current rating
        stars.forEach((s) => {
            s.style.color = s.classList.contains('selected') ? '#ff0' : '#ccc';
        });
    });

    star.addEventListener('click', () => {
        // Set the selected rating
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i <= index);
        });

        const rating = index + 1; // Rating is index + 1
        ratingOutput.textContent = `Your rating: ${rating}`;
    });
});