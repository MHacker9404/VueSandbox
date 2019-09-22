<template>
    <div class="component user-detail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <hr>
        <p>{{_name}} | {{_age}}</p>
        <button @click='resetName'>Reset Name by emit</button>
        <button @click='resetFn'>Reset Name by callback</button>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue, Emit, PropSync } from 'vue-property-decorator';
    import {EventBus} from '../main';

    @Component
    export default class UserDetail extends Vue {
        @Prop( { type: String } ) public name!: string;
        @Prop( { type: Number } ) public age!: number;
        @Prop({type: Function}) public resetFn!: () => void;

        get _name() {
            return this.name.split('').reverse().join('');
        }

        get _age() {
            return this.age;
        }

        @Emit('nameWasReset') public resetName(): string {
            return 'Phil';
        }

        private created(): void {
            EventBus.$on('ageWasEdited', (age: number) => {
                this.age = age;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .user-detail {
        background-color: lightcoral;
    }
</style>