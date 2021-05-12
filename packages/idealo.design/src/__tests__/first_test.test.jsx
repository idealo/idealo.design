const { add } = require ( '../ui/pages/BlogPage/first_test');

test ( 'add(1,2) to be 3', () => {
    expect( add(1,2) ).toBe(3);
} );