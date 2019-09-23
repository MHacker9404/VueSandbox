<template>
 <div class="quote-grid">
     <div class="row justify-content-md-left">
         <app-quote v-for='_quote in _quotes' :key='_quote'>{{_quote}}</app-quote>
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
}
</script>

<style lang="scss">
.quote-grid {

}
</style>
