<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click='blueClicked'>Load Blue Template</button>
                <button class="btn btn-success" @click='greenClicked'>Load Green Template</button>
                <button class="btn btn-danger" @click='redClicked'>Load Red Template</button>
                <hr>
                <component :is='selectedComponent'>
                    <h2 slot='title'>{{title}}</h2>
                    <p>Content</p>
                </component>
                <!--
                <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red>
                -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';


    @Component({
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
        },
    })
    export default class App extends Vue {
        private title: string = 'Blue';
        private selectedComponent: string = 'app-blue';

        private blueClicked(): void {
            this.selectedComponent = 'app-blue';
            this.title = 'Blue';
        }

        private greenClicked(): void {
            this.selectedComponent = 'app-green';
            this.title = 'Green';
        }

        private redClicked(): void {
            this.selectedComponent = 'app-red';
            this.title = 'Red';
        }
     }
</script>

<style scoped lang="scss">
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
