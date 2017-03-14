## 动态数据绑定（一）

请实现这样的一个 Observer，要求如下：

1. 传入参数只考虑对象，不考虑数组。
2. new Observer返回一个对象，其 data 属性要能够访问到传递进去的对象。
3. 通过 data 访问属性和设置属性的时候，均能打印出右侧对应的信息。

实现如下：
```js
export default class Observer {
    constructor(data) {
        this.data = data;
        this.walk(data);
    }

    walk = (obj) => {
        for (let [key, value] of Object.entries(obj)) {
            if (typeof value === 'object') {
                this.walk(value);
            }

            this.convert(key, value);
        }
    };

    convert = (key, value) => {
        Object.defineProperty(this.data, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                console.log(`你访问了${key}`);
                return value;
            },
            set: (newVal) => {
                console.log(`你设置了${key}，新的值为${newVal}`);
                if (newVal === value) return;
                value = newVal
            }
        })
    };
}
```

可直接打开控制台测试