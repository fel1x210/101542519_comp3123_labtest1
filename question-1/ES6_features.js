function lowerCaseWords(words) {
  return new Promise((resolve, reject) => {
    try {
        if (!Array.isArray(words)) {
            return reject('Input must be an array');
        }

        const result = words.filter(item => typeof item === 'string').map(word => word.toLowerCase());
        resolve(result);
    } catch (error) {
        reject(error.message);
    }
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(error => console.error(error));