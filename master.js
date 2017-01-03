var url  = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

var h = 400;
var w = 900;

d3.json(url, function(data){
  var datum = data.data

  var heightMax = d3.max(datum, function(d){return d[1]})
    var heightMin = d3.min(datum, function(d){return d[1]})

var yScale = d3.scaleLinear()
              .domain([0, heightMax])
              .range([0, h])

var xScale = d3.scaleBand()
              .domain(d3.range(datum.length))
              .range([0, w])
               .paddingInner(0.05);



var svg = d3.select("body").append("svg").attr("height", h).attr("width", w)

var rect = svg.selectAll("rect").data(datum).enter().append("rect")




rect.attr("height", function(d){return d[1]})
  .attr("y", function(d){return h-yScale(d[1])})
    .attr("x", function(d, i){return xScale(i)+20})
    // .attr("width", function(d, i){return i})
    .attr("width", xScale.bandwidth())
    .attr("fill", "teal")
          .on("mouseover", function() { d3.select(this).attr("fill", "black")
})
.on("mouseout", function(d) { d3.select(this)
          .attr("fill", "teal")
          .transition()
          .duration(250)

    })

rect.on("mouseover", function(d) {
  var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.bandwidth()/ 2;
  var yPosition = parseFloat(d3.select(this).attr("y")) + 14;

  svg.append("text")
      .attr("id", "tooltip")
      .attr("x", xPosition)
      .attr("y", yPosition)
      .attr("text-anchor", "middle")
      .attr("font-family", "sans-serif")
      .attr("font-size", "30px")
      .attr("font-weight", "bold")
      .attr("fill", "black")
      .style("background-color", "white")
.text(d); })
.on("mouseout", function() { //Remove the tooltip
    d3.select("#tooltip").remove();
})






})
