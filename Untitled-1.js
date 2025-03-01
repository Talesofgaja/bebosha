document.addEventListener("DOMContentLoaded", function () {
    // Client Portal Modal
    const clientPortalLink = document.querySelector('a[href="#client-portal"]');
    const clientPortalModal = document.getElementById('client-portal-modal');

    if (clientPortalLink && clientPortalModal) {
        clientPortalLink.addEventListener('click', function (e) {
            e.preventDefault();
            clientPortalModal.style.display = 'block';
        });

        window.addEventListener('click', function (e) {
            if (e.target === clientPortalModal) {
                clientPortalModal.style.display = 'none';
            }
        });
    }

    // Case Search Redirect
    const caseSearchBox = document.querySelector('.case-search-box');
    if (caseSearchBox) {
        caseSearchBox.addEventListener('click', function () {
            window.location.href = "https://www.supremecourt.gov.bd/web/indexn.php?page=case_search.php&menu=11";
        });
    }

    // Location Tabs on People & Places Page
    const locationItems = document.querySelectorAll('.location-item');
    const locationCards = document.querySelectorAll('.location-card');

    if (locationItems.length > 0) {
        locationItems.forEach((item, index) => {
            item.addEventListener('click', function () {
                locationCards.forEach(card => card.classList.remove('active'));
                locationCards[index].classList.add('active');
            });
        });
    }

    // People Filter Tabs
    const filterTypes = document.querySelectorAll('.filter-type');
    if (filterTypes.length > 0) {
        filterTypes.forEach(type => {
            type.addEventListener('click', function () {
                filterTypes.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Simple Form Validation for Login
    const loginForm = document.querySelector(".login-form form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
            } else {
                alert("Login successful!");
                // You can add a real login authentication process here
            }
        });
    }

    // People Search Form Handling
    const peopleSearchForm = document.querySelector(".search-person form");
    if (peopleSearchForm) {
        peopleSearchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Search functionality is under development.");
        });
    }

    // Pagination Handling for People Section
    const paginationLinks = document.querySelectorAll(".pagination .page");
    if (paginationLinks.length > 0) {
        paginationLinks.forEach(page => {
            page.addEventListener("click", function () {
                alert("Pagination feature coming soon.");
            });
        });
    }
});
