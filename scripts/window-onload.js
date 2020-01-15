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
            <a href="#" class="mdui-ripple mdui-ripple-white mdui-tab-active mdui-col-offset-md-1" onclick="window.location.href='../index.html'">简介</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">基础算法</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">动态规划</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">数据结构</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">数学</a>
            <a href="#" class="mdui-ripple mdui-ripple-white">图论</a>
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
        <div id="right">
            <a href="../intro/about.html">关于本站</a> | <a href="../intro/faq.html">使用帮助</a><br>
            <a href="../intro/friends.html">友情链接</a> | <a href="../intro/thanks.html">特别感谢</a><br>
            2020 , © 异常OI Developed by csp-yc Dev Team
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

function loadAll() {
    loadHeadbar();
    loadFootbar();
    loadFab();
    loadHljs();
    mdui.mutation();
    tree.mutation();
}

(function() {
    window.addEventListener('load', loadAll, false);
})();
