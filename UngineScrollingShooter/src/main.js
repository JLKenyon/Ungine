import {createApp} from 'vue';

let app = createApp({
    data () {
        return {
            player: {x: 300, y: 550},
            enemies: [
                {x: 100, y: 150},
                {x: 200, y: 150},
                {x: 300, y: 150},
                {x: 400, y: 150},
                {x: 500, y: 150},
            ],
        }
    },
    template: `<h1>My shooter game!</h1>
    <svg width="600" height="600" viewbox="0 0 600 600">
      <rect x="0" y="0" width="600" height="600" style="fill:#000" />

      <rect :x="player.x" :y="player.y" width="20" height="30" style="fill:#00f" />

      <rect v-for="enemy in enemies" :x="enemy.x" :y="enemy.y" width="30" height="20" style="fill:#f00" />
    </svg>`,
    methods: {
        keyPress(event) {
            switch (event.key) {
                case 'ArrowLeft':
                case 'a':
                    this.player.x -= 10;
                    break;
                case 'ArrowRight':
                case 'd':
                    this.player.x += 10;
                    break;
                case 'ArrowUp':
                case 'w':
                    this.player.y -= 10;
                    break;
                case 'ArrowDown':
                case 's':
                    this.player.y += 10;
                    break;
            }
        },
    },
    mounted: function() {
        // register a listener for keypresses
        document.addEventListener('keydown', this.keyPress);
    },
});

function main() {
    app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);