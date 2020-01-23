function getScrollProgress() {
	let winTop = document.documentElement.scrollTop || document.body.scrollTop;
	let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	let winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let progress = {
        'percent': winTop / (docHeight-winHeight) * 100,
        'pixel': winTop
    };
    return progress;
}


function updateScrollTop() {
    let progress = getScrollProgress();
    let fab = document.getElementById('back');
    if (progress.pixel == 0) {
        fab.classList.add('mdui-fab-hide');
    } else {
        fab.classList.remove('mdui-fab-hide');
    }
}

function gotoPart(title) {
    setTimeout(function() {
        window.location.href = '../' + title + '/' + article[title].children[0].path;
    }, 300);
}

function toLocaleDateString(number) {
    let date = new Date(number);
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}:${date.getSeconds()<10?'0':''}${date.getSeconds()}`;
}

function getAllArticle() {
    let result = [];
    for (dir in article) result.push(...tree.getTreeItems(article[dir]));
    return result;
}

(function() {
    window.addEventListener('load', function() {
        updateScrollTop();
        window.addEventListener('scroll', updateScrollTop, false);
    }, false);
})();