let current;

class Obser {
  constructor(age, name) {
    this._age = age;
    this.name = name;
  }
  get age() {
    de.depend();
    return this._age;
  }
  set age(value) {
    this._age = value;
    de.notify();
  }
}
class Dep {
  constructor() {
    this.sub = new Set();
  }
  depend() {
    if (current) {
      this.sub.add(current);
      console.log(this.sub);
    }
  }

  notify() {
    this.sub.forEach((el) => {
      //   console.log(el);
      el();
    });
  }
}
let ob = new Obser(1, 2);
let de = new Dep();

function watch(effect) {
  current = effect;
  effect();
  current = null;
}

// watch(() => {
//   console.log(ob.age + 5);
// });

watch(() => {
  console.log(ob.age + 2);
});
ob.age = 2;
ob.age = 3;
