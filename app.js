// class Obser {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   get name() {
//     dep.depend();

//     return this._name;
//   }
//   set name(value) {
//     this._name = value;
//     dep.notify();
//   }
// }
// for (const it of Object.values(Obser)) {

// }
// let activeEffect;
// class Dep {
//   constructor() {
//     this.effects = new Set();
//   }
//   depend() {
//     if (activeEffect) {
//       this.effects.add(activeEffect);
//     }
//   }
//   notify() {
//     this.effects.forEach((effect) => {
//       effect();
//     });
//   }
// }
// function watch(effect) {
//   activeEffect = effect;
//   effect();
//   activeEffect = null;
// }
// let cur;
// let ob = new Obser(12, 13);
// let dep = new Dep();
// watch(() => {
//   cur = ob.name + 10;
//   console.log(cur);
// });
// ob.name = 20;
