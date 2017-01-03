var url  = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

var h = 400;
var w = 500;

d3.json(url, function(data){
  var datum = data.data

  var heightMax = d3.max(datum, function(d){return d[1]})
    var heightMin = d3.min(datum, function(d){return d[1]})

var yScale = d3.scaleLinear()
              .domain([0, heightMax])
              .range([0, h])

var xScale = d3.scaleLinear()
              .domain([0, datum.length])
              .range([0, w])

    console.log(datum.length)

var svg = d3.select("body").append("svg").attr("height", h).attr("width", w)

var rect = svg.selectAll("rect").data(datum).enter().append("rect")

rect.attr("height", function(d){return d[1]})
  .attr("y", function(d){return h-yScale(d[1])})
    .attr("x", function(d, i){return xScale(i)})
    .attr("fill", "red")
    .attr("width", 2)




})
