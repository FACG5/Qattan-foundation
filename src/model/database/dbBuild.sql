
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
    problem_desc TEXT,
    problem_type VARCHAR REFERENCES problem_type(type)  ON UPDATE CASCADE,
    status_type VARCHAR REFERENCES status_type(status)  ON UPDATE CASCADE DEFAULT 'not solved',
    subject VARCHAR NOT NULL,
    duration INTEGER,
    technical_desc TEXT,
    it_employee VARCHAR REFERENCES employee(name)  ON UPDATE CASCADE,
    type TEXT,
    priority VARCHAR DEFAULT 'medium' 
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

CREATE TABLE repair (
    id SERIAL PRIMARY KEY,
    no INTEGER,
    date DATE,
    type VARCHAR REFERENCES type(type) ON UPDATE CASCADE,
    action VARCHAR REFERENCES action(action) ON UPDATE CASCADE,
    part VARCHAR REFERENCES parts(part)  ON UPDATE CASCADE,
    description TEXT
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

INSERT INTO department (department) VALUES ('Administration'),('qss'),('library & technical'),('information technology');
INSERT INTO employee (name,password,department) VALUES ('asala','123','Administration'),('salwa','123','qss'),('ons','123','library & technical'),('mohammed','123','information technology');
INSERT INTO problem_type (type) VALUES ('hardware'),('software'),('m2l'),('internet'),('lan'),('customer db');
INSERT INTO status_type (status) VALUES ('solved'),('in progress'), ('not solved');
INSERT INTO ticket (employee,department,problem_type,subject,duration,technical_desc,type) VALUES ('salwa','qss','hardware','help',5,'description','support'),
 ('salwa','qss','hardware','help',4,'description','loan'),('ons','library & technical','hardware','give me quick help',4,'description','loan'),('mohammed','information technology','hardware','help',5,'description','support'),
 ('salwa','qss','hardware','help',5,'description','support'),('mohammed','information technology','hardware','help',5,'description','support'),('mohammed','information technology','hardware','help',5,'description','loan')
 ;
INSERT INTO ticket (employee, problem_type, status_type, subject, duration, technical_desc, type) VALUES ('ons','software', 'solved' , 'laptop needs formatting', 1, 'laptop has so many bugs and is so slow', 'support'),
('asala', 'software', 'in progress' , 'laptop needs antivirus', 1, 'laptop has a lot of viruses', 'support')
;
INSERT INTO inventory (ass_no, inventory_id, name,employee) VALUES (145,777855,'camira','ons'), (455,5664544,'laptop','salwa'), (555,65656,'PC','mohammed');

COMMIT;
