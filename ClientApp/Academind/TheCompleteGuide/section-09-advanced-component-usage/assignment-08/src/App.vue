<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red>
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
    export default class App extends Vue { }
</script>

<style scoped lang="scss">
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
