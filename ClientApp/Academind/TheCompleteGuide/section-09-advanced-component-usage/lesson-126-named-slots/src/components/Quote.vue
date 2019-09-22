<template>
    <div class='quote'>
        <div class="title row quote">
            <div class="col-xs-12">
                <slot name='title'></slot>
            </div>
        </div>
        <hr>
        <div class="content row quote">
            <div class="col-xs-12">
                <slot name='content'></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Quote extends Vue { }
</script>

<style scoped lang="scss">
    .quote {
        border: 1px solid lightgray;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    .title {
        font-style: italic
    }
    h2 {
        color: red;
    }
</style>