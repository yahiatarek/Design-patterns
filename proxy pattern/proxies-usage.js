// represents an interface for accessing a particular resource or Proxy is a structural
// design pattern that lets you provide a substitute or placeholder for another object.
// A proxy controls access to the original object, allowing you to
// perform something either before or after the request gets through to the original object.
// an example can be the js proxy

// https://blog.logrocket.com/practical-use-cases-for-javascript-es6-proxies/

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const handler2 = {
  get(target, prop, receiver) {
    console.log(target, prop, receiver)
    return "world";
  },
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(target, handler3);
// console.log(proxy1.message1)
// console.log(proxy1.message2)

const input = document.querySelector('#username')
const div = document.querySelector('#usernamediv')

const inputState = {
    id: 'username',
    value: ''
}

const twoWayBindingHandler = {
  set: function (target, key, value) {
    target[key] = value;
    div.innerHTML = value;
    return true
  }
};

const proxy = new Proxy(inputState, twoWayBindingHandler);

function changeValue() {
  proxy.value = input.value
}