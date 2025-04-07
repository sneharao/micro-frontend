// Gives webpack time to load dependencies required by the marketing module
import('./bootstrap')
    .then((module) => {
        module.default();
    })
    .catch((err) => {
        console.error('Error loading marketing module:', err);
    });