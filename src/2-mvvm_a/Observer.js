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