<template>
<div class="header">
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        </div>
    </div>
</div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {}
</script>

<style scoped lang='scss'>
.header {
    border: 1px dashed green;
}
</style>