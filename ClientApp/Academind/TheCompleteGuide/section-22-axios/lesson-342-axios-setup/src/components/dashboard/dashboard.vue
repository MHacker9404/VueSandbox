<template>
    <div id="dashboard">
        <h1>That's the dashboard!</h1>
        <p>You should only get here if you're authenticated!</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {},
})
export default class Dashboard extends Vue {}
</script>

<style scoped lang="scss">
#dashboard {
    h1,
    p {
        text-align: center;
    }

    p {
        color: red;
    }
}
</style>
