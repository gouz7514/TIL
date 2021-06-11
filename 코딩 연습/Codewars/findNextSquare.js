// my
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let x = Math.sqrt(sq);
  if (x == Math.floor(x)) return (x + 1) ** 2;
  return -1;
}

// clever
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}