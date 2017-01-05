var data = [
  8,
  8,
  6,
  40,
  8,
  8,
  6,
  40,
  3,
  5,
  8,
  8,
  6,
  40,
  8,
  8,
  6,
  40,
  40,
  8,
  8,
  6,
  40,
  3,
  5,
  8,
  8,
  6,
  40,
  8,
  8,
  6,
  40
]

var padding = 30;
var margin = {top: 20, right: 10, bottom: 50, left: 20}

var max = d3.max(data);
var min = d3.min(data)

var w = 800 - margin.left;
var h = 400 - margin.top ;


var xScale = d3.scaleBand().domain(d3.range(data.length)).rangeRound([0, w]).padding(0.5)

var yScale = d3.scaleLinear().domain([0, max])
.range([h , 0 ])

var svg = d3.select("body").append("svg").attr("width", w + 100).attr("height", h)
.attr("transform", "translate(" + padding + ", 0)") ;

var rect = svg.selectAll().data(data).enter().append("rect");

var xAxis = d3.axisBottom(xScale).ticks(5)

var yAxis = d3.axisLeft(yScale)

rect.attr("height", function(d) {
  return h - yScale(d)
}).attr("width", 5).style("fill", "teal").attr("x", function(d, i) {
  return xScale(i)
}).attr("y", function(d) {
  return yScale(d) - margin.bottom
})
.attr("transform", "translate(" + padding + ",0 )")


svg.append("g").call(xAxis).attr("transform", "translate(" + padding + "," + (h - margin.bottom) + ")")



svg.append("g").attr("transform", "translate("+ padding + "," + -padding + ")").call(yAxis.ticks(5))


console.log(data.length)
