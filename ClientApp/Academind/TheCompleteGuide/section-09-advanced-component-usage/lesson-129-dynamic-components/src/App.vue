<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xs-12 component">
                <button @click="selectedComponent='app-quote'">Quote</button>
                <button @click="selectedComponent='app-author'">Author</button>
                <button @click="selectedComponent='app-new'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <component :is='selectedComponent'>
                    <h2 slot='title'>{{title}}</h2>
                    <h3 slot='subtitle'>Provided subtitle</h3>
                    <p slot='content'>{{quote}}</p>
                    <!-- default slot -->
                    <p>{{quote}}</p>
                </component>
                <!--
                <app-quote>
                    <h2 slot='title'>{{title}}</h2>
                    <h3 slot='subtitle'>Provided subtitle</h3>
                    <p slot='content'>{{quote}}</p>
                    default slot
                    <p>{{quote}}</p>
                </app-quote>
                -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    @Component({
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New,
        },
    })
    export default class App extends Vue {
        private quote: string = `It's a wonderful life!`;
        private title: string = `The Quote`;
        private selectedComponent = 'app-quote';
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
