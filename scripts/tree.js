var tree = {
    max_serial: 0,
    initSerial: function() {
        let trees = document.getElementsByClassName('tree');
        for (let i = 0; i < trees.length; i ++) {
            if (trees[i].classList.contains('tree-mutated')) continue;
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
            if (trees[i].classList.contains('tree-mutated')) continue;
            let items = trees[i].getElementsByClassName('tree-item');
            for (let j = 0; j < items.length; j ++) {
                if (items[j].getElementsByClassName('tree-item').length == 0) items[j].classList.add('tree-leaf');
                let icon = document.createElement('i');
                items[j].prepend(icon);
                icon.outerHTML = '<i class="mdui-icon material-icons">keyboard_arrow_down</i>';
            }
        }
    },
    createTreeNode: function(data, link) {
        let str = 
        '<label class="tree-item">' +
            '<a' + (data.path && data.path.indexOf('.html') != -1 ? ' href=\"' + link + '/' + data.path + '\"' : '') + '>' + data.title + '</a>';
            if (data.children) {
                for (let i = 0; i < data.children.length; i ++) {
                    str += tree.createTreeNode(data.children[i], link + (data.path ? '/' + data.path : ''));
                }
            }
        str += 
        '</label>';
        return str;
    },
    createTree: function(data, selector) {
        let str = 
        '<div class="tree">' +
            '<div class="tree-title">' + data.title + '</div>';
            if (data.children) {
                for (let i = 0; i < data.children.length; i ++) {
                    str += tree.createTreeNode(data.children[i], '../' + data.path);
                }
            }
        str += 
        '</div>';
        str += '<a id="close-menu" class="mdui-hidden-md-up" href="#"></a>';
        if (!selector) return str;
        let element = document.querySelector(selector);
        element.outerHTML = str;
        return element;
    },
    expandItem: function(file) {
        let links = document.querySelectorAll('.tree a[href="../' + file + '"]');
        for (let link of links) {
            link.parentNode.classList.add('tree-active');
            let label = link.parentNode.parentNode;
            while (!label.classList.contains('tree')) {
                let f = label.getAttribute('for');
                document.getElementById(f).checked = true;
                label = label.parentNode;
            }
        }
    },
    getTreeItems: function(data) {
        let result = [];
        result.push(...data.children.filter(child => child.path));
        for (let i of data.children.filter(child => child.children)) {
            result.push(...i.children.filter(child => child.path));
        }
        for (let i of data.children.filter(child => child.children)) {
            for (let j of i.children.filter(child => child.children)) {
                result.push(...j.children.filter(child => child.path));
            }
        }
        for (i of result.filter(res => !res.dir)) i.dir = data.path;
        return result;
    },
    mutation: function() {
        tree.initSerial();
        tree.initIcon();
    }
};
