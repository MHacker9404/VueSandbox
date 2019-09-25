<template>
<div class="new-quote">
    <div class="row justify-content-center">
        <div class="col text-center">
            <form action=" ">
                <div class="form-group">
                    <label>Quote</label>
                    <textarea class='form-control' rows=3 v-model='quote'></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click.prevent='createNew'>Add Quote</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class NewQuote extends Vue {
    private quote: string = '';

    private createNew(): void {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
    }
}
</script>

<style scoped lang="scss">
.new-quote {
}
</style>
