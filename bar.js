const obj2 = {
  name: 'hello  world',
};
const foo = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(target);
      return Reflect.get(...arg);
    },
    set(target, prop, value) {
      console.log(...arguments);
      return Reflect.set(...arg);
    },
  });
};   
const user = foo(obj2);
user.name;
user.name = 11;
console.log(obj2.name);
function ts(...arguments){
    console.log(arguments)
}
ts(1,2,3,4,5)