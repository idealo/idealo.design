ALTER TABLE blogposts
    ADD email VARCHAR (255),
    ADD instagram VARCHAR (255),
    ADD twitter VARCHAR (255),
    ADD github VARCHAR (255),
    ADD facebook VARCHAR (255);

UPDATE blogposts SET
                     email = 'eg@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/eda90',
                     facebook = NULL
WHERE id = 1;

UPDATE blogposts SET
                     email = 'ht@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/htvthi',
                     facebook = NULL
WHERE id = 2;

UPDATE blogposts SET
                     email = 'mp@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 3;

UPDATE blogposts SET
                     email = 'js@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 4;

UPDATE blogposts SET
                     email = 'bm@gmail.com',
                     instagram = NULL,
                     twitter = 'https://twitter.com/donaldtrump',
                     github = 'https://github.com/',
                     facebook = NULL
WHERE id = 5;