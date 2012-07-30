(function ( global, undefined ) {
    "use strict";
    
    var puzzle = {
        fizzbuzz: function ( i, j ) {
            if ( typeof j === 'undefined' ) {
                return ( ( i % 3 ) ? '' : 'Fizz' ) + ( ( i % 5 ) ? '' : 'Buzz' ) || i;
            } else {                
                var fb = [];
                for ( ; i <= j; i++ )
                    fb.push( puzzle.fizzbuzz( i ) );
                return fb;
            }
        }
    };
    
    global.exports ? global.exports = puzzle : global.puzzle = puzzle;
}( typeof window !== 'undefined' ? window : module ));