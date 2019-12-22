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

(function() {
    window.addEventListener('load', function() {
        updateScrollTop();
        window.addEventListener('scroll', updateScrollTop, false);
    }, false);
})();