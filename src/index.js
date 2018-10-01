// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (prop) => {
    // .then (function(value) {
    //     //console.log(value); // 1
    //     return value + 1;
    // });

    // Object.defineProperty(Object.prototype, prop, {
    //     enumerable: false,
    //     value: prop
    // });
    // return prop;

   // var person = { age: 18 };
   // Object.defineProperty(person, 'name', { value: 'Joshua', enumerable: false });


    var obj = { };

    //Object.defineProperty(obj, "foo", { value: 'show', enumerable: true });
    Object.defineProperty(obj, "bar", { value: 'hide', enumerable: false });

    for (var prop in obj) {
        console.log(obj[prop]);
    }
    return obj;

};
const createProtoMagicObject = () => {
    function Magic(){};
    Magic.__proto__ = Magic.prototype;
    return Magic;
};
const incrementor = () => {
    incrementor.count = incrementor.count ? ++incrementor.count : 1;
    incrementor.valueOf = function() {
        return incrementor.count;
    }
    return incrementor;
};

const asyncIncrementor = () => {
    asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
    return new Promise((resolve, regect) => {
        return resolve(++asyncIncrementor.count);
    })
};
const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (this.current === undefined) {
                this.current = 0;
            }

            if (this.current <= 10) {
                return {
                    done: false,
                    value: ++this.current
                };
            } else {
                delete this.current;
                return {
                    done: true
                };
            }
        }

    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    for(let key in obj) {
        if(typeof(obj[key]) === 'object'){
            count += getDeepPropertiesCount(obj[key]);
        }
        count++;
    }
    return count;
};
const createSerializedObject = () => {
    // noinspection JSAnnotator

    function Status(type) {
        this.type = type;
    }

    var race = new Status('race');
    race = JSON.parse(JSON.stringify(race));
return race;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    arr.sort(function(a, b){
        if(a.__proto__ === b){
            return -1;
        }
        return 1;
    });
    return (arr);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
