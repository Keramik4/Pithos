CREATE TABLE IF NOT EXISTS public.product (
	id serial4 NOT NULL,
	"name" varchar(30) NOT NULL,
	capacity int2 NOT NULL,
	CONSTRAINT product_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.storage (
	id serial4 NOT NULL,
	"name" varchar(30) NOT NULL,
	state int2 NULL,
	"expirationDate" date NULL,
	"productId" int4 NULL,
	CONSTRAINT "PK_f9b67a9921474d86492aad2e027" PRIMARY KEY (id),
	CONSTRAINT "FK_1f0ff4e5ad959c1050534857ea9" FOREIGN KEY ("productId") REFERENCES public.product(id)
);

INSERT INTO product (name, capacity) VALUES
  ('BANANAS', 100),
  ('APPLES', 150),
  ('GRAPES', 80),
  ('PINEAPLES', 50),
  ('PEARS', 140),
  ('Potatoes', 4);

INSERT INTO storage (name) VALUES
  ('001'),
  ('002'),
  ('003'),
  ('004'),
  ('005'),
  ('006'),
  ('007'),
  ('008'),
  ('009'),
  ('010');

