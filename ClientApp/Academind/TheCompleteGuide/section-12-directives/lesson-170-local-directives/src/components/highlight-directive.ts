import Vue from 'vue';

export const HighlightDirective = {
    bind(el: HTMLElement, binding: any, vnode: any) {
        // el.style.backgroundColor = 'lightgreen';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers.delayed) {
            delay = 3000;
        }

        if (binding.modifiers.blinking) {
            // const mainColor = 'red';
            // const secondColor = 'blue';
            const mainColor = binding.value.mainColor;
            const secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
                setInterval(() => {
                    currentColor = currentColor === mainColor ? secondColor : mainColor;
                    if (binding.arg === 'background') {
                        el.style.backgroundColor = currentColor;
                    } else {
                        el.style.color = currentColor;
                    }
                }, binding.value.delay);
            }, delay);
        }
    },
};

Vue.directive('highlight', HighlightDirective);
