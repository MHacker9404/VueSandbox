<template>
    <div class="component user-detail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <hr>
        <p>{{_name}}</p>
        <button @click='resetName'>Reset Name by emit</button>
        <button @click='resetFn'>Reset Name by callback</button>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

    @Component
    export default class UserDetail extends Vue {
        @Prop( { type: String, required: true} ) private name!: string;
        @Prop({type: Function}) private resetFn!: () => void;

        get _name() {
            return this.name.split('').reverse().join('');
        }

        @Emit('nameWasReset') private resetName(): string {
            return 'Phil';
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .user-detail {
        background-color: lightcoral;
    }
</style>