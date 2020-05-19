'use strict'
let age = Symbol.for(20);



class newclass {
    constructor(name, age) {
        this.name = name;
        //this.surname = surname;
        this.age = Symbol.keyFor(age);
    }
}

let aa;

aa = new newclass(1, age);

aa[Symbol.iterator] = function () {
    let name = this.name;

    let age = this.age;

    return {
        next(){
            if(name <= age) {
                return {
                    done: false,
                    value: name++,
                };
            }else{
                return {
                    done: true,
                }
            }
        }
    }
}

let arr =[];
for(let value of aa) {
    arr.push(value)
}

export {newclass, aa, arr,age};




/*

let age = Symbol.for(20);


// попытка перебрать нечиловые значения
class newclass {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = Symbol.keyFor(age);
    }
}

aa = new newclass('john','smith', age);

aa[Symbol.iterator] = function () {
    let name = this.name;
    let surname = this.surname;
    let age = 20;

    return {
        next() {
            if (name === 'j ohn' ) { //главная сложность с построением условия
                return {
                    done: false,
                    value: name = 'john',

                };

            } else if (surname === 's mith') {
                return {
                    done: false,
                    value: surname = 'smith',
                }
            }  else (age = 20)
            {
                return {
                    done: true,
                    value: age = 20,
                }
            }
        }
    }
}


let arr =[];
for(let value of aa){
    console.log(value)
    arr.push(value)
}



 */











