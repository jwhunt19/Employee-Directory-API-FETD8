// Fetches 12 random employees
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => employeeDirectory(data))
    .catch( err => console.log(err));

// Global variables
const mainGrid = document.getElementById('main-grid');
const modalContainer = document.getElementById('main-container');

// Functions
function employeeDirectory(data) {
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
    });
    mainGrid.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', () => {
          modal(data.results[index]);
        });
      });
}

const modal = employee => { 
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';
    const closeButton = document.createElement('span');
    closeButton.textContent = 'x';
    const modalImgDiv = document.createElement('div');
    modalImgDiv.className = 'modal-img-div';
    const employeeImg = document.createElement('img');
    employeeImg.src = `${employee.picture.large}`;
    employeeImg.alt = `${employee.name.first}`;
    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';
    const modalInfoName = document.createElement('p');
    modalInfoName.className = 'modal-info-name';
    modalInfoName.textContent = `${employee.name.first} ${employee.name.last}`;
    const modalInfoEmail = document.createElement('p');
    modalInfoEmail.className = 'modal-info-email';
    modalInfoEmail.textContent = `${employee.email}`;
    const modalInfoCity = document.createElement('p');
    modalInfoCity.className = 'modal-info-city';
    modalInfoCity.textContent = `${employee.location.city}`;
    const divider = document.createElement('div');
    divider.className = 'divider';
    const modalContact = document.createElement('div');
    modalContact.className = 'modal-contact';
    const modalInfoPhone = document.createElement('p');
    modalInfoPhone.className = 'modal-info-phone';
    modalInfoPhone.textContent = `${employee.cell}`;
    const modalInfoAddress = document.createElement('p');
    modalInfoAddress.className = 'modal-info-address';
    modalInfoAddress.textContent = `${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}`;
    const modalInfoDob = document.createElement('p');
    modalInfoDob.className = 'modal-info-dob';
    modalInfoDob.textContent = `${employee.dob.date.slice(5, 7)}/${employee.dob.date.slice(8, 10)}/${employee.dob.date.slice(2, 4)}`;
    modalContainer.appendChild(modalOverlay);
    modalOverlay.appendChild(modalDiv);
    modalDiv.appendChild(closeButton);
    modalDiv.appendChild(modalImgDiv);
    modalImgDiv.appendChild(employeeImg);
    modalDiv.appendChild(modalInfo);
    modalInfo.appendChild(modalInfoName);
    modalInfo.appendChild(modalInfoEmail);
    modalInfo.appendChild(modalInfoCity);
    modalDiv.appendChild(divider);
    modalDiv.appendChild(modalContact);
    modalContact.appendChild(modalInfoPhone);
    modalContact.appendChild(modalInfoAddress);
    modalContact.appendChild(modalInfoDob);
};

modalContainer.addEventListener('click', (event) => {
    if (event.target.textContent === 'x'){
        let modalOverlay = document.querySelector('.modal-overlay');
        modalContainer.removeChild(modalOverlay);
    }
});