<template>
    <div class="component user-detail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class UserDetail extends Vue {}
</script>

<style scoped>
    .user-detail {
        background-color: lightcoral;
    }
</style>
