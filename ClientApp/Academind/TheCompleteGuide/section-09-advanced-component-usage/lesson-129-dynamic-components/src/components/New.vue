<template>
    <div class='new'>
        <h3>New Quote</h3>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class New extends Vue { }
</script>

<style scoped lang="scss">
    .new {
        border: 2px dashed green;
        box-shadow: 2px 2px 4px lightgray;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>