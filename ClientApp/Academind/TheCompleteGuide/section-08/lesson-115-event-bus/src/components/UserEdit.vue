<template>
    <div class="component user-edit">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{_userAge}}</p>
        <button @click='editAge'>Edit Age</button>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue, Emit, PropSync } from 'vue-property-decorator';
    import {EventBus} from '../main';

    @Component
    export default class UserEdit extends Vue {
        @Prop({type: Number}) public userAge!: number;

        get _userAge(): number {
            return this.userAge;
        }

        // @Emit('ageWasEdited') public editAge(): number {
        //     return 55;
        // }
        private editAge(): void {
            this.userAge = 55;
            EventBus.$emit('ageWasEdited', this.userAge);
        }
    }
</script>

<style scoped lang='scss'>
    .user-edit {
        background-color: lightgreen;
    }
</style>
