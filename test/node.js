var puzzle = require( '../puzzle' ),
    vows   = require( 'vows' ),
    assert = require( 'assert' );

// testing fizzbuzz
vows.describe( 'fizzbuzz' ).addBatch({
    'when the number is divisible by 3': {
        topic: puzzle.fizzbuzz( 3 ),
        'is Fizz': function ( topic ) {
            assert.equal( topic, 'Fizz' );
        }
    },
    'when the number is divisible by 5': {
        topic: puzzle.fizzbuzz( 5 ),
        'is Buzz': function ( topic ) {
            assert.equal( topic, 'Buzz' );
        }
    },
    'when the number is divisible by 3 and 5': {
        topic: puzzle.fizzbuzz( 15 ),
        'is FizzBuzz': function ( topic ) {
            assert.equal( topic, 'FizzBuzz' );
        }
    },
    'when the number is NOT divisible by 3 OR 5': {
        topic: puzzle.fizzbuzz( 2 ),
        'is it self': function ( topic ) {
            assert.equal( topic, 2 );
        }
    }
}).run();