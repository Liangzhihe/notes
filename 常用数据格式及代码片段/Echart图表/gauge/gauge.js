// gauge 仪表盘
[
  {
    type: 'gauge',
    name: '',
    radius: '75%', // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
    startAngle: 225, // 仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
    endAngle: -45, // 仪表盘结束角度
    clockwise: true, // 仪表盘刻度是否是顺时针增长。
    // data: [12, 15, 19, 80], // 系列中的数据内容数组。数组项可以为单个数值
    data: [ // 更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象
      {
        // 数据项的名称
        name: '数据1',
        // 数据项值8
        value: 10
      }
    ],
    min: 0, // 最小的数据值，映射到 minAngle。
    max: 100, // 最大的数据值，映射到 maxAngle。
    splitNumber: 10, // 仪表盘刻度的分割段数
    axisLine: { // 仪表盘轴线相关配置
      show: true,
      lineStyle: { // 仪表盘轴线样式
        color: '',
        width: '',
        shadowBlur: '', // shadow ...
      },
    },
    splitLine: { // 分隔线样式
      show: true,
      length: 30, // 分隔线线长。支持相对半径的百分比。
      lineStyle: {},
    },
    axisTick: { // 刻度样式
      show: true,
      splitNumber: 5, // 分隔线之间分割的刻度数
      length: 8, // 刻度线长。支持相对半径的百分比
      lineStyle: {},
    },
    axisLabel: { // 刻度标签
      show: true,
      distance: 5, // 标签与刻度线的距离
      formatter: value => value, // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
      color: '',
      fontStyle: 'normal', // font ...
      shadowBlur: '', // shadow ...
    },
    pointer: { // 仪表盘指针
      show: true,
      length: '80%',
      width: 8,
    },
    itemStyle: { // 仪表盘指针样式
      color: '',
      borderColor: '',
      shadowBlur: '', // shadow ...
      opacity: 1,
    },
    title: {}, // 仪表盘标题
    detail: { // 仪表盘详情，用于显示数据 (在仪表盘上(一般在指针下方)，显示当前数据或者标题之类)
      show: true,
      offsetCenter: [0, '40%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比
      formatter: value => value.toFised(0), // 格式化函数或者字符串
      color: '',
      fontStyle: '', // font ...
      shadowBlur: '', // shadow ...
    },
    silent: false,
    animation: true, // animation ...
    tooltip: {},
  }
]
