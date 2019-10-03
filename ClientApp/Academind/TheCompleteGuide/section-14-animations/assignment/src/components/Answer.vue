<template>
    <div class="alert alert-success text-center">
        <h1>That's Correct!</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Answer extends Vue {
    private onNextQuestion(): void {
        this.$emit('confirmed');
    }
}
</script>

<style scoped lang='scss'>
</style>
