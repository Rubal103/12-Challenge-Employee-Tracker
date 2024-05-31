INSERT INTO department (department_name)
VALUES ("Finance"),
       ("Human Resources"),
       ("Sales & Marketing"),
       ("Mergers"),
       ("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Lead",65000, 1),
       ("HR Associate",48000, 2),
       ("Sales Associate",40000, 3),
       ("Mergers Associate",50000, 4),
       ("IT Associate",50000, 5),

       ("Financial Manager",75000, 1),
       ("HR Manager",60000, 2),
       ("Sales Manager",60000, 3),
       ("Merger Manager",75000, 4),
       ("IT Manager",85000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charles", "Decker", 6, NULL),
       ("Simone", "Winchester", 7, NULL),
       ("Tory", "Thomas", 8, NULL),
       ("Shawna", "Kline", 9, NULL),
       ("Neha", "Sharma", 10, NULL),

       ("Samantha", "Wilson", 1, 1),
       ("Dean", "Smith", 2, 2),
       ("Priyanka", "Kumar", 3, 3),
       ("Michael", "Bishop", 4, 4),
       ("Donald", "Curtis", 5, 5);