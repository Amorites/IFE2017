function Observer(data) {
    this.data = data;
    this.walk(data)
}

let p = Observer.prototype;

p.walk = function (obj) {
    let val;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key];

            // 这里进行判断，如果还没有遍历到最底层，继续new Observer
            if (typeof val === 'object') {
                new Observer(val);
            }

            this.convert(key, val);
        }
    }
};

p.convert = function (key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了' + key);
            return val
        },
        set: function (newVal) {
            console.log(`你设置了${key}，新的值为${newVal}`);
            if (newVal === val) return;
            val = newVal
        }
    })
};

p.convert = (key, val) => {
    Object.defineProperty(this.data, key, {

    })
}
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