import {createApp} from 'vue';

let app = createApp({
    template: `<h1>My shooter game!</h1>
    <svg width="600" height="600" viewbox="0 0 600 600">
      <rect x="0" y="0" width="600" height="600" style="fill:#000" />

      <rect x="300" y="550" width="20" height="30" style="fill:#00f" />

      <rect x="100" y="150" width="30" height="20" style="fill:#f00" />
      <rect x="200" y="150" width="30" height="20" style="fill:#f00" />
      <rect x="300" y="150" width="30" height="20" style="fill:#f00" />
      <rect x="400" y="150" width="30" height="20" style="fill:#f00" />
      <rect x="500" y="150" width="30" height="20" style="fill:#f00" />
    </svg>`
});

function main() {
    app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);