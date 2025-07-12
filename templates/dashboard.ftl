<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Employee Directory</h1>
        <input type="text" id="searchInput" placeholder="Search by name or email" class="searchInput" oninput="filterEmployees()">
        <button onclick="toggleFilter()">Filter</button>
        <div id="filterSidebar" class="filter-sidebar">
          <button onclick="toggleFilter()" style="float:right;">❌</button>
            <h3>Filter Employees</h3>
            <div>
              <label>First Name:</label>
              <input type="text" id="filterName">
            </div>
            <div>
              <label>Department:</label>
              <input type="text" id="filterDepartment">
            </div>
            <div>
              <label>Role:</label>
              <input type="text" id="filterRole">
            </div>
            <button onclick="applyFilters()">Apply</button>
            <button onclick="resetFilters()">Reset</button>
          </div>
    
    </header>
<div class = "wrapper">
  <main>
    <div class="controls">
      <div>
        <label>Sort:</label>
        <select id="sortSelect" onchange="sortEmployees()">
          <option value="">Select...</option>
          <option value="name">Name</option>
          <option value="name">Email</option>
          <option value="department">Department</option>
          <option value="role">Role</option>
        </select>
        
        
        <label>Show:</label>
        <select id="showSelect" onchange="renderEmployees()">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        
      </div>
      <button class="add-btn" id= "addEmployeeBtn" onclick="showForm()">Add Employee</button>
      
      <div id="formContainer" style="display: none; background: #fff; padding: 15px; margin-top: 20px; border-radius: 8px;">
        <h3 id="formTitle">Add Employee</h3>
        <form onsubmit="saveEmployee(event)">
          <div>
            <label>First Name:</label>
            <input type="text" id="empFirstName" required>
            
            <label>Last Name:</label>
            <input type="text" id="empLastName" required>
            
          </div>
          <div>
            <label>Email:</label>
            <input type="email" id="empEmail" required />
          </div>
          <div>
            <label>Department:</label>
            <select id="empDepartment" required>
              <option value="">-- Select Department --</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label>Role:</label>
            <select id="empRole" required>
              <option value="">-- Select Role --</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Analyst">Analyst</option>
              <option value="Designer">Designer</option>
            </select>
          </div>
          <button type="button" onclick="hideForm()">Cancel</button>
          <button type="submit" style = "background-color:#307ce7; color:white">Add</button>
        </form>
      </div>
      
    </div>
    
    <div id="employeeContainer" class="employee-container">
      <#list employees as employee>
      <div class="employee-card">
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.firstName} ${employee.lastName}</p>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Role:</strong> ${employee.role}</p>
        <div class = "editdeleteContainer">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      </#list>
      
    </div>
   
    
  </main>
    <footer>
      © 2025 Employee Directory App. All rights reserved.
    </footer>
  
  <script src="script.js"></script>
</div>
</body>
</html>
