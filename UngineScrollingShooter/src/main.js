import {createApp} from 'vue';

let app = createApp({
    template: `<h1>Hello World!</h1>`,
});

function main() {
    app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);