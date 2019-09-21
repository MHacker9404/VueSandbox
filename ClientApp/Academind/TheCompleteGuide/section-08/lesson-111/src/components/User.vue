<template>
    <div class="component user">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click='changeName'>Change Name</button>
        <hr>
        <p>{{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name='name' :age='age'
                @nameWasReset='nameWasReset($event)'
                :resetFn='resetNameCallback'>
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge='age'
                @ageWasEdited='ageWasEdited($event)'
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    @Component({
        components: {
            'app-user-detail': UserDetail,
            'app-user-edit': UserEdit,
        },
    })
    export default class User extends Vue {
        private name: string = 'Phil';
        private age: number = 52;

        public resetNameCallback(): void {
            this.name = 'Phil';
        }

        private changeName(): void {
            this.name = 'Clara';
        }

        private nameWasReset(event: string): void {
            this.name = event;
        }

        private ageWasEdited(event: number): void {
            this.age = event;
        }
     }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .user {
        background-color: lightblue;
    }
</style>