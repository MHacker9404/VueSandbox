<template>
  <div class='container-fluid'>
      <div class="row justify-content-center">
          <div class="col">
              <app-header :quoteCount='quotes.length' :maxQuotes='maxQuotes'></app-header>
          </div>
      </div>
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
import Header from './components/Header.vue';

@Component({
    components: {
        'app-quote-grid': QuoteGrid,
        'app-new-quote': NewQuote,
        'app-header': Header,
    },
})
export default class App extends Vue {
    private maxQuotes: number = 10;
    private quotes: string[] = ['Just a quote to see something'];

    private newQuote(quote: string): void {
        if(this.quotes.length >= this.maxQuotes){
            return alert('Please delete one or more quotes first');
        }

        this.quotes.push(quote);
    }

    private deleteQuote(index: number) {
        this.quotes.splice(index, 1);
    }
}
</script>

<style scoped lang="scss">
</style>
