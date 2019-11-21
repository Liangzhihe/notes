// 折线图
[
  {
    type: 'line',
    name: '',
    symbol: 'emptyCircle', // 标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    symbolSize: 40,
    stack: 'stack1', // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
    clip: true, // 是否裁剪超出坐标系部分的图形，具体裁剪效果根据系列决定 [defalult: true]
    step: false, // 是否是阶梯线图。可以设置为 true 显示成阶梯线图，也支持设置成 'start', 'middle', 'end' 分别配置在当前点，当前点与下个点的中间点，下个点拐弯。
    label: {},
    itemStyle: {},
    lineStyle: { // 线条样式
      // 修改 lineStyle 中的颜色不会影响图例颜色，如果需要图例颜色和折线图颜色一致，需修改 itemStyle.color，线条颜色默认也会取该颜色
      color: '',
      width: 2,
      type: '',
      opacity: .8,
    },
    areaStyle: { // 区域填充样式
      color: '', // 颜色可以使用 RGB 、RGBA，也可以使用十六进制格式，。除了纯色之外颜色也支持渐变色和纹理填充
      origin: 'auto', // 图形区域的起始位置
    },
    emphasis: {}, // 图形的高亮样式
    smooth: false, // 是否平滑曲线显示  如果是 boolean 类型，则表示是否开启平滑处理。如果是 number 类型（取值范围 0 到 1），表示平滑程度，越小表示越接近折线段
    data: [ // 系列中的数据内容数组。数组项通常为具体的数据项
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
