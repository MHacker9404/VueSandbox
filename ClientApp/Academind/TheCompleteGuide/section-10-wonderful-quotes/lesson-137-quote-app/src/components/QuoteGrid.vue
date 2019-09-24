<template>
 <div class="quote-grid">
     <div class="row">
         <div class="col" v-for='(_quote, index) in _quotes' :key='_quote'>
             <app-quote @click.native='deleteQuote(index)'>{{_quote}}</app-quote>
         </div>
     </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Quote from './Quote.vue';

@Component({
    components: {
        'app-quote': Quote,
    },
})
export default class QuoteGrid extends Vue {
    @Prop() public quotes!: string[];

    private get _quotes(): string[] {
        return this.quotes;
    }

    private deleteQuote(index: number): void {
        this.$emit('quoteDeleted', index);
    }
}
</script>

<style scoped lang="scss">
.quote-grid {

}
</style>
