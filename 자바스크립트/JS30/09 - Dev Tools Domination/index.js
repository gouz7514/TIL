const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    // Interpolated

    // Styled
console.log('%c I am some great text', 'font-size:50px; text-shadow:10px 10px 0 blue');
    // warning!
console.warn('!!!!');
    // Error :|
console.error('!!!!!!!');
    // Info
console.info('haha');
    // Testing
console.assert(1 === 2 , 'this is wrong');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Thats wrong');
    // clearing
console.clear();
    // Viewing DOM Elements
console.log(p);
console.dir(p);
    // Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
})
    // counting
console.count('kim');
console.count('kim');
console.count('kim');
console.count('kim');
console.count('kim');
    // timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); 
        console.log(data);
    });

console.table(dogs);