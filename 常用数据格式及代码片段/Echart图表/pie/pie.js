// 饼图 series
// 饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例

// 饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小
// 建议使用 柱状图，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也
// 可以通过配置 roseType 显示成南丁格尔图，通过半径大小区分数据的大小

[
  {
    type: 'pie',
    name: '访问来源', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
    legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。[ default: true ]
    hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
    clockwise: true, // 饼图的扇区是否是顺时针排布。[ default: true ]
    startAngle: 90, // 起始角度，支持范围[0, 360]。
    minAngle: 1, // 最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。
    minShowLabelAngle: 10, // 小于这个角度（0 ~ 360）的扇区，不显示标签（label 和 labelLine）。
    roseType: 'radius', // 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
    stillShowZeroSum: true, // 是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。
    label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
      show: true, // [ default: false ]
      position: 'outside', // 标签的位置 'outside' 'inside' 'inner' 'center'
      formatter: '{b}: {d}', // 标签内容格式器，支持字符串模板和回调函数两种形式
      rotate: 10,
      color: '',
      fontStyle: '', // font ...
      width: '',
      height: '',
      rich: {},

    },
    labelLine: { // 标签的视觉引导线样式
      show: true,
      length: 10, // 视觉引导线第一段的长度。
      length2: 10, // 视觉引导线第二段的长度。
      smooth: false, // 是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)',
        opacity: .8,
      },
    },
    itemStyle: { // 图形样式
      color: '#c23531',
      borderColor: '#000', // 图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
      borderWidth: 0, // 描边线宽。为 0 时无描边。[ default: 0 ]
      borderType: '', // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
      shadowBlur: 200, // 图形阴影的模糊大小 该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
    },
    center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
    radius: '55%', // 饼图的半径。可以为如下类型
                   // number：直接指定外半径值。
                   // string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
                   // Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
                   // 可以将内半径设大显示成圆环图（Donut chart）。
    data: [ // 系列中的数据内容数组。数组项可以为单个数值
            // 更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 274, name: '联盟广告' },
      { value: 235, name: '视频广告' },
      { value: 400, name: '搜索引擎', tooltip: {} }, // 需要对个别内容指定进行个性化定义时 自定义特殊 tooltip，仅对该数据项有效
    ].sort(function(a, b) {
      return a.value - b.value
    }),
    markPoint: { // 图表标注
      symbol: 'pin', // 标记的图形 ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      symbolSize: 50, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
      label: {},
      itemStyle: {},
    },
    silent: false, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
    animationType: 'scale', // 初始动画效果
    animationEasing: 'elasticOut', // 初始动画的缓动效果
    animationDelay: function(idx) { // 初始动画的延迟
      return Math.random() * 200
    },
    tooltip: {},
  }
]
