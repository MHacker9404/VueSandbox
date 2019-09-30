import { Vue, Component } from 'vue-property-decorator';
import * as _filter from 'lodash/filter';
import * as _startsWith from 'lodash/startsWith';

@Component({})
export class FruitMixin extends Vue {
    public filterText: string = '';
    public fruits: string[] = ['Apple', 'Banana', 'Mango', 'Melon'];

    public get filteredFruits(): string[] {
        return _filter(this.fruits, (fruit: string) => _startsWith(fruit.toLowerCase(), this.filterText.toLowerCase()));
    }
}
