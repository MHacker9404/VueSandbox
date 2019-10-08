<template>
    <ul class="nav nav-pills">
        <li class="nav-item" role="presentation"><router-link class="nav-link active" to="/">Home</router-link></li>
        <li class="nav-item" role="presentation"><router-link class="nav-link" to="/user">User</router-link></li>
    </ul>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Header extends Vue {}
</script>
<style scoped lang="scss"></style>
