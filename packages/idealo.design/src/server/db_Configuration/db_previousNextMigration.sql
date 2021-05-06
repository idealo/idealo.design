UPDATE blogposts
SET title = 'Docker',
    nextpost =null,
    previouspost = 'Einstieg-in-die-Welt-der-Datenbanken',
    date = '2021-01-20 14:45:45.351Z'
WHERE id = 1;

UPDATE blogposts
SET title = 'Einstieg in die Welt der Datenbanken',
    nextpost ='docker',
    previouspost = 'mein-erstes-mal-mit-react',
    date = '2021-01-20 14:46:44.351Z'
WHERE id = 2;

UPDATE blogposts
SET title = 'Mein erstes Mal mit React',
    nextpost ='Einstieg-in-die-Welt-der-Datenbanken',
    previouspost = 'Versionskontrolle',
    date = '2021-01-20 14:47:44.351Z'
WHERE id = 3;

UPDATE blogposts
SET title = 'Versionskontrolle mit Git und GitHub',
    nextpost = 'mein-erstes-mal-mit-react',
    previouspost = 'draft.js',
    date = '2021-01-20 14:48:44.351Z'
WHERE id = 4;

UPDATE blogposts
SET title = 'Draft JS als Open Source Editor',
    nextpost = 'Versionskontrolle',
    previouspost = null,
    date = '2021-01-20 14:49:45.351Z'
WHERE id = 5;

DELETE from blogposts where id > 5;