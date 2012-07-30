(function ( puzzle, undefined ) {
    puzzle = {
        fizzBuzz: function ( n ) {
            return ( ( n % 3 ) ? '' : 'Fizz' ) + ( ( n % 5 ) ? '' : 'Buzz' ) || n;
        },
        kafifa: function ( n ) {
            return ( ( n % 7 ) && ( ( n - 7 ) % 10 ) ) ? n : 'Kafifa';
        }
    };
}( typeof window === 'undefined' ? module.exports : window.puzzle ));