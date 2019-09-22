<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class App extends Vue { }
</script>

<style lang="scss">
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
