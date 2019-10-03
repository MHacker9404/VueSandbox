<template>
<div class="container-fluid">
    <div id="app">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class='text-center'>The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name='flip' mode='out-in'>
                    <component :is='mode' @answered='answered($event)' @confirmed="mode = 'app-question'"></component>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Answer from './components/Answer.vue';
import Question from './components/Question.vue';

@Component({
    components: {
        'app-answer': Answer,
        'app-question': Question
    },
    directives:{ },
})
export default class App extends Vue {
    private mode:string = 'app-question';

    private answered(isCorrect:boolean): void {
        if(isCorrect) {
            this.mode = 'app-answer';
        } else {
            this.mode = 'app-question';
            alert('Wrong, try again');
        }
    }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.flip-enter {
    // transform: rotateY(0deg);
 }

.flip-enter-active {
    animation: flip-in .5s ease-out forwards;
}

.flip-leave {
    // transform: rotateY(0deg);
 }

.flip-leave-active {
    animation: flip-out .5s ease-out forwards;
}

@keyframes flip-out {
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(90deg);
    }
}
@keyframes flip-in {
    from {
        transform: rotateX(90deg);
    }
    to {
        transform: rotateX(0deg);
    }
}
</style>
