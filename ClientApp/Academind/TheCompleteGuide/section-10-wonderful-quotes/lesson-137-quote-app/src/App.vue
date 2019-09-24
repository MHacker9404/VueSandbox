<template>
  <div class='container-fluid'>
      <div class="row justify-content-center">
          <div class="col col-xs-12 col-sm-8 col-md-4 col-lg-2">
              <app-new-quote @quoteAdded='newQuote'></app-new-quote>
          </div>
      </div>
      <div class="row justify-content-left">
          <div class="col">
              <app-quote-grid :quotes='quotes' @quoteDeleted='deleteQuote'></app-quote-grid>
          </div>
      </div>
      <div class="row justify-content-center">
          <div class="col text-center">
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

    private deleteQuote(index: number) {
        this.quotes.splice(index, 1);
    }
}
</script>

<style scoped lang="scss">
</style>
