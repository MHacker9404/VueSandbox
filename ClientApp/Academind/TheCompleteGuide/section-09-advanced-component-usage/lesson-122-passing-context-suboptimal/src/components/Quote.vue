<template>
    <div class='component quote'>
        <p>{{_getQuote}}</p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Quote extends Vue {
        @Prop({type: String}) public quote!: string;

        get _getQuote(): string {
            return this.quote;
        }
     }
</script>

<style scoped lang="scss">
    .quote {
        border: 1px solid lightgray;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>