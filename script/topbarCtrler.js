// 标题栏管理器

var _min = $('#min')
var _max = $('#max')
var _close = $('#close')

window.onload = () => {
    // console.log('TopBar:',_min,_max,_close);
    _min.onclick = () => topbarCtrler.min()
    _max.onclick = () => topbarCtrler.max()
    _close.onclick = () => topbarCtrler.close()
}