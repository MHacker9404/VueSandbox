<template>
    <div class='red'></div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Red extends Vue { }

</script>

<style scoped lang='scss'>
    .red {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>