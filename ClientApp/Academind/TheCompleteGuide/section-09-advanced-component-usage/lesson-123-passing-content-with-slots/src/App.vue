<template>
    <div class="container">
        <app-quote>
            <h2>{{title}}</h2>
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
        private title: string = `The Quote`;
     }
</script>

<style scoped lang="scss">
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
    h2 {
        color: green;
    }
</style>
