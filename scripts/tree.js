var tree = {
    max_serial: 0,
    initSerial: function() {
        let trees = document.getElementsByClassName('tree');
        for (let i = 0; i < trees.length; i ++) {
            let items = trees[i].getElementsByClassName('tree-item');
            for (let j = 0; j < items.length; j ++) {
                if (items[j].getElementsByClassName('tree-item').length != 0) {
                    tree.max_serial ++;
                    let check = document.createElement('input');
                    items[j].parentNode.insertBefore(check, items[j]);
                    check.outerHTML = '<input class="check" id="check-' + tree.max_serial + '" type="checkbox">';
                    items[j].setAttribute('for', 'check-' + tree.max_serial);
                }
            }
        }
    },
    initIcon: function() {
        let trees = document.getElementsByClassName('tree');
        tree.max_serial = 0;
        for (let i = 0; i < trees.length; i ++) {
            let items = trees[i].getElementsByClassName('tree-item');
            for (let j = 0; j < items.length; j ++) {
                if (items[j].getElementsByClassName('tree-item').length == 0) items[j].classList.add('tree-leaf');
                let icon = document.createElement('i');
                items[j].prepend(icon);
                icon.outerHTML = '<i class="mdui-icon material-icons">keyboard_arrow_down</i>';
            }
        }
    },
    mutation: function() {
        tree.initSerial();
        tree.initIcon();
    }
};

(function() {
    window.addEventListener('load', tree.mutation, false);
})();
