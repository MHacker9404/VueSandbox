Vue.component( 'hello', {
    template: `<h1>Hello Component!</h1>`
} );

var app1 = new Vue( {
    el: '#app1',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle( 'The VueJS Instance (Updated)' );
        },
        updateTitle: function ( title ) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function ( value ) {
            alert( 'Title changed, new value: ' + value );
        }
    }
} );
