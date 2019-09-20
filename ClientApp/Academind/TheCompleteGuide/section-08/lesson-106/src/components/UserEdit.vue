<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export default class User extends Vue {}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
