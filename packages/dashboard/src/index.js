// Gives webpack time to load dependencies required by the auth module
import('./bootstrap')
    .then((module) => {
        module.default();
    })
    .catch((err) => {
        console.error('Error loading auth module:', err);
    });