<template>
    <div class="alert alert-danger">This is dangerous!</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class DangerAlert extends Vue {}
</script>