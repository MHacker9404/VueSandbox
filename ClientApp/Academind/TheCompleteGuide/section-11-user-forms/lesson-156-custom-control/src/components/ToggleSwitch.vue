<template>
<div class='switch'>
    <!-- <div id='on' @click='isOn = true' :class='{active: isOn}'>On</div> -->
    <!-- <div id='off' @click='isOn = false' :class='{active: !isOn}'>Off</div> -->
    <div id='on' @click='valueToggled(true)' :class='{active: value}'>On</div>
    <div id='off' @click='valueToggled(false)' :class='{active: !value}'>Off</div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({ })
export default class ToggleSwitch extends Vue {
    // private isOn: boolean = true;

    @Prop({type: Boolean}) public value!: boolean;

    private valueToggled(value: boolean): void {
        this.$emit('input', value);
    }
}
</script>

<style scoped lang='scss'>
.switch {
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }
    #on:hover, #on.active {
        background-color: lightgreen;
    }
    #off:hover, #off.active {
        background-color: lightcoral;
    }
}
</style>