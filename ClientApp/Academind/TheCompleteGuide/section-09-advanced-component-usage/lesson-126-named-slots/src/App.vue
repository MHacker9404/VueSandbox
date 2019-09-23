<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xs-12 component">
                <app-quote>
                    <h2 slot='title'>{{title}}</h2>
                    <h3 slot='subtitle'>Provided subtitle</h3>
                    <!-- <p slot='content'>{{quote}}</p> -->
                    <!-- default slot -->
                    <p>{{quote}}</p>
                </app-quote>
            </div>
        </div>
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
