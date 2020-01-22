function loadHeadbar() {
    let headbar = document.createElement('div');
    document.body.prepend(headbar);
    headbar.outerHTML = 
    `<div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-toolbar-hide mdui-color-white">
        <div class="mdui-toolbar mdui-color-theme mdui-col-offset-md-1">
            <a href="../index.html" class="mdui-typo-title"><img src="https://s2.ax1x.com/2019/12/22/QxY8MR.png" height="25px" style="margin-bottom: -5px"> 异常OI</a>
            <div class="mdui-toolbar-spacer"></div>
            <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
        </div>
        <div class="mdui-tab" mdui-tab>
            <a href="#" class="mdui-ripple mdui-ripple-white mdui-col-offset-md-1" onclick="gotoPart('intro')" intro>简介</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">基础算法</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">动态规划</a>
            <a href="#" class="mdui-ripple mdui-ripple-white" onclick="gotoPart('ds')" ds>数据结构</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">数学</a>
            <a href="#" class="mdui-ripple mdui-ripple-white" onclick="gotoPart('graph')" graph>图论</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">计算几何</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">字符串</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">杂项</a>
        </div>
    </div>`;
}

function loadFootbar() {
    let footbar = document.createElement('div');
    document.getElementById('main').after(footbar);
    footbar.outerHTML = 
    `<div id="footbar">
        <div id="left">
            <img src="https://s2.ax1x.com/2020/01/13/lHmkJx.png" id="logo">
            <div id="intro">异常OI</div>
        </div>
        <div id="right" class="mdui-typo">
            <a href="intro/about.html">关于本站</a> | <a href="intro/faq.html">使用帮助</a><br>
            <a href="intro/friends.html">友情链接</a> | <a href="intro/thanks.html">特别感谢</a><br>
            异常OI | Copyright © 2020<br>
            Developed by <a href="https://github.com/csp-yc" target="_blank">CSP-YC Dev Team</a> | Published on <a href="https://github.com/csp-yc/csp-yc.github.io" target="_blank">GitHub</a>
        </div>
    </div>`;
}

function loadTree() {
    let path = window.location.href.split('/').slice(-2)[0];
    tree.createTree(article[path], '#sidebar .tree');
}

function loadTab() {
    let path = window.location.href.split('/').slice(-2)[0];
    let tab = document.querySelector('.mdui-tab a[' + path + ']');
    tab.classList.add('mdui-tab-active');
}

function loadInfo() {
    let path = window.location.href.split('/').slice(-2)[0];
    let file = window.location.href.split('/').slice(-1)[0];
    let info = article[path].children.filter(child => child.path == file)[0];
    if (!info) {
        for (let i of article[path].children.filter(child => child.children)) {
            info = i.children.filter(child => child.path == file)[0];
            if (info) break;
        }
    }
    if (!info) {
        for (let i of article[path].children.filter(child => child.children)) {
            for (let j of i.children.filter(child => child.children)) {
                info = j.children.filter(child => child.path == file)[0];
                if (info) break;
            }
        }
    }
    if (!info) return;
    document.getElementById('article').innerHTML +=
    `<hr>
    <div class="info">
        <div class="info-primary"><div class="info-primary-title">关于本文</div><div class="info-primary-subtitle">Some information about this article.</div></div>
        <div class="info-content mdui-typo">
            <div><i class="mdui-icon material-icons">update</i>最后更新日期：` + toLocaleDateString(info.date) + `</div>
            <div><i class="mdui-icon material-icons">person</i>作者：<a href="` + links[info.author] + `" target="_blank">` + info.author + `</a></div>
            <div><i class="mdui-icon material-icons">edit</i>想参与完善页面？<a href="https://github.com/csp-yc/csp-yc.github.io/issues" target="_blank">提交Issues</a> 或 在下方评论</div>
        </div>
    </div>`;
}

function loadFab() {
    let fab = document.createElement('div');
    document.body.append(fab);
    fab.outerHTML = 
    `<div class="mdui-fab-wrapper" id="back">
        <a class="mdui-fab mdui-ripple mdui-color-white" href="javascript:scrollTo(0, 0);">
            <i class="mdui-icon material-icons">keyboard_arrow_up</i>
        </a>
    </div>`;
}

function loadHljs() {
    let script = document.createElement('script');
    script.src = 'https://highlightjs.org/static/highlight.site.pack.js';
    document.body.append(script);
    script.addEventListener('load', function() { hljs.initHighlighting(); }, false);
}

function loadImgOrigin() {
    let imgs = document.querySelectorAll('img[origin]');
    for (let img of imgs) {
        let text = document.createElement('p');
        img.after(text);
        text.outerHTML = `<p class="img-origin">图片来源：${img.getAttribute('origin')}</p>`;
    }
}

function loadComment() {
    let articlebar = document.getElementById('article');
    let script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'csp-yc/csp-yc.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.crossOrigin = 'anonymous';
    script.async = true;
    articlebar.append(script);
}

function loadAll() {
    loadHeadbar();
    loadFootbar();
    loadTree();
    loadTab();
    loadInfo();
    loadFab();
    loadHljs();
    loadImgOrigin();
    loadComment();
    mdui.mutation();
    tree.mutation();
    tree.expandItem(window.location.href.split('/').slice(-2).join('/').split('#')[0]);
}

(function() {
    window.addEventListener('load', loadAll, false);
})();
