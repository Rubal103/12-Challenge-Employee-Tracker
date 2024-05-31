const mysql = require('mysql2');
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Aman@30121992',
      database: 'empTracker_db'
    },
    console.log("Connected to the empTracker_db database.")
  );
  
  async function promptManager() {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "Please select an option",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update an employees' role"
        ]
      }
  ]);
  if (answers.option === "View all departments") {
    
    db.query(`SELECT * FROM department`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  if (answers.option === "View all roles") {
    
    db.query(`SELECT * FROM role`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  if (answers.option === "View all employees") {
   
    db.query(`SELECT * FROM employee`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  if (answers.option === "Add department") {
    
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "Please enter a name of the new department"
      }
    ])
    db.query(`INSERT INTO department (department_name) VALUES (?)`, [answers.newDepartment] , (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  
  if (answers.option === "Add role") {
   
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "newRole",
        message: "Please enter the new role"
      },
      {
        type: "input",
        name: "newSalary",
        message: "Please enter salary"
      },
      {
        type: "input",
        name: "newDepartID",
        message: "Please provide department ID"
      }
    ])
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answers.newRole, answers.newSalary, answers.newDepartID] , (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  
  if (answers.option === "Add employee") {
   
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Please enter new employees' first name"
      },
      {
        type: "input",
        name: "lastName",
        message: "Please enter new employees' last name"
      },
      {
        type: "input",
        name: "newRole",
        message: "Please enter new employees' role ID"
      },
      {
        type: "input",
        name: "managerID",
        message: "Please enter new employees' manager ID"
      }
    ])
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answers.firstName, answers.lastName, answers.newRole, answers.managerID] , (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  
  if (answers.option === "Update an employees' role") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "updateEmployee",
        message: "Please enter employees' ID?"
      },
      {
        type: "input",
        name: "updateRole",
        message: "Please enter role ID?"
      }
    ])
    db.query(`UPDATE employee SET role_id = ? WHERE id = ?` , [answers.updateRole, answers.updateEmployee] ,  (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    }) 
  }
  }
  
  db.connect(err => {
    if (err) throw err
    promptManager();
  })
   