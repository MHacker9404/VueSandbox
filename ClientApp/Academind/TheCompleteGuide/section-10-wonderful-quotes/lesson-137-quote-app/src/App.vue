<template>
  <div class='container'>
      <div class="row">
          <app-new-quote></app-new-quote>
      </div>
      <div class="row">
          <app-quote-grid :quotes='quotes'></app-quote-grid>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';

@Component({
    components: {
        'app-quote-grid': QuoteGrid,
        'app-new-quote': NewQuote,
    },
})
export default class App extends Vue {
    private maxQuotes: number = 10;
    private quotes: string[] = ['Just a quote to see something'];
}
</script>

<style scoped lang="scss">
</style>
