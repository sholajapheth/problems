const book_pages = Array(3456789)
  .fill(0)
  .map((_, i) => i + 1);

let loop_count = 0;

function binarySearch(pagetoFind, pages) {
  // console.log(loop_count + 1, pages);

  let book_p = pages;
  let left = 0;
  let right = book_p.length;
  const middle = Math.floor((left + right) / 2);

  console.log("middle: ", middle);
  console.log("right: ", right);

  if (!book_p.includes(pagetoFind)) {
    return "Not within range";
  }

  if (pagetoFind === book_p[middle]) {
    return book_p[middle];
  } else {
    if (book_p[middle] < pagetoFind) {
      left = middle + 1;
      // console.log("left: ", left);
      book_p = book_p.slice(left, right + 1);
      return binarySearch(pagetoFind, book_p);
    } else if (book_p[middle] > pagetoFind) {
      right = middle - 1;
      // console.log("right: ", right);
      book_p = book_p.slice(left, right + 1);
      return binarySearch(pagetoFind, book_p);
    }
  }
}

console.log(binarySearch(567, book_pages));
