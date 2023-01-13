CREATE TABLE IF NOT EXISTS Product (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  capacity int NOT NULL
);

INSERT INTO Product (name, capacity) VALUES
  ('BANANAS', 100),
  ('APPLES', 150),
  ('GRAPES', 80),
  ('PINEAPLES', 50),
  ('PEARS', 140),
  ('Potatoes', 4);
