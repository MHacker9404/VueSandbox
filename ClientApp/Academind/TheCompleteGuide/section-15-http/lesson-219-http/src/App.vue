<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <!--<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">-->
            <div class="col">
                <h1 class='text-center'>HTTP</h1>
                <div class="form-group">
                    <label for='userName'>Username</label>
                    <input type="text" id='userName' class="form-control" v-model='user.userName'>
                </div>
                <div class="form-group">
                    <label for='passWord'>Password</label>
                    <input type="password" id='passWord' class="form-control" v-model='user.password'>
                </div>
                <button class="btn btn-primary" @click='submit'>Submit</button>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { },
})
export default class App extends Vue {
    private user = {
        userName: '',
        password: '',
    };
    private submit(): void {
        //  https://vue-http-37f3f.firebaseio.com/
        this.$http.post(`https://vue-http-37f3f.firebaseio.com/data.json`, this.user)
            .then(res => console.log(res), error => console.log(error));
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
