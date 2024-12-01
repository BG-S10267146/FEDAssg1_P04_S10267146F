
// Select the menu toggle button, navigation menu, and overlay
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.createElement('div');

// Create and append overlay to the body
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Add click event listener to the toggle button
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close dropdown when clicking outside
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
});


// Global search data (add page names, titles, and links)
const searchData = [
    { title: "Chinese Cuisine", url: "https://san-j.com/blog/what-is-chinese-cuisine/"},
    { title: "English Cuisine", url: "https://www.tryotter.com/resource/wiki/what-is-british-cuisine#:~:text=Traditional%20English%20meals%20include%20bread,and%20the%20Full%20English%20breakfast."},
    { title: "Indian Cuisine", url: "https://www.britannica.com/topic/Indian-cuisine" },
    { title: "Japanese Cuisine", url: "https://japanspecialist.com/w/the-ultimate-guide-to-japanese-food" },
    { title: "Malay Cuisine", url: "https://www.thespruceeats.com/profile-of-malay-cooking-and-culture-3030227"},
    { title: "Thai Cuisine", url: "https://www.thespruceeats.com/thai-food-and-culture-3217393"},
    { title: "Vietnamese Cuisine", url: "https://visa2asia.com/blog/vietnamese-cuisine-and-not-to-miss-dishes" },
    { title: "Italian Cuisine", url: "https://jaywaytravel.com/italy/travel-guide/italian-cuisine" },
    { title: "French Cuisine", url: "https://www.thespruceeats.com/introduction-to-french-food-and-cooking-1375348" },
    { title: "Mexican Cuisine", url: "https://www.moon.com/travel/food-drink/introduction-to-mexican-food/" },
    { title: "Spanish Cuisine", url: "https://www.thespruceeats.com/an-introduction-to-spanish-food-and-cooking-3083063" },
];



// Create the search bar (only one instance per page)
const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.placeholder = "Learn more about the different Cuisines!";
searchBar.className = "search-bar";

// Create a dropdown container for search results
const searchResultsContainer = document.createElement("div");
searchResultsContainer.className = "search-results";

// Add search bar and results container to the body
document.querySelector("main").prepend(searchBar);
document.querySelector("main").prepend(searchResultsContainer);

// Style the search results dynamically
searchResultsContainer.style.position = "absolute";
searchResultsContainer.style.backgroundColor = "#fff";
searchResultsContainer.style.border = "1px solid #ccc";
searchResultsContainer.style.borderRadius = "5px";
searchResultsContainer.style.marginTop = "5px";
searchResultsContainer.style.padding = "10px";
searchResultsContainer.style.width = "100%";
searchResultsContainer.style.maxWidth = "500px";
searchResultsContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
searchResultsContainer.style.display = "none";
searchResultsContainer.style.zIndex = "1000";

// Handle search input and results
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    searchResultsContainer.innerHTML = ""; // Clear previous results
    if (query) {
        const results = searchData.filter(item =>
            item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
        );
        if (results.length > 0) {
            results.forEach(item => {
                const resultItem = document.createElement("div");
                resultItem.textContent = item.title;
                resultItem.style.padding = "5px";
                resultItem.style.cursor = "pointer";
                resultItem.style.borderBottom = "1px solid #eee";
                resultItem.addEventListener("click", () => {
                    window.location.href = item.url; // Redirect to the relevant page
                });
                searchResultsContainer.appendChild(resultItem);
            });
        } else {
            searchResultsContainer.innerHTML = `<div style="padding: 5px;">No results found</div>`;
        }
        searchResultsContainer.style.display = "block"; // Show results
    } else {
        searchResultsContainer.style.display = "none"; // Hide results
    }
});

// Hide search results when clicking outside
document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchResultsContainer.contains(e.target)) {
        searchResultsContainer.style.display = "none";
    }
});

// Handle search input and results
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase(); // Convert query to lowercase
    searchResultsContainer.innerHTML = ""; // Clear previous results
    if (query) {
        const results = searchData.filter(item =>
            item.title.toLowerCase().includes(query) // Compare title in lowercase
        );
        if (results.length > 0) {
            results.forEach(item => {
                const resultItem = document.createElement("div");
                resultItem.textContent = item.title;
                resultItem.style.padding = "5px";
                resultItem.style.cursor = "pointer";
                resultItem.style.borderBottom = "1px solid #eee";
                resultItem.addEventListener("click", () => {
                    window.location.href = item.url; // Redirect to the relevant page
                });
                searchResultsContainer.appendChild(resultItem);
            });
        } else {
            searchResultsContainer.innerHTML = `<div style="padding: 5px;">No results found</div>`;
        }
        searchResultsContainer.style.display = "block"; // Show results
    } else {
        searchResultsContainer.style.display = "none"; // Hide results
    }
});
