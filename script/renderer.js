// 界面渲染器

window.onload = function () {

    console.log('renderer.js运转正常');

    // 获取版本信息
    GetVersions();

    // 测试fs模块
    FStest();
}

// 获取版本信息
function GetVersions() {
    const information = document.getElementById('info');
    information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;
}


// 测试fs模块
function FStest() {
    var fsbtn = $('#fsBtn');
    var fsContent = $('#fsContent');
    fsbtn.onclick = fileReader();
}




//获取ping的返回值 --官方文档
const func = async () => {
    var response = await window.versions.ping() // 获取ping的返回值
    console.log(response) // 打印 '返回值'
}
func()



/**------------------------
 * 文件读取器
 * @param {string} path 
 */
async function fileReader(path) {
    var response = await mods.fs.readFile(path); // 获取 fs对象 的返回值 fs模块
    console.log(response); // 打印 '返回值'
}



/**
 * 选择器
 * ID => # 或者 Class => .
 * @param {string} str
 */
function $(str) {
    return document.querySelector(str);
}