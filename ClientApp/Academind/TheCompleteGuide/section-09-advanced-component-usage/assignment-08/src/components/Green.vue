<template>
    <div class='green'>
        <slot name='title'></slot>
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Green extends Vue { }

</script>

<style scoped lang='scss'>
    .green {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>