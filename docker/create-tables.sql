CREATE TABLE IF NOT EXISTS Products (
  id int NOT NULL,
  name varchar(255) NOT NULL,
  capacityPerPalett int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO Products (id, name, capacityPerPalett) VALUES
  (1, 'BANANAS', 100),
  (2, 'APPLES', 150),
  (3, 'GRAPES', 80),
  (4, 'PINEAPLES', 50),
  (5, 'PEARS', 140),
  (6, 'Potatoes', 4);
