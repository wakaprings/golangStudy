// ファイル名とファイルサイズのデータ
var fileList = {
    "name": "root_dir",
    "children": [
    {
    "name": "sub_dir_A",
    "children": [
    {
    "name": "sub_dir_B",
    "children": [
    { "name": "ファイル A", "size": 50000 },
    { "name": "ファイル B", "size": 3000 },
    { "name": "ファイル C", "size": 1000 }
    ]
    },
    {
    "name": "sub_dir_C",
    "children": [
    { "name": "ファイル D", "size": 1800 },
    { "name": "ファイル E", "size": 200 }
    ]
    }
    ]
    }
    ]
    }
    // Treemapレイアウトにする
    var treemap = d3.layout.treemap()
        .size([880, 600])   // 横幅480px, 縦幅300px
        .value(function(d) { return d.size; }); // sizeプロパティの値をデータ値とする
    // #myGraphにTreemapを描画する
    d3.select("#myGraph")
        .datum(fileList)    // データを割り付け
        .selectAll("div")   // divに表示するボックスを割り当てる
        .data(treemap.nodes)    // Treemapのノードを対象に処理
        .enter()
        .append("div")  // div要素を追加
        .style("left", function(d) { return d.x + "px"; })  // 表示する座標と幅などを設定
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return d.dx + "px"; })
        .style("height", function(d) { return d.dy + "px"; })
        .style("background", "#ddd")
        .style("position", "absolute")
        .style("overflow", "hidden")
        .style("border", "solid 2px white")
        .style("font-size", "9pt")
        .style("line-height", "11pt")
        .html(function(d) { return "　"+d.name+"<br>　"+d.size+"bytes"; }); // 文字とサイズを表示する