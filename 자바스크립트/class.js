'use strict';
// class : template 틀
// ES6에서 도입
// 클래스 도입 전에는 바로 Object 만들어서 사용
// 1. 선언
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

const kim = new Person('kim', 26);
console.log(kim.name);
console.log(kim.age);
kim.speak();

// 2. Getter, Setter
// class를 사용하는 사람의 실수, 오작동에 대한 방어적인 자세
// getter는 프로퍼티를 읽으려고 할 때 실행
// setter는 프로퍼티에 값을 할당할 때 실행
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age cant be negative!');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','job',-1);
console.log(user1.age);

// 3. Pubilc, Private
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static
// class 자체에 할당됨. object에 상관없이 공통적으로 사용 가능
class Article {
    static publisher = 'abcd';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. 상속
class Shape {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('tritri');
    }
    getArea() {
        return this.width * this.height * 0.5; 
    }
    toString() {
        return `Triangle : color : ${this.color}`;
    }
}

const rec = new Rectangle(10, 20, 'blue');
const tri = new Triangle(20, 20, 'red');
rec.draw();
console.log(rec.getArea());
tri.draw();
console.log(tri.getArea());

// 6. instanceOf
console.log(rec instanceof Rectangle);
console.log(tri instanceof Shape);
console.log(tri.toString());