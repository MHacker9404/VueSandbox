<template>
    <div class='quote'>
        <div class="title row quote">
            <div class="col-xs-12">
                <slot name='title'></slot>
                <span class='subtitle'><slot name='subtitle'>The Subtitle</slot></span>
            </div>
        </div>
        <hr>
        <div class="content row quote">
            <div class="col-xs-12">
                <!-- <slot name='content'></slot> -->
                <!-- default slot -->
                <slot></slot>
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
        font-style: italic;
    }
    .subtitle {
        text-decoration: line-through;
        color: gray;
        opacity: .5;
    }
    .content {
        font-style: oblique;
        font-weight: bold;
        text-decoration: underline overline dotted;
        text-decoration-style: wavy;
    }
    h2 {
        color: red;
    }
</style>