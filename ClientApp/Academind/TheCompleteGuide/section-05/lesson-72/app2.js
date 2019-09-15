var app2 = new Vue( {
    // el: '#app2',
    data: {
        title: 'The VueJS Instance - 2',
        showParagraph: false
    },
    methods: {
        show: function () {
            app1.title = 'changed';
            this.$refs.myButton.innerText = 'Test';
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

setTimeout( function () {
    app1.title = 'Changed by timer';
}, 3000 );

app2.$mount( '#app2' );