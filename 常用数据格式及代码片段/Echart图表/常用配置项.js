
// 常用配置
// 并非所有项都需要配置，下列大部分配置可以省略（采用默认值）
// 只有在不应使用默认值的情况下才需要配置

const option = {

  title: { // 标题
    show: true, // 是否显示标题组件。[ default: true ]
    text: 'Customized Pie',
    link: '', // 主标题文本超链接。(看起来不错，但未使用过)
    target: 'self', // 指定窗口打开主标题超链接。[ default: 'blank' ] blank:新窗口、self:当前窗口
    textStyle: {
      color: '#ccc', // 文字的颜色
      fontStyle: 'normal', // 文字字体的风格 [ default: 'normal' ] 'italic' 'oblique'
      fontWeight: 'bold', // 文字字体的粗细 [ default: normal ] 'normal' 'bold' 'bolder' 'lighter' 或 100 | 200 | 300 | 400...
      fontFamily: 'serif', // 主标题文字的字体系列 [ default: 'sans-serif' ] 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
      fontSize: 18, // 主标题文字的字体大小
      rich: {}, // 自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果
    },
    left: 'center', // 值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right' [ default: 'auto' ]
    top: 20, // 基本同上 'top', 'middle', 'bottom'
    backgroundColor: 'transparent', // 标题背景色，默认透明。[ default: 'transparent' ]
  },

  legend: { // 图例组件
    show: true,
    left: 'left',
    top: 'top',
    width: 'auto', // 图例组件的宽度。默认自适应。[ default: 'auto' ] type: string, number
    height: 'auto', // 图例组件的高度
    orient: 'vertical', // 图例列表的布局朝向 横：'horizontal'、纵：'vertical'
    selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
    formatter: null, // 用来格式化图例文本，支持字符串模板和回调函数两种形式。
    tooltip: {}, // 图例的 tooltip 配置，配置项同 tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪(配合formatter)并且开启 tooltip
    icon: 'circle', // 图例项的 icon。 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    data:['直达','营销广告'], // 如果 data 没有被指定，会自动从当前系列中获取 （一般不用指定，自动获取就好了）
    textStyle: {},
  },

  grid: { // 直角坐标系内绘图网格
    show: false,
    left: 'left',
    top: 'top',
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent', // 网格背景色，默认透明。
    borderColor: '', // 网格的边框颜色
    borderWidth: '', // 网格的边框线宽
  },

  xAxis: { // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
    show: true,
    position: 'bottom', // 默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
    type: 'category', // 坐标轴类型。'value' 'category' 'time' 'log'
    name: '', // 坐标轴名称
    nameTextStyle: {}, // 坐标轴名称的文字样式
    nameGap: 15, // 坐标轴名称与轴线之间的距离
    boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true; 非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比
    min: null, // 坐标轴刻度最小值 可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布
    max: null, 
    splitNumber: 5, // 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。在类目轴中无效。
    minInterval: 1, // 自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数, 只在数值轴或时间轴中（type: 'value' 或 'time'）有效。
    maxInterval: 10,
    axisLine: { // 坐标轴轴线相关设置。
      show: true,
      symbol: 'none', // 轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 'none'。两端都显示箭头可以设置为 'arrow'，只在末端显示箭头可以设置为 ['none', 'arrow']。
      lineStyle: { // 坐标轴线线样式
        color: '',
        width: '',
        type: 'solid', // 坐标轴线线的类型 'solid' 'dashed' 'dotted'
        opacity: .5, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
      },
    },
    axisTick: { // 坐标轴刻度相关设置
      show: true,
      alignWithLabel: true, // 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
      inside: false, // 坐标轴刻度是否朝内，默认朝外。
      length: 5, // 坐标轴刻度的长度。
    },
    axisLabel: { // 坐标轴刻度标签的相关设置
      show: true,
      inside: false,
      rotate: 30, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠[ default: 0 ]
      margin: 8, // 刻度标签与轴线之间的距离
      formatter: null, // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
      color: '',
      fontStyle: '',
      fontWeight: '',
      fontFamily: '',
      align: 'center', // 文字水平对齐方式，默认自动
      backgroundColor: '',
      rich: {},
    },
    splitLine: { // 坐标轴在 grid 区域中的分隔线。
      show: true, // 是否显示分隔线。默认数值轴显示，类目轴不显示
      interval: 'auto',
      lineStyle: {}
    },
    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: false,
      areaStyle: { // 分隔区域的样式设置。
        color: '', // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。 [ default: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'] ]
        opacity: .5,
      },
    },
    axisPointer: { // 坐标轴指示器
      show: false, // 默认不显示。但是如果 tooltip.trigger 设置为 'axis' 或者 tooltip.axisPointer.type 设置为 'cross'，则自动显示 axisPointer。
      type: 'line', // 指示器类型 'line' 直线指示器 'shadow' 阴影指示器 'none' 无指示器
      snap: true, // 坐标轴指示器是否自动吸附到点上。默认自动判断
      label: { // 坐标轴指示器的文本标签
        show: false,
        formatter: null, // 文本标签文字的格式化器
        margin: 3,
        color: '',
        fontStyle: 'normal', // 文字其他省略
      },
      lineStyle: {}, // axisPointer.type 为 'line' 时有效。
      shadowStyle: {}, // axisPointer.type 为 'shadow' 时有效。
    }
  },

  yAxis: {}, // 直角坐标系 grid 中的 y 轴, 配置同上

  tooltip: { // 提示框：一般是鼠标悬浮在图形上时显示
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  visualMap: { // 视觉映射组件 （不太懂）
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },

  tooltip: { // 提示框组件
    // 提示框组件可以设置在多种地方：
    // 可以设置在全局，即 tooltip
    // 可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip
    // 可以设置在系列中，即 series.tooltip
    // 可以设置在系列的每个数据项中，即 series.data.tooltip
    show: true,
    trigger: 'item', // 触发类型 'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用, 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
    triggerOn: 'mousemove', // 提示框触发的条件，可选 'mousemove' 'click' 'mousemove|click' 'none'
    confine: true, // 是否将 tooltip 框限制在图表的区域内。 [ default: false ] 当图表外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用
    formatter: {}, // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 【较复杂，详情需查看官方文档】
    backgroundColor: '#fff',
    textStyle: {},
  },

  toolbox: { // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    show: true,
    orient: 'horizontal',
    feature: { // 各工具配置项
      saveAsImage: { // 保存为图片
        type: 'png', // 'png' 'jpeg'
        name: '', // 保存的文件名称，默认使用 title.text 作为名称。
        backgroundColor: '', // 保存的图片背景色，默认使用 backgroundColor，如果backgroundColor不存在的话会取白色
        show: true,
      },
      restore: {}, // 配置项还原
      dataView: {}, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
      dataZoom: {}, // 数据区域缩放。目前只支持直角坐标系的缩放
      magicType: { // 动态类型切换
        type: ['line', 'bar', 'stack', 'tiled'], // 启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
      },
    },
    left: '',
    top: '',
  },

  timeline: {}, // 提供了在多个 ECharts option 间进行切换、播放等操作的功能 （看起来不错，但是没用过）

  dataset: {}, // 数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射 (用过，不经常用)

  series: [ // 系列列表。每个系列通过 type 决定自己的图表类型 详情查看具体图表文档
    {
      type: 'pie', // 图表类型 'line' 'pie' 'bar' 'scatter', 'rader'(雷达), 'tree', 'graph'(关系图) 'gauge'(仪表盘)
      name: '访问来源',
    }
  ],

  backgroundColor: '#2c343c', // 背景色
}
