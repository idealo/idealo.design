CREATE TABLE if NOT EXISTS accounts (
    firstname VARCHAR (255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    github VARCHAR(255),
    facebook VARCHAR(255),
    PRIMARY KEY (email)
    );

INSERT INTO accounts (firstname, lastname, email, instagram, twitter, github, facebook)
VALUES (
           'Theodor',
           'Fontane',
           'christiano.renaldo@email.com',
           'https://www.instagram.com/cristiano/',
           'https://twitter.com/',
           'https://github.com/',
           'https://www.facebook.com/Cristiano'
       ),
       (
           'Bertholt',
           'Brecht',
           'b.brecht@gmail.com',
           'https://www.instagram.com/therock/',
           'https://twitter.com/',
           NULL,
           NULL
       ),
       (
           'Friedrich',
           'Schiller',
           'f.schiller@gmail.com',
           NULL,
           NULL,
           NULL,
           NULL
       ),
       (
           'Thomas',
           'Mann',
           'thomas.mann@gmail.com',
           NULL,
           NULL,
           NULL,
           NULL
       ),
       (
           'Johann Wolfgang',
           'Goethe',
           'j.h.goethe@gmail.com',
           NULL,
           NULL,
           NULL,
           NULL
       ),
       (
           'Heinrich',
           'Heine',
           'heinrich-heine@heinz.de',
           NULL,
           NULL,
           NULL,
           NULL
       );