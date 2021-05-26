let current;

class Obser {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}
class Dep {
  constructor() {
    this.sub = new Set();
  }
  depend() {
    if (current) {
      this.sub.add(current);
    }
  }
  notify() {
    this.sub.forEach((el) => {
      el();
      console.log(el);
    });
  }
}
let ob = new Obser(1, 2);
let omap = new Map();
// let de = new Dep();
let de = new Dep();
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      de.depend();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      let re = Reflect.set(target, key, value);
      // console.log(de);
      de.notify();

      return re;
    },
  });
}

function watch(effect) {
  current = effect;
  effect();
  current = null;
}

const user = reactive(ob);

watch(() => {
  console.log(user.age);
});

watch(() => {
  console.log(user.name);
});
user.age = 1;
user.name = 3;
