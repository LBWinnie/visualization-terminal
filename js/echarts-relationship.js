var RelationGraph = echarts.init(document.getElementById("relation-graph"));
var RelationGraph_option = {
  // title: { text: "被害人及嫌疑人关系" },
  tooltip: {
    formatter: function (x) {
      return x.data.des;
    },
  },
  series: [
    {
      type: "graph",
      layout: "circular",
      symbolSize: 80,

      roam: true,

      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 20,
          },
        },
      },

      force: {
        repulsion: 2500,
        edgeLength: [10, 50],
      },

      draggable: true,
      itemStyle: {
        normal: {
          color: "#ededed",
        },
      },
      lineStyle: {
        normal: {
          width: 2,
          color: "#ededed",
        },
      },
      edgeLabel: {
        normal: {
          show: true,
          formatter: function (x) {
            return x.data.name;
          },
        },
      },
      label: {
        normal: {
          show: true,
          textStyle: {},
        },
      },
      data: [
        {
          name: "苏芳红子",
          des: "【被害人】，前著名歌手，现慈善家，别墅主人",
          symbolSize: 100,
          itemStyle: {
            normal: {
              color: "#d36661",
            },
          },
        },
        {
          name: "稻叶和代",
          des: "苏芳红子现任秘书",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "pink",
            },
          },
        },
        {
          name: "片桐正纪",
          des: "摄影家",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "#d99480",
            },
          },
        },
        {
          name: "片桐妻子",
          des: "被苏芳红子开车撞死",
          symbolSize: 60,
          itemStyle: {
            normal: {
              color: "#ccc",
            },
          },
        },
        {
          name: "松平守",
          des: "全垒打棒球手",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "#73a273",
            },
          },
        },
        {
          name: " 长良遥",
          des: "塔罗牌占卜师",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "plum",
            },
          },
        },
        {
          name: "蓝川母",
          des: "苏芳红子前任秘书",
          symbolSize: 60,
          itemStyle: {
            normal: {
              color: "#ccc",
            },
          },
        },
        {
          name: "蓝川冬矢",
          des: "【凶手】，当红摇滚歌手",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "#efe08b",
            },
          },
        },
        {
          name: "下笠穗奈美",
          des: "别墅女仆",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "#6fb3b6",
            },
          },
        },
        {
          name: "下笠美奈穗",
          des: "别墅女仆",
          symbolSize: 80,
          itemStyle: {
            normal: {
              color: "#8cbfa8",
            },
          },
        },
      ],
      links: [
        {
          source: "苏芳红子",
          target: "蓝川冬矢",
          name: "帮助",
          des:
            "母亲曾经是苏芳家的女佣，被苏芳红子诬陷，她自己开车撞死人却让冬失的母亲来顶罪，" +
            "最后还假惺惺地来帮助冬矢。",
        },
        {
          source: "蓝川冬矢",
          target: "苏芳红子",
          name: "复仇杀害",
          des: "因母亲被苏芳红子诬陷杀害，从而利用“诅咒的假面”来复仇杀害苏芳红子",
          Symbol: ["arrow", "circle"],
          symbolSize: [10, 10],
          lineStyle: {
            curveness: 0.2,
          },
        },
        {
          source: "苏芳红子",
          target: "蓝川母",
          name: "前雇佣+杀害诬陷",
        },
        {
          source: "蓝川母",
          target: "苏芳红子",
          name: "被迫替罪",
          Symbol: ["arrow", "circle"],
          symbolSize: [10, 10],
          lineStyle: {
            curveness: 0.3,
          },
        },
        {
          source: "蓝川母",
          target: "蓝川冬矢",
          name: "母子",
          symbolSize: "1",
        },
        {
          source: "苏芳红子",
          target: "稻叶和代",
          name: "雇佣",
        },
        {
          source: "苏芳红子",
          target: "下笠穗奈美",
          name: "主仆",
        },
        {
          source: "苏芳红子",
          target: "下笠美奈穗",
          name: "主仆",
        },
        {
          source: "下笠穗奈美",
          target: "下笠美奈穗",
          name: "双胞胎",
          symbolSize: "1",
        },
        {
          source: "苏芳红子",
          target: "片桐正纪",
          name: "邀请",
          des: "苏芳红子曾交通肇事逃逸使其夫人死亡",
        },
        {
          source: "片桐正纪",
          target: "片桐妻子",
          name: "夫妻",
          symbolSize: "1",
        },
        {
          source: "苏芳红子",
          target: "片桐妻子",
          name: "开车撞死",
        },
        {
          source: "苏芳红子",
          target: "松平守",
          name: "邀请",
        },
        {
          source: "苏芳红子",
          target: " 长良遥",
          name: "邀请",
        },
      ],
    },
  ],
};
RelationGraph.setOption(RelationGraph_option);
