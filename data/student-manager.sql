-- database: c:\Personal Projects\student-manager\data\student-manager.db

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL, 
    lastName TEXT NOT NULL, 
    email TEXT NOT NULL UNIQUE, 
    phone TEXT
    );
    INSERT INTO students ( firstName, lastName, email, phone) VALUES
    ('John', 'Doe', 'john@doe.com', '909879873'),
    ('Macy', 'Doe', 'macy@doe.com', '875645648'),
    ('Dan','Doe','dan@doe.com','0989873946');

    SELECT * FROM students;