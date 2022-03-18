function makeObjectDeepCopy(obj) {
  if (typeof obj === 'object') {
    const newObj = Array.isArray(obj) ? [] : {};
    
    for (const key in obj) {
      newObj[key] = makeObjectDeepCopy(obj[key]);
    }
    
    return newObj;
  } else {
    return obj;
  }
}


function selectFromInterval(arr, arg1, arg2) {
  const isCorrect = Array.isArray(arr) && arr.every((el, index) => typeof el === 'number') &&
    typeof arg1 === 'number' && typeof arg2 === 'number';
  
  const newArr = [];
  const result = [];
  
  if (arg1 < arg2 && isCorrect) {
    for (let i = arg1; i <= arg2; i++) {
      newArr.push(i);
    }
  } else if (arg1 > arg2 && isCorrect) {
    for (let i = arg2; i <= arg1; i++) {
      newArr.push(i);
    }
  } else {
    throw new Error('Ошибка!');
  }
  
  newArr.forEach(el => {
    if (arr.includes(el)) {
      result.push(el);
    }
  })
  
  return result;
}


const myIterable = {
  from: 1,
  to: 3,
  
  [Symbol.iterator]: function () {
    const [fromKey, toKey] = Object.keys(this);
    const fromImmutable = this[fromKey];
    const toImmutable = this[toKey];
    
    return {
      currentValue: this[fromKey],
      lastValue: this[toKey],
      
      next() {
        const isCorrect = fromKey === 'from' && toKey === 'to' && typeof this.currentValue === 'number' &&
          typeof this.lastValue === 'number' && fromImmutable <= toImmutable;
        
        if (!isCorrect) {
          throw new Error('Ошибка!');
        }
        
        if (this.currentValue <= this.lastValue) {
          return {done: false, value: this.currentValue++};
        } else {
          return {done: true};
        }
      }
    }
  }
}




