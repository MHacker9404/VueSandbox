<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import User from './components/User.vue';

    @Component({
        components: {
            'app-user': User,
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
