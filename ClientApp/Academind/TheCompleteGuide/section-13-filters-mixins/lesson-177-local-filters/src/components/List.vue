<template>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters && Mixins</h1>
                <input type='text' v-model='filterText' />
                <ul>
                    <li v-for='fruit in _fruits' :key='fruit'>{{fruit}}</li>
                </ul>
            </div>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as _filter from 'lodash/filter';
import * as _startsWith from 'lodash/startsWith';

@Component({
    components: { },
    directives:{ },
})
export default class List extends Vue {
    private fruits: string[] = ['Apple', 'Banana', 'Mango', 'Melon'];
    private filterText: string = '';

    private get _fruits() {
        return _filter(this.fruits, (fruit: string) => _startsWith(fruit, this.filterText));
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
