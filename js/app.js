// Fetches 12 random employees
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => employeeDirectory(data))
    .catch( err => console.log(err));

// Global variables
const mainGrid = document.getElementById('main-grid');
const modalContainer = document.getElementById('modal-container');

// Functions
function employeeDirectory(data) {
    console.log(data.results);
    data.results.forEach(employee => {
        mainGrid.innerHTML += `
            <div class="card">
                <div class="card-img-div">
                    <img src="${employee.picture.large}" alt="${employee.name.first}">
                </div>
                <div class="card-info">
                    <p class="card-info-name">${employee.name.first} ${employee.name.last}</p>
                    <p class="card-info-email">${employee.email}</p>
                    <p class="card-info-city">${employee.location.city}</p>
                </div>
            </div>
        `;

        modalContainer.innerHTML += `
            <div class="modal" id="${employee.name.first.toLowerCase()}${employee.name.last}>
                <div class="modal-img-div">
                    <img src="${employee.picture.large}" alt="${employee.name.first}">
                </div>
                <div class="modal-info">
                    <p class="modal-info-name">${employee.name.first} ${employee.name.last}</p>
                    <p class="modal-info-email">${employee.email}</p>
                    <p class="modal-info-city">${employee.location.city}</p>
                </div>
                <div class="modal-contact">
                    <p class="modal-info-phone">${employee.cell}</p>
                    <p class="modal-info-address">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}</p>
                    <p class="modal-info-city">Birthday: ${employee.dob.date.slice(5, 7)}/${employee.dob.date.slice(8, 10)}/${employee.dob.date.slice(2, 4)}</p>
                </div>
            </div>
        `;
    });
}


