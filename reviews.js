document.addEventListener('DOMContentLoaded', function() {
    function updateRatingMessage(ratingId, messageId) {
        const ratingInputs = document.querySelectorAll(`#${ratingId} input[type="radio"]`);
        const messageContainer = document.getElementById(messageId)};