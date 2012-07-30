module.exports = (function () {
    return {
        fizzbuzz: function ( n ) {
            return ( ( n % 3 ) ? '' : 'Fizz' ) + ( ( n % 5 ) ? '' : 'Buzz' ) || n;
        }
    };
}());