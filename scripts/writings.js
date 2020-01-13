function write_sidebar() {
    document.write('<div class="mdui-card mdui-hoverable" style="padding: 15px">\
    <div class="sidebar-title">新人资讯</div>\
    <div class="sidebar-item"><a href="../about/index.html">关于本站</a></div>\
    <div class="sidebar-item"><a href="javascript:;">常见技巧</a><br></div>\
    <div class="sidebar-item"><a href="../common-mistakes/index.html">梗（常见错误）</a><br></div>\
    <div class="sidebar-item"><a href="javascript:;">学习资源</a><br></div>\
</div>\
<div class="mdui-card mdui-hoverable" style="padding: 15px; margin-top: 20px">\
    <div class="sidebar-item"><a href="../../index.html"><i class="mdui-icon material-icons">home</i>主页</a></div>\
    <div class="sidebar-title">CSP资料库</div>\
    <div class="sidebar-item"><a href="javascript:;">语言基础</a></div>\
    <div class="sidebar-item"><a href="javascript:;">基础算法</a></div>\
    <div class="sidebar-item"><a href="javascript:;">动态规划</a></div>\
    <div class="sidebar-item"><a href="javascript:;">数据结构</a></div>\
    <div class="sidebar-item"><a href="javascript:;">数学</a></div>\
    <div class="sidebar-item"><a href="javascript:;">图论</a></div>\
    <div class="sidebar-item"><a href="javascript:;">计算几何</a></div>\
    <div class="sidebar-item"><a href="javascript:;">杂项</a></div>\
    <div class="sidebar-title">网页</div>\
    <div class="sidebar-item"><a href="javascript:;">所有文章</a></div>\
    <div class="sidebar-item"><a href="javascript:;">最近发表的文章</a></div>\
    <div class="sidebar-item"><a href="javascript:;">随机文章</a></div>\
</div>\
<div class="mdui-card mdui-hoverable" style="padding: 15px; margin-top: 20px">\
    <div class="sidebar-title">写作指导</div>\
    <div class="sidebar-item"><a href="javascript:;">HTML语法</a></div>\
    <div class="sidebar-item"><a href="javascript:;">写作须知</a></div>\
</div>\
<div class="mdui-card mdui-hoverable" style="padding: 15px; margin-top: 20px">\
    <div class="sidebar-title">issues</div>\
    <div class="sidebar-item"><a href="javascript:;">BUG反馈</a></div>\
    <div class="sidebar-item"><a href="javascript:;">讨论区</a></div>\
</div>');
}

function write_headbar() {
    document.write('<div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-toolbar-hide" style="background-color: white;">\
        <div class="mdui-toolbar mdui-color-white">\
            <a href="../../index.html" class="mdui-typo-title"><img src="https://s2.ax1x.com/2019/12/22/QxY8MR.png" height="25px" style="margin-bottom: -5px"> 异常OI</a>\
            <div class="mdui-toolbar-spacer"></div>\
            <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>\
        </div>\
        <div class="mdui-tab mdui-color-white">\
            <a href="../../index.html" class="mdui-ripple mdui-ripple-white mdui-tab-active">首页</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">语言基础</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">基础算法</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">动态规划</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">数据结构</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">数学</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">图论</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">计算几何</a>\
            <a href="#" class="mdui-ripple mdui-ripple-white">杂项</a>\
        </div>\
    </div>');
}