import './bootstrap';

import { createApp } from 'vue';
import Lliga from './components/Lliga.vue';
import Lligues from './components/Lligues.vue';
import Missatge from './components/Missatge.vue';

const app = createApp({});

app.component('lliga', Lliga);
app.component('lligues', Lligues);
app.component('missatge', Missatge);

app.mount('#app');
