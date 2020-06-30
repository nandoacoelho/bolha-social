import * as d3 from 'd3'

import React, { Component } from 'react'

class BubbleChart extends Component {
  static defaultProps = {
    data: [],
    useLabels: false
  }

  constructor(props) {
    super(props)

    this.minValue = 10
    this.maxValue = 100
    this.mounted = false
    this.forDesktopUp = window.innerWidth >= 1200
    this.forBigDesktopUp = window.innerWidth >= 1400
    this.forHugeDesktopUp = window.innerWidth >= 1600
    this.state = { innerWidth: 0, data: [], width: null, height: null }

    this.radiusScale = this.radiusScale.bind(this)
    this.simulatePositions = this.simulatePositions.bind(this)
    this.renderBubbles = this.renderBubbles.bind(this)
  }

  componentWillMount() {
    this.mounted = true
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.minValue =
        0.95 *
        d3.min(this.props.data, item => {
          return item.v
        })

      this.maxValue =
        1.05 *
        d3.max(this.props.data, item => {
          return item.v
        })

      this.setState({
        width: document.querySelector('#background-circle').clientWidth,
        height: document.querySelector('#background-circle').clientHeight
      })

      this.simulatePositions(this.props.data)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  radiusScale = value => {
    let range = [80, 180]

    if (this.forBigDesktopUp) {
      range = [90, 190]
    }

    if (this.forHugeDesktopUp) {
      range = [100, 200]
    }

    const fx = d3
      .scaleSqrt()
      .range(range)
      .domain([this.minValue, this.maxValue])

    return fx(value)
  }

  simulatePositions = data => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.5)
      .force('x', d3.forceX().strength(0.05))
      .force('y', d3.forceY().strength(0.05))
      .force(
        'collide',
        d3.forceCollide(d => {
          const compensatedPercentage = this.getBalancedPercentage(d.categoryPercentage)
          return this.radiusScale(compensatedPercentage) + 5
        })
      )
      .on('tick', () => {
        if (this.mounted) {
          this.setState({ data })
        }
      })
  }

  getBalancedPercentage(value) {
    switch (true) {
      case value < 1:
        return 30
      case value < 3:
        return 300
      case value < 5:
        return 700
      case value < 10:
        return 1000
      default:
        return value * 300
    }
  }

  renderBubbles = data => {
    const minValue =
      0.95 *
      d3.min(data, item => {
        return item.v
      })

    const maxValue =
      1.05 *
      d3.max(data, item => {
        return item.v
      })

    // render circle and text elements inside a group
    const texts = data.map((item, index) => {
      const compensatedPercentage = this.getBalancedPercentage(item.categoryPercentage)
      const scale = this.radiusScale(compensatedPercentage)
      const fontSize = scale > 100 ? 24 : 10
      const fontSizePercentage = scale > 90 ? 32 : 20
      const percentage = `${item.categoryPercentage.toFixed(2)}%`
      const dy = scale > 80 ? 28 : 18
      const name = item.id

      return (
        <g
          key={index}
          transform={`translate(${this.state.width / 2 + item.x}, ${this.state.height / 2 +
            item.y})`}
        >
          <circle r={scale} fill={item.color} stroke={item.color} strokeWidth="1" />
          <text
            dy="-10"
            fill="#fff"
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="bold"
          >
            {name}
          </text>
          <text
            dy={dy}
            fill="#fff"
            textAnchor="middle"
            fontSize={`${fontSizePercentage}px`}
            fontWeight="bold"
          >
            {percentage}
          </text>
        </g>
      )
    })

    return texts
  }

  render() {
    if (this.state.data.length && this.state.width) {
      return (
        <svg width={this.state.width} height={this.state.height}>
          {this.renderBubbles(this.state.data)}
        </svg>
      )
    }

    return <div>Loading</div>
  }
}

export default BubbleChart
