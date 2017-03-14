import Observer from './Observer';

let data = {
    user: {
        name: "liangshaofeng",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};

let app = new Observer(data);


let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

let app2 = new Observer({
    university: 'bupt',
    major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science