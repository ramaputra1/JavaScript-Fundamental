{
  // 1. reversing array
  const numbers = [5, 4, 3, 2, 1];
  function reversingArray(arr) {
    const reversedArray = []; // jangan lupa buat ini
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]); // harus pakai arr karena: *a // nama container.push( apa yang mau dimasukkan )
    }
    return reversedArray;
  }

  console.log(reversingArray(numbers));

  // *a:
  // i = index nya
  // [i] = nilai index tapi array baru karena gatau mau ambil darimana
  // arr[i] = nilai index dari angka2 yang ada di arr

  /*

const numbers = [5, 4, 3, 2, 1];
let i = 0;

console.log(i);        // Output: 0 (ini adalah nilai indeks)
console.log(numbers[i]); // Output: 5 (ini adalah nilai pada indeks 0 di array `numbers`)

console.log([i]);      // Output: [0] (ini adalah array baru dengan elemen 0, bukan elemen dari `numbers`)

*/
}

{
  // 2. Duplicate Array
  const numbers = [5, 4, 3, 2, 1, 1];
  function duplicateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // gapake arr.length - 1 karena jika pake itu nanti index terakhir malah ga ke akses
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          // jangan lupa yang dibandingkan itu NILAI nya jadi pake [i]
          return true;
        }
      }
    }
    return false; // return false disini agar setelah cek semua.. dan gada true baru return in ini
  }

  console.log(duplicateArray(numbers));
}

{
  // 3. reverse string
  const word = "air";
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // reversed = reversed + 1 // reversed itu kan " " atau kosong // jadi ( kosong + r ) = r, lalu r + i = ri, dst
    }
    return reversed; // return diluar loop // karena jika di dalam loop nanti satu iterasi akan berhenti dh kena return / stop
  }

  console.log(reverseString(word));
}

{
  // 4. Sorting an array // small array use buble sort
  function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // loop i dulu
      for (let j = 0; j < arr.length - 1 - i; j++) {
        // loop j tapi - 1 dan - i karena biar bergeser2
        if (arr[j] > arr[j + 1]) {
          // jika index 0 dan sebelahnya lebih besar maka loop
          let temp = arr[j]; // masuk ke temp
          arr[j] = arr[j + 1]; // swap
          arr[j + 1] = temp; // swap
        }
      }
    }
    return arr;
  }
  let arr = [64, 34, 25, 12, 22];
  console.log(sortArray(arr)); // Output: [12, 22, 25, 34, 64]
}

{
  // 4 . Sorting an array // quick sorting
  function sortArray(arr) {
    if (arr.length <= 1) return arr; // jangan lupa ini agar nnt tidak overstuck

    let pivot = arr[arr.length - 1]; // pivot ambil terakhir nilai
    let leftArr = []; // buat array kiri
    let rightArr = []; // buat array kanan
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        // jika nilai lebih rendah masuk ke kiri
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]); // nilai lebih besar masuk ke kanan
      }
    }
    return [...sortArray(leftArr), pivot, ...sortArray(rightArr)]; // return masukkan rest parameter
  }
  let arr = [3, 2, 4, 1];
  console.log(sortArray(arr));
}

{
  // 5. Search
  function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid; // done
      }

      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(binarySearch(arr, 4));
}

{
  // fibonaci
  function fibonacci(n) {
    // Basis kasus
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }

    // Kasus rekursif
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  // Contoh penggunaan
  let n = 6;
  console.log(`Fibonacci ke-${n} adalah: ${fibonacci(n)}`);
}
