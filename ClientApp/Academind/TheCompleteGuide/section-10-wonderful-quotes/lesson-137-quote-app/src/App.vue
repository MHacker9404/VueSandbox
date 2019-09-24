<template>
  <div class='container'>
      <app-new-quote @quoteAdded='newQuote'></app-new-quote>
      <app-quote-grid :quotes='quotes'></app-quote-grid>
      <div class="row">
          <div class="col-sm-12 text-center">
              <div class="alert alert-info">Click on a quote to delete it</div>
          </div>
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

    private newQuote(quote: string): void {
       this.quotes.push(quote);
    }
}
</script>

<style scoped lang="scss">
</style>
