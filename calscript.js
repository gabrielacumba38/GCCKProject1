// Menu data for specific dates
const menuData = {
    "2024-12-01": "Grilled Chicken with Vegetables",
    "2024-12-02": "Pasta Primavera",
    "2024-12-03": "Beef Tacos",
    "2024-12-04": "Vegetable Stir Fry",
    "2024-12-05": "Salmon with Rice",
};

// Function to generate the calendar
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // Adjust for zero-based months

    // Get number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.textContent = day;

        // Format date as YYYY-MM-DD
        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Add click event to display menu
        dayElement.addEventListener("click", () => {
            const menu = menuData[formattedDate] || "No menu available";
            document.getElementById("menuDisplay").textContent = `${formattedDate}: ${menu}`;
        });

        calendar.appendChild(dayElement);
    }
}

// Generate the calendar on page load
generateCalendar();