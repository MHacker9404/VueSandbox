<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Animations </h1>
                <hr>
                <button class="btn btn-primary" @click='show = !show'>Show Alert</button>
                <br />
                <br />
                <transition name='fade'>
                    <div class="alert alert-info" v-if='show'>This is some info</div>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { },
    directives:{ },
})
export default class App extends Vue {
    private show: boolean = false;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1.5s;
}
.fade-leave {}

.fade-leave-active {
    transition: opacity 1.5s;
    opacity: 0;
}
</style>
