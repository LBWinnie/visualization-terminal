var F1 = echarts.init(document.getElementById("first-floor"), null);
var F1Option;
let arrF1 = [];
var icon = {
  足迹: "./img/足迹.png",
  假面: "./img/假面.png",
};
$.get("./svg/first-floor.svg", function (svg) {
  echarts.registerMap("F1", {
    svg: svg,
  });
  F1Option = {
    tooltip: {},
    geo: {
      map: "F1",
      roam: true,
    },
    series: [
      {
        //type为lines的数据
        name: "凶手行踪轨迹",
        type: "lines",
        coordinateSystem: "geo",
        geoIndex: 0,
        polyline: true, //必须为true来开启多段线模式
        lineStyle: {
          width: 1, //修改这个为0可以隐藏路径线条
        },
        effect: {
          show: true, //特效开关
          symbolSize: 20,
          symbol: "image://" + icon["足迹"],
          loop: true, //路径动画的循环开关
        },
        data: [
          {
            effect: {
              constantSpeed: 100,
              delay: 1000,
            },
            coords: [
              [109.97536945812806, 280.74384236453204],
              [82.88177339901478, 281.512315270936],
              [49.630541871921196, 279.74384236453204],
              [52.09359605911328, 312.9310344827587],
              [52.09359605911328, 356.0344827586207],
              [52.09359605911328, 388.0541871921183],
              [52.09359605911328, 402.83251231527095],
              [89.03940886699507, 402.83251231527095],
              [130.9113300492611, 406.5270935960592],
              [170.32019704433503, 406.5270935960592],
              [204.80295566502468, 407.75862068965523],
              [242.9802955665025, 407.75862068965523],
              [266.37931034482756, 408.4532019704434],
              [266.37931034482756, 358.49753694581284],
              [270.07389162561583, 319.0886699507389],
              [291.00985221674875, 319.0886699507389],
            ],
          },
        ],
      },
      {
        //type为effectScatter的数据，series中可以有多种类型的数据共存
        type: "effectScatter",
        coordinateSystem: "geo",
        geoIndex: 0,
        encode: {
          tooltip: 2, //该配置字段可能对你的毕设很有用，自己查文档
        },
        itemStyle: {
          color: "#d81e06",
        },
        data: [
          [105, 280, "从卧室出发"],
          [292, 317, "抵达二楼"],
        ],
      },
    ],
  };
  F1.setOption(F1Option);
  F1.getZr().off("click"); //清除可能会导致重复的点击事件
  F1.getZr().on("click", function (params) {
    //这是个对图表范围全局的监听，监听动作为click
    var pixelPoint = [params.offsetX, params.offsetY];
    var dataPoint = F1.convertFromPixel(
      {
        geoIndex: 0,
      },
      pixelPoint
    ); //对坐标系进行转化，获得的是与data[].croods相同的坐标系的坐标值
    console.log("x:", dataPoint[0], "	y:", dataPoint[1]);
    arrF1.push([dataPoint[0], dataPoint[1]]);
    //console.log(arrF1)
  });
});
