<template>
    <div class="container">
        <app-quote>
            <h2>The Quote</h2>
            <p>{{quote}}</p>
        </app-quote>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Quote from './components/Quote.vue';

    @Component({
        components: {
            'app-quote': Quote,
        },
    })
    export default class App extends Vue {
        private quote: string = `It's a wonderful life!`;
     }
</script>

<style lang="scss">
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
