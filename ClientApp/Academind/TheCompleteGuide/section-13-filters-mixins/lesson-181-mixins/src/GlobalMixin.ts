import { Vue, Component } from 'vue-property-decorator';
@Component({})
export class GlobalMixin extends Vue {
    protected created() {
        console.log('GlobalMixin created hook');
    }
}
