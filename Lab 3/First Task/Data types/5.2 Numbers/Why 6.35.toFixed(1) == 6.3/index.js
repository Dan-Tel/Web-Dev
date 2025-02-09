// Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.

// Let’s see:

alert((6.35).toFixed(20)); // 6.34999999999999964473
// The precision loss can cause both increase and decrease of a number. In this particular case the number becomes a tiny bit less, that’s why it rounded down.s
