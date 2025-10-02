const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const successMessage = {'message': 'delayed success!'};
            resolve(successMessage);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));