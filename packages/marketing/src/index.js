import('./bootstrap.js')
    .then((module) => {
        module.default();
    })
    .catch((err) => {
        console.error('Error loading marketing module:', err);
    });
console.log('Hello from Marketing!');