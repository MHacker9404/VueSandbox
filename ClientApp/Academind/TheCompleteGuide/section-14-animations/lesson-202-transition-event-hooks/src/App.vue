<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Animations </h1>
                <hr>
                <button class="btn btn-primary" @click='show = !show'>Show Alert</button>
                <br />
                <br />
                <select name="" id="" class='form-control' v-model='alertAnimation'>
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br />
                <br />
                <transition name='fade'>
                    <div class="alert alert-success" v-if='show'>This is some info</div>
                </transition>
                <transition :name='alertAnimation'>
                    <div class="alert alert-danger" v-show='show'>This is some info</div>
                </transition>
                <transition name='fade' appear>
                    <div class="alert alert-success" v-if='show'>This is some info on-load</div>
                </transition>
                <transition
                    enter-active-class='animated bounce'
                    leave-active-class='animated shake'>
                    <div class="alert alert-success" v-if='show'>This is some info on-load</div>
                </transition>
                <transition :name='alertAnimation' mode='out-in'>
                    <div class="alert alert-danger" v-if='show' key='danger'>This is some danger</div>
                    <div class="alert alert-info" v-if='!show' key='info'>This is some info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click='load = !load'>Load / Remove element</button>
                <br />
                <br />
                <transition
                    @before-enter='beforeEnter'
                    @enter='enter'
                    @after-enter='afterEnter'
                    @enter-cancelled='enterCancelled'
                    @before-leave='beforeLeave'
                    @leave='leave'
                    @after-leave='afterLeave'
                    @leave-cancelled='leaveCancelled'
                    :css='false'
                >
                    <div class='hooks' v-if='load'></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click='toggleComponent'>Toggle Component</button>
                <br />
                <br />
                <transition name='fade' mode='out-in'>
                    <component :is='selectedComponent'></component>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import   DangerAlert  from './DangerAlert.vue';
import   SuccessAlert  from './SuccessAlert.vue';

@Component({
    components: {
        'app-danger-alert': DangerAlert,
        'app-success-alert': SuccessAlert,
    },
    directives:{ },
})
export default class App extends Vue {
    private show: boolean = false;
    private load: boolean = false;
    private alertAnimation: string = 'Fade';
    private elementWidth: number = 100;
    private selectedComponent: string = 'app-success-alert'

    private toggleComponent(): void {
        this.selectedComponent = this.selectedComponent === 'app-success-alert'
            ? 'app-danger-alert'
            : 'app-success-alert';
    }

    private beforeEnter(el): void {
        console.log('beforeEnter', el);
        this.elementWidth = 100;
        el.style.width = `${this.elementWidth}px`;
     }
    private enter(el, done): void {
        console.log('enter', el, done);
        let round = 1;
        const interval = setInterval(() => {
            el.style.width = `${(this.elementWidth + (round * 10))}px`;
            round++;
            if(round > 20){
                clearInterval(interval);
                done();
            }
        }, 20);
     }
    private afterEnter(el): void {
        console.log('afterEnter', el);
     }
    private enterCancelled(el): void {
        console.log('enterCancelled', el);
     }
    private beforeLeave(el): void {
        console.log('beforeLeave', el)
        this.elementWidth = 300;
        el.style.width = `${this.elementWidth}px`;
     }
    private leave(el, done): void {
        console.log('leave', el, done);
        let round = 1;
        const interval = setInterval(() => {
            el.style.width = `${(this.elementWidth - (round * 10))}px`;
            round++;
            if(round > 20){
                clearInterval(interval);
                done();
            }
        }, 20);
     }
    private afterLeave(el): void {
        console.log('afterLeave', el);
     }
    private leaveCancelled(el): void {
        console.log('leaveCancelled', el);
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

.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1.5s;
}

.fade-leave {}

.fade-leave-active {
    transition: opacity 1.5s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    animation: slide-in 1.5s ease-out forwards;
    transition: opacity 1.5s;
}

.slide-leave {}

.slide-leave-active {
    animation: slide-out 1.5s ease-out forwards;
    transition: opacity 1.5s;
    opacity: 0;
}

@keyframes slide-in {
    from {
        transform: translateY(40px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(40px);
    }
}

.hooks{
    width: 100px;
    height: 100px;
    background-color: lightgreen;
}
</style>
