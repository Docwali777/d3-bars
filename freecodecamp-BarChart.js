var margin = {
    top: 100,
    bottom: 10,
    left: 70,
    right: 70
  },
  w = 1000,
  h = 300,
  padding = 50;

var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

var svg = d3.select("body").append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)



//json data from url
d3.json(url, function(data) {
  var datum = data.data; // data.data access the object of the arrays

  var rect = svg.selectAll("rect").data(datum).enter().append("rect");

var maxYValue = d3.max(datum, function(d){return d[1]})

  var yScale = d3.scaleLinear()
                .domain([0, maxYValue])
                .range([h, 0])

var xScale = d3.scaleLinear()
              .domain([0, datum.length ])
              .range([0, w])


console.log(datum.length)
  console.log()
  rect.attr("width", 10)
    .attr("height", function(d) {
    return h - yScale(d[1]);
    })
    .attr("x", function(d, i) {
      return xScale(i)  + margin.left;
    })
  .attr("y", function(d){return yScale(d[1]);})
  .attr("fill", "teal")


svg.append("g").call(d3.axisLeft(yScale).ticks(5))
    .attr("transform", "translate(" + margin.left  + ")")

    svg.append("g").call(d3.axisBottom(xScale).ticks(0))
    .attr("transform", "translate("+ margin.left +"," + (h)+ ")")

    rect.on("mouseover", function(d){
      d3.select(this).attr("fill", "red")
    }).on("mouseout", function(d){
      d3.select(this).attr("fill", "teal")
    })

});
