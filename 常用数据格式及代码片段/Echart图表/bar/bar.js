[
  {
    type: 'bar',
    name: '',
    label: { // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
      show: true,
      position: 'inside', // 标签的位置 'top' 'left' ...  [10, 10], ['50%', '50%'] ...
      distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
      rotate: 0,
      formatter: '{c}', // {a}：系列名 {b}：数据名 {c}：数据值 或回调函数(params: Object|Array) => string
      color: '',
      fontStyle: '', // font ...
    },
    itemStyle: {
      color: '', // 柱条的颜色。 默认从全局调色盘 option.color 获取颜色
      borderColor: '', // border ...
      shadowBlur: '', // shadow ...
      opacity: 1,
    },
    stack: 'stack1', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
    barWidth: '40%', // 柱条的宽度，不设时自适应 在同一坐标系上，此属性会被多个 'bar' 系列共享。此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，并且是对此坐标系中所有 'bar' 系列生效
    barMaxWidth: 200, // 柱条的最大宽度, 比 barWidth 优先级高。
    barMinWidth: 1, // 柱条的最小宽度。在直角坐标系中，默认值是 1。否则默认值是 null。比 barWidth 优先级高。
    barMinHeight: 1, // 柱条最小高度，可用于防止某数据项的值过小而影响交互
    barGap: '30%', // 不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）。 如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用
    data: [// 系列中的数据内容数组。数组项通常为具体的数据项
      ['周一', 100], // 通常来说，数据用一个二维数组表示 每一列被称为一个『维度』
      ['周二', 200],
      ['周三', 150],
    ],
    markPoint: {},
    markLine: { // 图表标线
      silent: false,
      symbol: '',
      lineStyle: {},
    },
    markArea: {}, // 图表标域
    silent: false,
    animation: true, // 动画 ...
    tooltip: {},
  }
]