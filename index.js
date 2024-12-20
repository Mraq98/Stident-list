const nameInput = document.getElementById('name-input');
const groupInput = document.getElementById('group-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const tableBody = document.getElementById('data-table').querySelector('tbody');
const errorDiv = document.getElementById('error-message');

function addRow() {
    const name = nameInput.value.trim();
    const group = groupInput.value.trim();
    if (!name || !group) {
        errorDiv.textContent = 'Все поля обязательны к заполнению';
        errorDiv.style.display = 'block';
        return;
    }

    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    const newRow = document.createElement('tr');
    newRow.innerHTML =
        '<td>' + name + '</td>' +
        '<td>' + group + '</td>' +
        '<td><button class="delete-btn">X</button></td>';
    tableBody.append(newRow);
    nameInput.value = '';
    groupInput.value = '';
}

function deleteRow(event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        row.remove();
    }
}

function clearTable() {
    tableBody.innerHTML = '';
}

addBtn.addEventListener('click', addRow);
tableBody.addEventListener('click', deleteRow);
clearBtn.addEventListener('click', clearTable);
