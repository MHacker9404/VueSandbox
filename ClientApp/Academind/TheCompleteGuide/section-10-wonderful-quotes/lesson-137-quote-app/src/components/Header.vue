<template>
<div class="header">
    <div class="row">
        <div class="col-sm-12 text-center">
            <h3>Quotes added</h3>
            <div class="progress">
                <div class="progress-bar"
                     role="progressbar"
                     :style="setWidth"
                     aria-valuenow="60"
                     aria-valuemin="0"
                     aria-valuemax="100">
                    {{quoteCount}} / {{maxQuotes}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {
        @Prop() public quoteCount!: number;
        @Prop() public maxQuotes!: number;

        private get setWidth(): any {
            const width: number = (this.maxQuotes && this.maxQuotes > 0)
                                  ? (this.quoteCount / this.maxQuotes) * 100
                                  : 0;
            return {
                width: `${width}%`,
            };
        }
    }
</script>

<style scoped lang='scss'>
.header {
    border: 1px dashed green;
}
</style>