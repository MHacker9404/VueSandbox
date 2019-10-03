<template>
<div class="question">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-xs-6 col-sm-6 text-center">
                    <button class="btn btn-primary btn-lg"
                            @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
                </div>
                <div class="col-xs-6 col-sm-6 text-center">
                    <button class="btn btn-primary btn-lg"
                            @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
                </div>
                <div class="col-xs-6 col-sm-6 text-center">
                    <button class="btn btn-primary btn-lg"
                            @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
                </div>
                <div class="col-xs-6 col-sm-6 text-center">
                    <button class="btn btn-primary btn-lg"
                            @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Question extends Vue {
    private readonly MODE_ADDITION = 1;
    private readonly MODE_SUBTRACTION = 2;

    private question: string ='Oops, an error occured';
    private btnData: any[] = [
        {correct: true, answer: 0},
        {correct: false, answer: 0},
        {correct: false, answer: 0},
        {correct: false, answer: 0},
    ];

    protected created(): void {
        this.generateQuestion();
    }

    private generateQuestion(): void {
        const first = this.generateRandomNumber(1, 100);
        const second = this.generateRandomNumber(1, 100);
        const mode = this.generateRandomNumber(1, 2);

        let correctAnswer = 0;

        switch(mode) {
            case this.MODE_ADDITION:
                correctAnswer = first + second;
                this.question = `What's ${first} + ${second}?`;
                break;
            case this.MODE_SUBTRACTION:
                correctAnswer = first - second;
                this.question = `What's ${first} - ${second}?`;
                break;
            default:
                correctAnswer = 0;
                this.question = 'Oops, an error occurred :/';
        }

        this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[0].correct = false;
        this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[1].correct = false;
        this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[2].correct = false;
        this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[3].correct = false;

        const correctButton = this.generateRandomNumber(0,3);
        this.btnData[correctButton].answer = correctAnswer;;
        this.btnData[correctButton].correct = true;
    }

    private generateRandomNumber(min: number, max: number, except?: number): number {
        const rnd = Math.round(Math.random() * (max - min)) + min;
        console.log(min, max, rnd);
        if(rnd === except) {
            return this.generateRandomNumber(min, max, except);
        }
        return rnd;
    }

    private onAnswer(isCorrect: boolean): void {
        this.$emit('answered', isCorrect);
    }
}
</script>

<style scoped lang='scss'>
.question {
    button {
        margin: 10px;
    }
}
</style>
