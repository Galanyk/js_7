let numbers = [1, 2, 3, 4, 5, 6, 7];
let index = 6;

function copyClosure() {
    return function(obj) {
        return obj.reduce((acc, el) => {
            acc.push(el);
            return acc;
        }, [])
    }
}

const copyNumbers = copyClosure();
console.log(copyNumbers(numbers))

function recursiveFunction(collection, index, result = 0) {
    if (index >= numbers.length) {
        return alert('wrong index');
    }
    if (index < 0) {
        return result;
    } else {
        result += collection[index];
        return recursiveFunction(collection, --index, result);
    }
}

const summ = recursiveFunction(numbers, index);
console.log(summ)