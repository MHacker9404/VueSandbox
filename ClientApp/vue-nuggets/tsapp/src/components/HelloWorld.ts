import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    template: require('./HelloWorld.html'),
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}
