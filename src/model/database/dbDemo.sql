INSERT INTO department (department) VALUES ('Administration'),('qss'),('library & technical'),('information technology');
INSERT INTO employee (name,password,department) VALUES ('asala','123','Administration'),('salwa','123','qss'),('ons','123','library & technical'),('mohammed','123','information technology');
INSERT INTO problem_type (type) VALUES ('hardware'),('software'),('m2l'),('internet'),('lan'),('customer db');
INSERT INTO status_type (status) VALUES ('solved'),('in progress'), ('not solved');
INSERT INTO ticket (employee,department,problem_type,subject,duration,technical_desc,type) VALUES ('salwa','qss','hardware','help',5,'description','support'),
 ('salwa','qss','hardware','help',4,'description','loan'),('ons','library & technical','hardware','give me quick help',4,'description','loan'),('mohammed','information technology','hardware','help',5,'description','support'),
 ('salwa','qss','hardware','help',5,'description','support'),('mohammed','information technology','hardware','help',5,'description','support'),('mohammed','information technology','hardware','help',5,'description','loan');