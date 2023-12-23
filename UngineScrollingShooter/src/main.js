import {createApp} from 'vue';

let app = createApp({
    template: `<h1>My shooter game!</h1>
    <svg width="600" height="600" viewbox="0 0 600 600">
      <rect x="0" y="0" width="600" height="600" style="fill:#000" />
    </svg>`
});

function main() {
    app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);