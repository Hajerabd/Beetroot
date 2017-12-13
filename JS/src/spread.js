let stlang = ['C', 'C++', 'Java'];
let dilang = ['JavaScript', 'PHP', 'Ryby'];

let lang = [...stlang, 'C#', ...dilang, 'Pyton'];

console.log(lang);

function add(x, y, z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];
add(...numbers);