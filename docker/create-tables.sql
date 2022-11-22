   CREATE TABLE IF NOT EXISTS Products (
      id int NOT NULL,
      name varchar(255) NOT NULL,
      quantityInPal int NOT NULL,
      PRIMARY KEY (id)
    );

    INSERT INTO Products (id, name, quantityInPal) VALUES
    (1, 'BANANAS', 100),
    (2, 'APPLES', 150),
    (3, 'GRAPES', 80);

