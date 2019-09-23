<template>
    <div class='component quote'>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Quote extends Vue {
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
    h2 {
        color: red;
    }
</style>