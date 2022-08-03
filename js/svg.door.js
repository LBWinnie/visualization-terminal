var DOOR = echarts.init(document.getElementById("door"), null);
var DOOROption;
let arrDOOR = [];
var icon = {
  足迹: "./img/足迹.png",
  假面: "./img/假面.png",
};
$.get("./svg/door.svg", function (svg) {
  echarts.registerMap("DOOR", {
    svg: svg,
  });
  DOOROption = {
    tooltip: {},
    geo: {
      map: "DOOR",
      roam: true,
    },
    series: [
      {
        //type为lines的数据
        name: "绳子",
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
          symbol: "image://" + icon["假面"],
          loop: true, //路径动画的循环开关
        },
        data: [
          {
            effect: {
              constantSpeed: 100,
              delay: 1000,
            },
            coords: [
              [309.8522167487685, 115.88669950738921],
              [298.768472906404, 133.12807881773404],
              [293.84236453201976, 152.83251231527098],
              [288.9162561576355, 193.47290640394093],
              [291.3793103448276, 247.66009852216754],
              [292.6108374384237, 315.39408866995075],
              [295.0738916256158, 336.3300492610838],
              [296.30541871921184, 381.896551724138],
              [298.768472906404, 448.3990147783252],
              [298.768472906404, 523.5221674876848],
              [301.23152709359607, 586.3300492610838],
              [303.6945812807882, 598.6453201970444],
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
          [309, 115, "将假面从气窗缝隙穿过"],
          [303, 598, "绳首端绑着匕首"],
        ],
      },
    ],
  };
  DOOR.setOption(DOOROption);
  DOOR.getZr().off("click"); //清除可能会导致重复的点击事件
  DOOR.getZr().on("click", function (params) {
    //这是个对图表范围全局的监听，监听动作为click
    var pixelPoint = [params.offsetX, params.offsetY];
    var dataPoint = DOOR.convertFromPixel(
      {
        geoIndex: 0,
      },
      pixelPoint
    ); //对坐标系进行转化，获得的是与data[].croods相同的坐标系的坐标值
    console.log("x:", dataPoint[0], "	y:", dataPoint[1]);

    arrDOOR.push([dataPoint[0], dataPoint[1]]);
    //console.log(arrDOOR)
  });
});
