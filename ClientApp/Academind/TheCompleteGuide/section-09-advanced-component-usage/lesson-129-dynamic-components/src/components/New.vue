<template>
    <div class="new">
        <h3>New Quote</h3>
        <button @click="counter += 1">Increment counter</button>
        <hr />
        <p>{{ counter }}</p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class New extends Vue {
        private counter: number = 0;
        protected destroyed() {
            console.log('destroyed');
        }
        protected deactivated() {
            console.log('deactivated');
        }
        protected activated() {
            console.log('activated');
        }
    }
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
