var puzzle = require( '../puzzle' ),
    assert = require( 'assert' );

describe( 'puzzle', function () {
    describe( 'fizzbuzz', function () {
        it( 'should return Fizz for divisible by 3', function () {
            assert.equal( 'Fizz', puzzle.fizzbuzz( 3 ) );
            assert.equal( 'Fizz', puzzle.fizzbuzz( 9 ) );
        });
    });
});