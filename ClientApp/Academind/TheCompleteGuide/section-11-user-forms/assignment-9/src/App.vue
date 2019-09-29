<template>
    <div class="container" id='app'>
            <div class="row" v-if='!saveData'>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" v-model='userData.name'>
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control"
                        :value='userData.email'
                        @input='userData.email = $event.target.value'>
                        <!-- v-model='userData.email' -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control"
                        v-model='userData.password'>
                    </div>
                    <div class="form-group">
                        <label for="saveData">Save Data</label>
                        <app-toggle-switch id='saveData' v-model='saveData'></app-toggle-switch>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
        </form>
                </div>
            </div>
        <hr>
        <div class="row" v-if='saveData'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.name}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{saveData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToggleSwitch from './components/ToggleSwitch.vue';

@Component({
  components: {
      'app-toggle-switch': ToggleSwitch
  },
})
export default class App extends Vue {
    private userData:any = { name: '',  email: '', password: ''};
    private saveData: boolean = false;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
