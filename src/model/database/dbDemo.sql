
INSERT INTO department (department) VALUES ('Administration'),('qss'),('library & technical'),('information technology');
INSERT INTO employee (name,password,department) VALUES ('asala','123','Administration'),('salwa','123','qss'),('ons','123','library & technical'),('mohammed','123','information technology');
INSERT INTO problem_type (type) VALUES ('hardware'),('software'),('m2l'),('internet'),('lan'),('customer db');
INSERT INTO status_type (status) VALUES ('solved'),('in progress'), ('not solved');
INSERT INTO ticket (employee,department,problem_type,subject,duration,technical_desc,type) VALUES ('salwa','qss','hardware','help',5,'description','support'),
 ('salwa','qss','hardware','help',4,'description','loan'),('ons','library & technical','hardware','give me quick help',4,'description','loan'),('mohammed','information technology','hardware','help',5,'description','support'),
INSERT INTO inventory (ass_no, inventory_id, name,employee) VALUES (145,777855,'camira','ons'), (455,5664544,'laptop','salwa'), (555,65656,'PC','mohammed');
INSERT INTO brand (brand) VALUES ('brand1'),('brand2'),('brand3');
INSERT INTO device (device) VALUES ('device1'),('device2'),('device3');
INSERT INTO place (place) VALUES ('place1'),('place2'),('place3');
INSERT INTO vendor (vendor) VALUES ('vendor1'),('vendor2'),('vendor3');

INSERT INTO type (type) VALUES ('Hardware'),('Software');
INSERT INTO action (action) VALUES ('Add'),('Upgrade'),('Maintain'),('Replace');
INSERT INTO parts (part) VALUES ('Hard Drive'),('CD-Rom'),('UPS');
=
