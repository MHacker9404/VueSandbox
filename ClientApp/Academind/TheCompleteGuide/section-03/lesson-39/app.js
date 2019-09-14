// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue( {
    el: '#app',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            { name: 'Phil', age: 52, color: 'blue' },
            { name: 'Clara', age: 56, color: 'brown' },
        ]
    }
} );