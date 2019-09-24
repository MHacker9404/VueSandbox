<template>
<div class="quote">
    <div class="panel panel-default">
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Quote extends Vue {
    @Prop() private quote!: string;
    private get _quote(): string {
        return this.quote;
    }
}
</script>

<style scoped lang='scss'>
    .quote {
        .panel-body {
            font-family: 'Arizonia', cursive;
            font-size: 24px;
            color: #6e6e6e;
            }
        border: 1px dotted black;
        padding: 5px;
        cursor: pointer;
        &:hover {
            background-color: #ffe2e2;
            }
    }
</style>