<template>
    <div class='author'>
        <h3>The Author</h3>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Author extends Vue { }
</script>

<style scoped lang="scss">
    .author {
        border: 2px dotted red;
        box-shadow: 2px 2px 4px lightblue;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>