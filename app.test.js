const removeSNames = require('./app');

describe('removeSNames', () => {
    //test1
    it ('should remove all s names', () => {
        const names = ['Apple', 'Strawberry', 'Star Fruit'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('Star Fruit');
    });

    //test2
    it('should not remove non S names', () => {
        const names = ['Apple', 'Strawberry', 'Star Fruit', 'Pineapple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toContain('Apple');
    });
    //test3
    it('should be case-insensitive', () => {
        const names = ['Apple', 'Strawberry', 'strawberry', 'Pineapple'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('strawberry');
    });
});