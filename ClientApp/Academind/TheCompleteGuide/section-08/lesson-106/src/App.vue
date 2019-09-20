<template>
    <div id='app'>
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from './components/User.vue';

@Component({
  components: {
      appUser: User
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
