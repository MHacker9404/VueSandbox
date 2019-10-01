<template>
  <div id="app">
     <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters && Mixins</h1>
                <p>{{text}}</p>
                <hr>
                <input type="text" v-model='filterText'>
                <ul>
                    <li v-for='fruit in filteredFruits' :key="fruit">{{fruit}}</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FruitMixin } from './fruitMixin';

@Component({
    components: { },
    directives:{ },
    mixins: [FruitMixin]
})
export default class App extends Vue {
    protected created() {
        console.log('App created');
    }
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
</style>
