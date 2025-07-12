let employees = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", department: "HR", role: "Manager" },
  { id:2, name: "Bob Johnson", email: "bob@example.com", department: "IT", role: "Developer" },
  { id:3 ,name: "Charlie Lee", email: "charlie@example.com", department: "Finance", role: "Analyst" }
];
let searchTerm = '';
let originalEmployees = [...employees];
let editModeEmail = null;
let nextEmployeeId = employees.length + 1;

let currentPage = 1;
const itemsPerPage = 5;


function renderEmployees() {
  const container = document.getElementById('employeeContainer');
  container.innerHTML = '';

  const limit = parseInt(document.getElementById('showSelect').value) || employees.length;
  const visibleEmployees = employees.slice(0, limit);

  visibleEmployees.forEach(emp => {
    container.innerHTML += `
      <div class="employee-card">
        <strong>${emp.name}</strong><br>
        ID: ${emp.id}<br>
        Email: ${emp.email}<br>
        Department: ${emp.department}<br>
        Role: ${emp.role}<br>
        <button onclick="editEmployee('${emp.email}')">Edit</button>
        <button onclick="deleteEmployee('${emp.email}')">Delete</button>
      </div>
    `;
  });
}


function showForm() {
  document.getElementById('formTitle').innerText = 'Add Employee';
  document.getElementById('formContainer').style.display = 'block';
  document.getElementById('addEmployeeBtn').style.display = 'none';
  document.getElementById('empName').value = '';
  document.getElementById('empEmail').value = '';
  document.getElementById('empDepartment').value = '';
  document.getElementById('empRole').value = '';
  editModeEmail = null;
}

function hideForm() {
  document.getElementById('formContainer').style.display = 'none';
  document.getElementById('addEmployeeBtn').style.display = 'inline-block';
  editModeEmail = null;
}

function saveEmployee(event) {
  event.preventDefault();
  const firstName = document.getElementById('empFirstName').value.trim();
  const lastName = document.getElementById('empLastName').value.trim();
  const name = `${firstName} ${lastName}`;
  const email = document.getElementById('empEmail').value.trim();
  const department = document.getElementById('empDepartment').value.trim();
  const role = document.getElementById('empRole').value.trim();

  if (!name || !email || !department || !role) {
    alert('Please fill in all fields.');
    return;
  }

  if (editModeEmail) {
    const index = employees.findIndex(emp => emp.email === editModeEmail);
    if (index !== -1) {
      const existingId = employees[index].id;
      employees[index] = { id: existingId, name, email, department, role };
      originalEmployees[index] = { id:existingId, name, email, department, role };
    }
  } else {
    const newEmployee = { id: nextEmployeeId++, name, email, department, role };
    employees.push(newEmployee);
    originalEmployees.push(newEmployee);
  }
  // Clear the form inputs after saving
document.getElementById('empFirstName').value = '';
document.getElementById('empLastName').value = '';
document.getElementById('empEmail').value = '';
document.getElementById('empDepartment').value = '';
document.getElementById('empRole').value = '';


  hideForm();
  renderEmployees();
}

function editEmployee(email) {
  const emp = employees.find(e => e.email === email);
  if (!emp) return;

  document.getElementById('formTitle').innerText = 'Edit Employee';
  const [firstName, ...lastParts] = emp.name.split(' ');
  const lastName = lastParts.join(' ');
  
  document.getElementById('empFirstName').value = firstName;
  document.getElementById('empLastName').value = lastName;
  
  document.getElementById('empEmail').value = emp.email;
  document.getElementById('empDepartment').value = emp.department;
  document.getElementById('empRole').value = emp.role;

  editModeEmail = email;
  document.getElementById('formContainer').style.display = 'block';
}

function deleteEmployee(email) {
  employees = employees.filter(emp => emp.email !== email);
  originalEmployees = originalEmployees.filter(emp => emp.email !== email);
  renderEmployees();
}

function filterEmployees() {
  searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  applyAllFilters()
}

function applyAllFilters() {
  const nameFilter = document.getElementById('filterName').value.toLowerCase();
  const deptFilter = document.getElementById('filterDepartment').value.toLowerCase();
  const roleFilter = document.getElementById('filterRole').value.toLowerCase();

  employees = originalEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm) || emp.email.toLowerCase().includes(searchTerm);
    const matchesName = !nameFilter || emp.name.toLowerCase().includes(nameFilter);
    const matchesDept = !deptFilter || emp.department.toLowerCase().includes(deptFilter);
    const matchesRole = !roleFilter || emp.role.toLowerCase().includes(roleFilter);

    return matchesSearch && matchesName && matchesDept && matchesRole;
  });

  renderEmployees();
}


function sortEmployees() {
  const sortBy = document.getElementById('sortSelect').value;
  if (sortBy) {
    employees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  renderEmployees();
}

function toggleFilter() {
  const sidebar = document.getElementById('filterSidebar');
  sidebar.classList.toggle('show');
}

function applyFilters() {
  applyAllFilters()
}

function resetFilters() {
  document.getElementById('filterName').value = '';
  document.getElementById('filterDepartment').value = '';
  document.getElementById('filterRole').value = '';
  searchTerm = "";
  employees = [...originalEmployees];
  renderEmployees();
}

window.onload = () => {
  document.getElementById('showSelect').value = 10;
  renderEmployees();
}

