function fun() {
    console.log(this === window);
}

const object = {};

object.fun = fun;

object.fun();
