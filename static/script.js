// // Add any JavaScript animations or functionalities here
// // Example: Displaying a welcome message after registration could be implemented here.

// document.addEventListener("DOMContentLoaded", function() {
//     // Example of future animations or interactions
// });





// document.addEventListener('DOMContentLoaded', () => {
//     const feature1 = document.getElementById('feature1');
//     const feature2 = document.getElementById('feature2');

//     // Animate features when the page loads
//     setTimeout(() => {
//         feature1.style.opacity = '1';
//         feature1.style.transform = 'translateY(0)';
//     }, 500); // Delay for feature 1

//     setTimeout(() => {
//         feature2.style.opacity = '1';
//         feature2.style.transform = 'translateY(0)';
//     }, 1000); // Delay for feature 2

//     // Next button functionality
//     document.getElementById('nextButton').addEventListener('click', () => {
//         // Redirect to the next page or functionality
//         window.location.href = 'nextPage.html'; // Change this to your actual next page
//     });

//     // Skip button functionality
//     document.getElementById('skipButton').addEventListener('click', () => {
//         // Redirect to the main application page or home
//         window.location.href = 'homePage.html'; // Change this to your actual home page
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const trackedItemsBody = document.getElementById('trackedItemsBody');
//     const priceAlertsList = document.getElementById('priceAlertsList');

//     // Sample data for demonstration; in a real app, this data would come from your server
//     const trackedItems = [
//         { name: "Product 1", currentPrice: "$100", previousPrice: "$120", status: "Price Dropped" },
//         { name: "Product 2", currentPrice: "$200", previousPrice: "$200", status: "No Change" },
//         { name: "Product 3", currentPrice: "$150", previousPrice: "$130", status: "Price Increased" }
//     ];

//     // Populate the tracked items table
//     trackedItems.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.name}</td>
//             <td>${item.currentPrice}</td>
//             <td>${item.previousPrice}</td>
//             <td>${item.status}</td>
//             <td><button class="remove-button">Remove</button></td>
//         `;
//         trackedItemsBody.appendChild(row);
//     });

//     // Sample alerts
//     const alerts = [
//         "Product 1 has dropped to $100!",
//         "Product 3's price has increased to $150!"
//     ];

//     // Populate the alerts list
//     alerts.forEach(alert => {
//         const alertItem = document.createElement('li');
//         alertItem.textContent = alert;
//         priceAlertsList.appendChild(alertItem);
//     });

//     // Logout button functionality
//     document.getElementById('logoutButton').addEventListener('click', () => {
//         // Redirect to the login page
//         window.location.href = 'signin.html'; // Update this as necessary
//     });
// });






// document.querySelector('.track-button').addEventListener('click', function() {
//     const link = document.querySelector('input').value;
//     // Implement functionality to track the product link
//     alert(`Tracking product: ${link}`);
// });







// // // Get the elements
// // const cards = document.querySelectorAll('.card');
// // const slider = document.querySelector('.slider');

// // // Set the initial active card index
// // let activeIndex = 0;

// // // Function to update card states
// // function updateCards() {
// //     cards.forEach((card, index) => {
// //         card.classList.remove('active');
// //         if (index === activeIndex) {
// //             card.classList.add('active');
// //         }
// //     });
// //     // Update slider position to center the active card
// //     const offset = -activeIndex * 220; // 220 = card width + margin
// //     slider.style.transform = `translateX(${offset}px)`;
// // }

// // // Add event listener for scroll wheel
// // document.addEventListener('wheel', (event) => {
// //     if (event.deltaY > 0) {
// //         // Scroll down
// //         activeIndex = (activeIndex + 1) % cards.length; // Move to the next card
// //     } else {
// //         // Scroll up
// //         activeIndex = (activeIndex - 1 + cards.length) % cards.length; // Move to the previous card
// //     }
// //     updateCards();
// // });

// // // Initialize the first card as active
// // updateCards();



// // script.js
// const slider = document.querySelector('.slider');
// const cards = document.querySelectorAll('.card');

// let currentIndex = 0;

// function updateSlider() {
//     const cardWidth = cards[0].offsetWidth;
//     const offset = cardWidth * currentIndex - (window.innerWidth / 2) + (cardWidth / 2);
//     slider.style.transform = `translateX(-${offset}px)`;
// }

// document.querySelectorAll('.card').forEach((card, index) => {
//     card.addEventListener('click', () => {
//         currentIndex = index; // Set current index to clicked card
//         updateSlider(); // Update slider position
//     });
// });

// updateSlider(); // Initial call to center the first card






// /*-------------------------------this is new DASHBOARD ---------------------------------------------------- */

// $(function () {
//  $(".menu-link").click(function () {
//   $(".menu-link").removeClass("is-active");
//   $(this).addClass("is-active");
//  });
// });

// $(function () {
//  $(".main-header-link").click(function () {
//   $(".main-header-link").removeClass("is-active");
//   $(this).addClass("is-active");
//  });
// });

// const dropdowns = document.querySelectorAll(".dropdown");
// dropdowns.forEach((dropdown) => {
//  dropdown.addEventListener("click", (e) => {
//   e.stopPropagation();
//   dropdowns.forEach((c) => c.classList.remove("is-active"));
//   dropdown.classList.add("is-active");
//  });
// });

// $(".search-bar input")
//  .focus(function () {
//   $(".header").addClass("wide");
//  })
//  .blur(function () {
//   $(".header").removeClass("wide");
//  });

// $(document).click(function (e) {
//  var container = $(".status-button");
//  var dd = $(".dropdown");
//  if (!container.is(e.target) && container.has(e.target).length === 0) {
//   dd.removeClass("is-active");
//  }
// });

// $(function () {
//  $(".dropdown").on("click", function (e) {
//   $(".content-wrapper").addClass("overlay");
//   e.stopPropagation();
//  });
//  $(document).on("click", function (e) {
//   if ($(e.target).is(".dropdown") === false) {
//    $(".content-wrapper").removeClass("overlay");
//   }
//  });
// });

// $(function () {
//  $(".status-button:not(.open)").on("click", function (e) {
//   $(".overlay-app").addClass("is-active");
//  });
//  $(".pop-up .close").click(function () {
//   $(".overlay-app").removeClass("is-active");
//  });
// });

// $(".status-button:not(.open)").click(function () {
//  $(".pop-up").addClass("visible");
// });

// $(".pop-up .close").click(function () {
//  $(".pop-up").removeClass("visible");
// });

// const toggleButton = document.querySelector('.dark-light');

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
// });






// const black_theme = document.querySelector(".black-theme");

// const change = document.querySelector("#switch");


// change.addEventListener("click",changeTheme);


// function changeTheme(){
//   if(document.body.classList.contains("black-theme")){
//    document.body.classList.remove("black-theme");
//     document.body.classList.add("white-theme");
//    change.innerHTML ='<i class="fas fa-moon"></i>';
//      }else{
//         document.body.classList.remove("white-theme");
//     document.body.classList.add("black-theme");
//          change.innerHTML ='<i class="fas fa-sun"></i>';
//      }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const productSelect = document.getElementById('productSelect');
//     const lineGraphElement = document.getElementById('lineGraph');

//     // Check if elements are null
//     if (!productSelect || !lineGraphElement) {
//         console.error('One or more elements are not found in the DOM.');
//         return; // Exit if elements do not exist
//     }

//     // Fetch data from the server
//     fetch('/data')
//         .then(response => response.json())
//         .then(data => {
//             // Populate the product dropdown with product items
//             data.forEach(product => {
//                 const option = document.createElement('option');
//                 option.value = product.item;
//                 option.textContent = product.item;
//                 productSelect.appendChild(option);
//             });

//             // Event listener for product selection
//             productSelect.addEventListener('change', (event) => {
//                 const selectedProduct = data.find(product => product.item === event.target.value);
//                 if (selectedProduct) {
//                     const labels = selectedProduct.prices.map(entry => entry.date);
//                     const prices = selectedProduct.prices.map(entry => entry.price);

//                     // Clear previous chart if exists
//                     if (myChart) {
//                         myChart.destroy();
//                     }

//                     // Create a new line chart
//                     myChart = new Chart(lineGraphElement.getContext('2d'), {
//                         type: 'line',
//                         data: {
//                             labels: labels,
//                             datasets: [{
//                                 label: `${selectedProduct.item} Prices`,
//                                 data: prices,
//                                 borderColor: 'rgba(75, 192, 192, 1)',
//                                 borderWidth: 2,
//                                 fill: false,
//                             }]
//                         },
//                         options: {
//                             responsive: true,
//                             scales: {
//                                 y: {
//                                     beginAtZero: true
//                                 }
//                             }
//                         }
//                     });

//                     // Show the canvas for the chart
//                     lineGraphElement.style.display = 'block'; // Ensure the lineGraph element is visible
//                 }
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });












// document.getElementById('yourWorkLink').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.getElementById('contentWrapper').innerHTML = `
//         <div>
//             <input type="text" class="styled-input" placeholder="Enter link to track" />
//             <button class="track-btn">TRACK</button>
//         </div>
//         <div class="scrolling-wrapper"> 
//             <div class="card">Amazon</div>
//             <div class="card">eBay</div>
//             <div class="card">Walmart</div>
//             <div class="card">Target</div>
//             <div class="card">Best Buy</div>
//         </div>
//     `;
// });







// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch data from the server
//     fetch('/data')
//         .then(response => response.json())
//         .then(data => {
//             const productSelect = document.getElementById('productSelect');
//             const ctx = document.getElementById('lineGraph').getContext('2d');
//             let myChart;

//             // Populate the product dropdown with product items
//             data.forEach(product => {
//                 const option = document.createElement('option');
//                 option.value = product.item;
//                 option.textContent = product.item;
//                 productSelect.appendChild(option);
//             });

//             // Add an event listener to handle product selection
//             productSelect.addEventListener('change', (event) => {
//                 const selectedProduct = data.find(product => product.item === event.target.value);
//                 if (selectedProduct) {
//                     const labels = selectedProduct.prices.map(entry => entry.date);
//                     const prices = selectedProduct.prices.map(entry => entry.price);

//                     // Clear the previous chart if it exists
//                     if (myChart) {
//                         myChart.destroy();
//                     }

//                     // Create a new line chart
//                     myChart = new Chart(ctx, {
//                         type: 'line',
//                         data: {
//                             labels: labels,
//                             datasets: [{
//                                 label: `${selectedProduct.item} Prices`, // Label for the dataset
//                                 data: prices, // Price data
//                                 borderColor: 'rgba(75, 192, 192, 1)', // Line color
//                                 borderWidth: 2, // Line width
//                                 fill: false, // Do not fill under the line
//                             }]
//                         },
//                         options: {
//                             responsive: true,
//                             scales: {
//                                 y: {
//                                     beginAtZero: true // Start the y-axis at 0
//                                 }
//                             }
//                         } // End of options object
//                     });

//                     // Show the canvas for the chart
//                     document.getElementById('lineGraph').style.display = 'block';
//                 }
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error)); // Log any errors
// });






// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the server
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const productSelect = document.getElementById('productSelect');
            const lineGraphElement = document.getElementById('lineGraph');
            let myChart;

            // Check if elements are present
            if (!productSelect || !lineGraphElement) {
                console.error('One or more elements are not found in the DOM.');
                return; // Exit if elements do not exist
            }

            // Populate the product dropdown with product items
            data.forEach(product => {
                const option = document.createElement('option');
                option.value = product.item;
                option.textContent = product.item;
                productSelect.appendChild(option);
            });

            // Event listener for product selection
            productSelect.addEventListener('change', (event) => {
                const selectedProduct = data.find(product => product.item === event.target.value);
                if (selectedProduct) {
                    const labels = selectedProduct.prices.map(entry => entry.date);
                    const prices = selectedProduct.prices.map(entry => entry.price);

                    // Clear previous chart if exists
                    if (myChart) {
                        myChart.destroy();
                    }

                    // Create a new line chart
                    myChart = new Chart(lineGraphElement.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: `${selectedProduct.item} Prices`,
                                data: prices,
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2,
                                fill: false,
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });

                    // Show the canvas for the chart
                    lineGraphElement.style.display = 'block';
                }
            });

            // Track button functionality
            document.querySelector('.track-button').addEventListener('click', function() {
                const link = document.querySelector('input').value;
                // Implement functionality to track the product link
                alert(`Tracking product: ${link}`);
            });
        })
        .catch(error => console.error('Error fetching data:', error)); // Log any errors

    // Features animation
    const feature1 = document.getElementById('feature1');
    const feature2 = document.getElementById('feature2');

    // Animate features when the page loads
    setTimeout(() => {
        if (feature1) {
            feature1.style.opacity = '1';
            feature1.style.transform = 'translateY(0)';
        }
    }, 500); // Delay for feature 1

    setTimeout(() => {
        if (feature2) {
            feature2.style.opacity = '1';
            feature2.style.transform = 'translateY(0)';
        }
    }, 1000); // Delay for feature 2

    // Next button functionality
    document.getElementById('nextButton').addEventListener('click', () => {
        window.location.href = 'nextPage.html'; // Change this to your actual next page
    });

    // Skip button functionality
    document.getElementById('skipButton').addEventListener('click', () => {
        window.location.href = 'homePage.html'; // Change this to your actual home page
    });

    // Logout button functionality
    document.getElementById('logoutButton').addEventListener('click', () => {
        window.location.href = 'signin.html'; // Update this as necessary
    });

    // Initialize tracked items table
    const trackedItemsBody = document.getElementById('trackedItemsBody');
    const priceAlertsList = document.getElementById('priceAlertsList');

    // Sample data for demonstration
    const trackedItems = [
        { name: "Product 1", currentPrice: "$100", previousPrice: "$120", status: "Price Dropped" },
        { name: "Product 2", currentPrice: "$200", previousPrice: "$200", status: "No Change" },
        { name: "Product 3", currentPrice: "$150", previousPrice: "$130", status: "Price Increased" }
    ];

    // Populate the tracked items table
    trackedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.currentPrice}</td>
            <td>${item.previousPrice}</td>
            <td>${item.status}</td>
            <td><button class="remove-button">Remove</button></td>
        `;
        trackedItemsBody.appendChild(row);
    });

    // Sample alerts
    const alerts = [
        "Product 1 has dropped to $100!",
        "Product 3's price has increased to $150!"
    ];

    // Populate the alerts list
    alerts.forEach(alert => {
        const alertItem = document.createElement('li');
        alertItem.textContent = alert;
        priceAlertsList.appendChild(alertItem);
    });

    // Slider functionality for e-commerce cards
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');

    let currentIndex = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const offset = cardWidth * currentIndex - (window.innerWidth / 2) + (cardWidth / 2);
        slider.style.transform = `translateX(-${offset}px)`;
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index; // Set current index to clicked card
            updateSlider(); // Update slider position
        });
    });

    updateSlider(); // Initial call to center the first card

    // Dark/Light mode toggle functionality
    const toggleButton = document.querySelector('.dark-light');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Theme switching functionality
    const change = document.querySelector("#switch");
    change.addEventListener("click", changeTheme);

    function changeTheme() {
        if (document.body.classList.contains("black-theme")) {
            document.body.classList.remove("black-theme");
            document.body.classList.add("white-theme");
            change.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.remove("white-theme");
            document.body.classList.add("black-theme");
            change.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
});
