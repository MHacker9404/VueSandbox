<template>
    <div class="component text-center user">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <div class="row justify-content-md-center">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

@Component({
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit,
    },
})
export default class User extends Vue {}
</script>

<style scoped>
    .user {
        background-color: lightblue;
    }
</style>
