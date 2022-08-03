var BR = echarts.init(document.getElementById("bedroom"), null);
var BROption;
let arrBR = [];
var icon = {
  足迹: "./img/足迹.png",
  假面: "./img/假面.png",
};
$.get("./svg/bedroom.svg", function (svg) {
  echarts.registerMap("BR", {
    svg: svg,
  });
  BROption = {
    tooltip: {},
    geo: {
      map: "BR",
      roam: true,
    },
    series: [
      {
        //type为lines的数据
        name: "200个面具",
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
              [408.00492610837443, 528.448275862069],
              [400.152709359606, 135.59113300492615],
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
          color: "#efe08b",
        },
        data: [
          [400, 135, "刀尖"],
          [408, 528, "蓝川冬矢"],
        ],
      },
    ],
  };
  BR.setOption(BROption);
  BR.getZr().off("click"); //清除可能会导致重复的点击事件
  BR.getZr().on("click", function (params) {
    //这是个对图表范围全局的监听，监听动作为click
    var pixelPoint = [params.offsetX, params.offsetY];
    var dataPoint = BR.convertFromPixel(
      {
        geoIndex: 0,
      },
      pixelPoint
    ); //对坐标系进行转化，获得的是与data[].croods相同的坐标系的坐标值
    console.log("x:", dataPoint[0], "	y:", dataPoint[1]);

    arrBR.push([dataPoint[0], dataPoint[1]]);
    //console.log(arrBR)
  });
});
