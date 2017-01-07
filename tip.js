tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });


var margin = {
    top: 100,
    bottom: 10,
    left: 70,
    right: 70
  },
  w = 1000,
  h = 500,
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

              var tip = d3.tip()
                .attr('class', 'd3-tip')
              .offset([-10, 0])
                .html(function(d) {
                //   var dab = moment(d[0]);
                // var d = dab.format("MMMM DD YYYY")
                  return "<p><strong>" + d[0] + "</strong><span style='color:red'> " + d[1] + " in billions</span></p>";})

rect.call(tip)
  .attr("width", 10)
    .attr("height", function(d) {
    return h - yScale(d[1]);
    })
    .attr("x", function(d, i) {
      return xScale(i)  + margin.left;
    })
  .attr("y", function(d){return yScale(d[1]);})
  .attr("fill", "teal")
  .on("mouseover", tip.show)
  .on("mouseout", tip.hide)
  .attr("class", "bar")


svg.append("g").call(d3.axisLeft(yScale).ticks(10))
    .attr("transform", "translate(" + margin.left  + ")")

    svg.append("g").call(d3.axisBottom(xScale).ticks(0))
    .attr("transform", "translate("+ margin.left +"," + (h)+ ")")


});
