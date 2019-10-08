<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- <div class="col"> -->
                    <h1>Routing</h1>
                    <hr />
                    <app-header></app-header>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';

@Component({
    components: {
        'app-header': Header,
    },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
