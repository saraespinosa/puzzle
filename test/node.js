var puzzle = require( '../puzzle' ),
    vows   = require( 'vows' ),
    assert = require( 'assert' );

vows.describe( 'fizzbuzz' ).addBatch({
    'when the number is divisible by 3': {
        topic: puzzle.fizzbuzz( 3 ),
        'is Fizz': function ( topic ) {
            assert.equal( topic, 'Fizz' );
        }
    }
}).run();