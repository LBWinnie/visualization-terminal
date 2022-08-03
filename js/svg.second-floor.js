var F2 = echarts.init(document.getElementById("second-floor"), null);
var F2Option;
let arrF2 = [];
var icon = {
  足迹: "./img/足迹.png",
  假面: "./img/假面.png",
};
$.get("./svg/second-floor.svg", function (svg) {
  echarts.registerMap("F2", {
    svg: svg,
  });
  F2Option = {
    tooltip: {},
    geo: {
      map: "F2",
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
              [265.37931034482756, 335.9408866995075],
              [267.6108374384237, 376.97044334975374],
              [268.8423645320197, 413.91625615763553],
              [267.6108374384237, 455.7881773399015],
              [302.09359605911334, 455.7881773399015],
              [327.95566502463055, 457.0197044334975],
              [326.72413793103453, 415.14778325123154],
              [378.44827586206895, 405.2955665024631],
              [415.39408866995075, 405.2955665024631],
              [480.6650246305419, 408.99014778325125],
              [479.4334975369459, 431.1576354679803],
              [480.6650246305419, 468.1034482758621],
              [531.1576354679803, 465.64039408866995],
              [532.7997217037408, 411.04268041150334],
              [531.5681946101448, 350.6978528252964],
              [531.5681946101448, 332.2249464213555],
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
          [265, 335, "抵达二楼"],
          [334, 405, "打开假面展厅西门"],
          [430, 405, "打开假面展厅西门"],
          [529, 335, "抵达三楼"],
        ],
      },
    ],
  };
  F2.setOption(F2Option);
  F2.getZr().off("click"); //清除可能会导致重复的点击事件
  F2.getZr().on("click", function (params) {
    //这是个对图表范围全局的监听，监听动作为click
    var pixelPoint = [params.offsetX, params.offsetY];
    var dataPoint = F2.convertFromPixel(
      {
        geoIndex: 0,
      },
      pixelPoint
    ); //对坐标系进行转化，获得的是与data[].croods相同的坐标系的坐标值
    console.log("x:", dataPoint[0], "	y:", dataPoint[1]);

    arrF2.push([dataPoint[0], dataPoint[1]]);
    //console.log(arrF2)
  });
});
