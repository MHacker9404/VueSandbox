<template>
    <div class="component user-edit">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UserEdit extends Vue {}
</script>

<style scoped lang='scss'>
    .user-edit {
        background-color: lightgreen;
    }
</style>
