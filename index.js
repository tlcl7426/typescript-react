const obj1 = {
  _name: 'hello',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

const re = Reflect.set(obj1, 'name', 12);
console.log(obj1.name);
