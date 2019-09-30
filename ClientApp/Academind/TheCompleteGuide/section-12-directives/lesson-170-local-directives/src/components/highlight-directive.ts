import Vue from 'vue';

export const HighlightDirective = {
    bind(el: HTMLElement, binding: any, vnode: any) {
        // el.style.backgroundColor = 'lightgreen';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }

        if (binding.modifiers['blink']) {
            const mainColor = 'green';
            const secondColor = 'blue';
            let currentColor = mainColor;
            setTimeout(() => {
                setInterval(() => {
                    currentColor = currentColor === mainColor ? secondColor : mainColor;
                }, 1000);
            }, delay);
        }

        setTimeout(() => {
            if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    },
};

Vue.directive('highlight', HighlightDirective);

/*
//    hooks
//    bind(el, binding, vnode) - once directive is attached
//    inserted(el, binding, vnode) - inserted in Parent Node
//    update(el, binding, vnode, oldVNode) - once component is updated
//    componentUpdated(el, binding, vnode, oldVNode) - once component is updated
//    unbind(el, binding, vnode) - once component is removed
Vue.directive('highlight', {
    bind(el: HTMLElement, binding: any, vnode: any) {
        // el.style.backgroundColor = 'lightgreen';
        el.style.backgroundColor = binding.value;
    },
}); // add v-highlight
*/
