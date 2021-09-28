ALTER TABLE blogposts
    ADD email varchar(255),
    ADD instagram varchar(255),
    ADD twitter varchar(255),
    ADD github varchar(255),
    ADD facebook varchar(255);

UPDATE blogposts SET
                     autor = 'Eda Güngör',
                     email = 'eg@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/eda90',
                     facebook = NULL
WHERE id = 1;

UPDATE blogposts SET
                     autor = 'Hai Trang Vu Thi',
                     email = 'ht@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/htvthi',
                     facebook = NULL
WHERE id = 2;

UPDATE blogposts SET
                     autor = 'Mahulomé Pede',
                     email = 'mp@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 3;

UPDATE blogposts SET
                     autor = 'Julia Schafferus',
                     email = 'js@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 4;

UPDATE blogposts SET
                     autor = 'Bettina Müller',
                     email = 'bm@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 5;