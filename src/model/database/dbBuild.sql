
BEGIN ;

DROP TABLE IF EXISTS department, employee, problem_type, status_type, ticket, brand, device, place, vendor,type, action, parts, inventory, repair CASCADE;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department VARCHAR UNIQUE NOT NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    department VARCHAR REFERENCES department(department) ON UPDATE CASCADE
);

CREATE TABLE problem_type (
    id SERIAL PRIMARY KEY,
    type VARCHAR UNIQUE NOT NULL
);

CREATE TABLE status_type (
    id SERIAL PRIMARY KEY,
    status VARCHAR UNIQUE NOT NULL
);

CREATE TABLE ticket (
    ticket_no SERIAL PRIMARY KEY,
    ticket_date DATE  DEFAULT NOW(),
    employee VARCHAR REFERENCES employee(name)  ON UPDATE CASCADE,
    department VARCHAR REFERENCES department(department)  ON UPDATE CASCADE,
    problem_type VARCHAR REFERENCES problem_type(type)  ON UPDATE CASCADE,
    status_type VARCHAR REFERENCES status_type(status)  ON UPDATE CASCADE DEFAULT 'not solved',
    subject VARCHAR NOT NULL,
    duration INTEGER,
    technical_desc TEXT,
    it_employee VARCHAR REFERENCES employee(name)  ON UPDATE CASCADE,
    type TEXT
);

CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    brand VARCHAR UNIQUE NOT NULL
);

CREATE TABLE device (
    id SERIAL PRIMARY KEY,
    device VARCHAR UNIQUE NOT NULL
);

CREATE TABLE place (
    id SERIAL PRIMARY KEY,
    place VARCHAR UNIQUE NOT NULL
);

CREATE TABLE vendor (
    id SERIAL PRIMARY KEY,
    vendor VARCHAR UNIQUE NOT NULL
);

CREATE TABLE type (
    id SERIAL PRIMARY KEY,
    type VARCHAR UNIQUE NOT NULL
);

CREATE TABLE action (
    id SERIAL PRIMARY KEY,
    action VARCHAR UNIQUE NOT NULL
);

CREATE TABLE parts (
    id SERIAL PRIMARY KEY,
    part VARCHAR UNIQUE NOT NULL
);

CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    ass_no SERIAL,
    inventory_id INTEGER,
    device VARCHAR REFERENCES device(device)  ON UPDATE CASCADE,
    name VARCHAR,
    brand VARCHAR REFERENCES brand(brand)  ON UPDATE CASCADE,
    description VARCHAR,
    cdkey VARCHAR,
    employee VARCHAR REFERENCES employee(name)  ON UPDATE CASCADE,
    place VARCHAR REFERENCES place(place)  ON UPDATE CASCADE,
    vendor VARCHAR REFERENCES vendor(vendor)  ON UPDATE CASCADE,
    price_usd INTEGER,
    price_nis INTEGER,
    purchase_date DATE,
    warranty INTEGER,
    serial_no VARCHAR,
    processor VARCHAR,
    ram VARCHAR,
    hd1 INTEGER,
    hd2 INTEGER,
    notes TEXT,
    netport VARCHAR,
    status INTEGER
);

CREATE TABLE repair (
    id SERIAL PRIMARY KEY,
    no INTEGER REFERENCES inventory(id) ON UPDATE CASCADE,
    date DATE,
    type VARCHAR REFERENCES type(type) ON UPDATE CASCADE,
    action VARCHAR REFERENCES action(action) ON UPDATE CASCADE,
    part VARCHAR REFERENCES parts(part)  ON UPDATE CASCADE,
    description TEXT
);

COMMIT;
