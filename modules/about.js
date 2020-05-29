new Module(
    document.currentScript,
    function(el) {
        // this function will be executed when module will be attached to page
        // el - is main app element (#app)
        console.log('Module attached\n' + el.tagName + '\n'+ el.id);
    },
    function(el) {
        // this function will be executed when module will be deattached from page
        console.log('Module deattached');
    }
);
