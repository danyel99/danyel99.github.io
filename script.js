// Update footer text with the current year
document.getElementById("footerText").textContent = `@${new Date().getFullYear()} Bryan's Café`;

// Function to load menu from XML
function loadMenu() {
    fetch('menu.xml')
        .then(response => response.text())
        .then(data => {
            // Parse XML and update the menu section
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const meals = xml.getElementsByTagName("meal");
            const beverages = xml.getElementsByTagName("beverage");

            // Populate meals
            let mealHTML = "<h3>Meals</h3>";
            for (let meal of meals) {
                const name = meal.querySelector("name").textContent;
                const price = meal.querySelector("price").textContent;
                const description = meal.querySelector("description").textContent;
                const image = meal.querySelector("image").textContent;
                mealHTML += `<div class="menu-item">
                    <img src="${image}" alt="${name}">
                    <h4>${name}</h4>
                    <p>${description}</p>
                    <p>Price: ${price}</p>
                </div>`;
            }
            document.getElementById("meals").innerHTML = mealHTML;

            // Populate beverages
            let beverageHTML = "<h3>Beverages</h3>";
            for (let beverage of beverages) {
                const name = beverage.querySelector("name").textContent;
                const price = beverage.querySelector("price").textContent;
                const description = beverage.querySelector("description").textContent;
                const image = beverage.querySelector("image").textContent;
                beverageHTML += `<div class="menu-item">
                    <img src="${image}" alt="${name}">
                    <h4>${name}</h4>
                    <p>${description}</p>
                    <p>Price: ${price}</p>
                </div>`;
            }
            document.getElementById("beverages").innerHTML = beverageHTML;
        });
}


// Function to load branches from XML
JavaScript
function loadBranches() {
    fetch('branches.xml')
        .then(response => response.text())
        .then(data => {
            // Parse XML and update the branch section
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const branches = xml.getElementsByTagName("branch");

            // Populate branches
            let branchHTML = "";
            for (let branch of branches) {
                const address = branch.querySelector("address").textContent;
                const contact = branch.querySelector("contact").textContent;
                const hours = branch.querySelector("hours").textContent;
                const mapLink = branch.querySelector("map").textContent; 

                branchHTML += `<div>
                                <h4>${address}</h4>
                                <p>Contact: ${contact}</p>
                                <p>Opening Hours: ${hours}</p>
                                <a href="${mapLink}" target="_blank">View on Map</a> 
                              </div>`;
            }
            document.getElementById("branchList").innerHTML = branchHTML;
        });
}
//function to create subtmit alert
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting
         
    const form = document.getElementById('enquiryForm');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "Your message has been submitted!";
    messageDiv.style.color = 'green'; 
    form.appendChild(messageDiv); 
  
}
