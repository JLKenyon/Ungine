import {createApp} from 'vue';

let app = createApp({
    data () {
        return {
            player: {x: 300, y: 550},
            input: {left: 0, right: 0, up: 0, down: 0},
            enemies: [
                {x: 100, y: 150},
                {x: 200, y: 150},
                {x: 300, y: 150},
                {x: 400, y: 150},
                {x: 500, y: 150},
            ],
            keyState: {},
            bullets: [],
        }
    },
    template: `<h1>My shooter game!</h1>
    <svg width="600" height="600" viewbox="0 0 600 600">
      <rect x="0" y="0" width="600" height="600" style="fill:#000" />

      <rect :x="player.x" :y="player.y" width="20" height="30" style="fill:#00f" />

      <rect v-for="enemy in enemies" :x="enemy.x" :y="enemy.y" width="30" height="20" style="fill:#f00" />
      <rect v-for="bullet in bullets" :x="bullet.x" :y="bullet.y" width="3" height="3" style="fill:#ff0" />
    </svg>`,
    methods: {
        keyPress(event) {
            this.keyState[event.key] = true;

            if (event.key == ' ') {
                this.bullets.push({x: this.player.x + 10, y: this.player.y - 10});
            }
        },
        keyUp(event) {
            this.keyState[event.key] = false;
        },

        tick() {
            // move enemies
            for (let enemy of this.enemies) {
                enemy.y += 1;
            }

            for (let bullet of this.bullets) {
                bullet.y -= 3;
            }

            // Remove bullets that leave the screen
            this.bullets = this.bullets.filter(bullet => bullet.y > 0);

            // Remove enemies that leave the screen
            this.enemies = this.enemies.filter(enemy => enemy.y < 600);

            // Remove enemies that are hit by bullets
            this.enemies = this.enemies.filter(enemy => {
                for (let bullet of this.bullets) {
                    if (bullet.x >= enemy.x && bullet.x <= enemy.x + 30 && bullet.y >= enemy.y && bullet.y <= enemy.y + 20) {
                        return false;
                    }
                }
                return true;
            });

            // move player
            this.player.x += 2 * ((this.keyState['d'] || this.keyState['ArrowRight'] ? 1 : 0) - (this.keyState['a'] || this.keyState['ArrowLeft'] ? 1 : 0));

            setTimeout(this.tick, 1000.0/60.0);
        },
    },
    mounted: function() {
        // register a listener for keypresses
        document.addEventListener('keydown', this.keyPress);
        document.addEventListener('keyup', this.keyUp);

        // Start the clock
        setTimeout(this.tick, 1000.0/60.0);
    },
});

function main() {
    app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);