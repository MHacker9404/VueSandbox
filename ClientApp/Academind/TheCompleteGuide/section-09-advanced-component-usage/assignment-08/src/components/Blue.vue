<template>
    <div class='blue'>
        <slot name='title'></slot>
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Blue extends Vue { }

</script>

<style scoped lang='scss'>
    .blue {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>