// Code goes here

//Tests if d3 is supported, can specify static images if tests fail
// <script src="js/modernizr.js"></script>

// <script type="text/javascript">
//         Modernizr.load({
//                 test: Modernizr.svg && Modernizr.inlinesvg,
//                 yep : [ 'js/d3.v3.min.js',
//                         'js/script.js' ]
//         });
// </script>

// Declare variable to store otherwise would-be global variables
//New values for dataset
var vis = {};
vis.numValues = 20;
vis.maxValue = 50;
// dataset = [];       //Initialize empty array
// for (var i = 0; i < numValues; i++) { //Loop numValues times
//     var newNumber = Math.floor(Math.random() * 25); //New random integer (0-24)
//     dataset.push(newNumber);//Add new number to array
// }

// Width and height
var w = 600;
var h = 250;

var dataset = [
  {
    key: 0,
    value: 5,
  }, //dataset is now an array of objects.
  {
    key: 1,
    value: 10,
  }, //Each object has a 'key' and a 'value'.
  {
    key: 2,
    value: 13,
  },
  {
    key: 3,
    value: 19,
  },
  {
    key: 4,
    value: 21,
  },
  {
    key: 5,
    value: 25,
  },
  {
    key: 6,
    value: 22,
  },
  {
    key: 7,
    value: 18,
  },
  {
    key: 8,
    value: 15,
  },
  {
    key: 9,
    value: 13,
  },
  {
    key: 10,
    value: 11,
  },
  {
    key: 11,
    value: 12,
  },
  {
    key: 12,
    value: 15,
  },
  {
    key: 13,
    value: 20,
  },
  {
    key: 14,
    value: 18,
  },
  {
    key: 15,
    value: 17,
  },
  {
    key: 16,
    value: 16,
  },
  {
    key: 17,
    value: 18,
  },
  {
    key: 18,
    value: 23,
  },
  {
    key: 19,
    value: 25,
  },
];

var xScale = d3.scale
  .ordinal()
  .domain(d3.range(dataset.length))
  .rangeRoundBands([0, w], 0.05);

var yScale = d3.scale
  .linear()
  .domain([
    0,
    d3.max(dataset, function (d) {
      return d.value;
    }),
  ])
  .range([0, h]);

//Define key function, to be used when binding data
var key = function (d) {
  return d.key;
};

//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
//Create bars
svg
  .selectAll("rect")
  .data(dataset, key)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return xScale(i);
  })
  .attr("y", function (d) {
    return h - yScale(d.value);
  })
  .attr("width", xScale.rangeBand())
  .attr("height", function (d) {
    return yScale(d.value);
  })
  .attr("fill", function (d) {
    return "rgb(225, 0, " + d.value * 10 + ")";
  })
  //On mouseover
  .on("mouseover", function () {
    d3.select(this).attr("fill", "orange");
  })

  .on("mouseout", function (d) {
    d3.select(this)
      .transition()
      .duration(250)
      .attr("fill", "rgb(225, 0, " + d.value * 10 + ")");
  });

//Create labels
svg
  .selectAll("text")
  .data(dataset, key)
  .enter()
  .append("text")
  .text(function (d) {
    return d.value;
  })
  .attr("text-anchor", "middle")
  .attr("x", function (d, i) {
    return xScale(i) + xScale.rangeBand() / 2;
  })
  .attr("y", function (d) {
    return h - yScale(d.value) + 14;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white");

//On click, update with new data
d3.selectAll("button").on("click", function () {
  console.log(vis.numValues);
  //See which p was clicked
  var buttonID = d3.select(this).attr("id");

  //Decide what to do next
  if (buttonID == "add") {
    vis.numValues += 1;
    //Add a data value
    var newNumber = Math.floor(Math.random() * vis.maxValue);
    var lastKeyValue = dataset[dataset.length - 1].key;
    console.log(lastKeyValue);
    dataset.push({
      key: lastKeyValue + 1,
      value: newNumber,
    });
  } else if (buttonID == "remove") {
    //Remove a value
    vis.numValues -= 1;
    console.log(vis.numValues);
    dataset.shift(); //Remove one value from dataset
  }

  //Update scale domains
  xScale.domain(d3.range(dataset.length));
  yScale.domain([
    0,
    d3.max(dataset, function (d) {
      return d.value;
    }),
  ]);

  //Select…
  var bars = svg.selectAll("rect").data(dataset, key);

  //Enter…
  bars
    .enter()
    .append("rect")
    .attr("x", w)
    .attr("y", function (d) {
      return h - yScale(d.value);
    })
    .attr("width", xScale.rangeBand())
    .attr("height", function (d) {
      return yScale(d.value);
    })
    .attr("fill", function (d) {
      return "rgb(94,243, " + d.value * 10 + ")";
    });

  //Update…
  bars
    .transition()
    .duration(500)
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d) {
      return h - yScale(d.value);
    })
    .attr("width", xScale.rangeBand())
    .attr("height", function (d) {
      return yScale(d.value);
    });

  //Exit…
  bars
    .exit()
    .transition()
    .duration(500)
    .attr("x", -xScale.rangeBand())
    .remove();

  //Update all labels

  //Select…
  var labels = svg.selectAll("text").data(dataset, key);

  //Enter…
  labels
    .enter()
    .append("text")
    .text(function (d) {
      return d.value;
    })
    .attr("text-anchor", "middle")
    .attr("x", w)
    .attr("y", function (d) {
      return h - yScale(d.value) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

  //Update…
  labels
    .transition()
    .duration(500)
    .attr("x", function (d, i) {
      return xScale(i) + xScale.rangeBand() / 2;
    })
    .attr("y", function (d) {
      return h - yScale(d.value) + 14;
    });
  //Exit…
  labels
    .exit()
    .transition()
    .duration(500)
    .attr("x", -xScale.rangeBand())
    .remove();
});

// Randomize data on click
d3.select("#random").on("click", function () {
  //New values for dataset
  dataset = [];
  for (var i = 0; i <= vis.numValues; i++) {
    var newNumber = Math.floor(Math.random() * vis.maxValue);
    var nkey = i;
    dataset.push({
      key: nkey,
      value: newNumber,
    });
  }

  // update scales
  xScale.domain(d3.range(dataset.length));
  yScale.domain([
    0,
    d3.max(dataset, function (d) {
      return d.value;
    }),
  ]);

  //update all rects
  svg
    .selectAll("rect")
    .data(dataset, key)
    .transition()
    // loop through each element in d and apply increasing delay
    .delay(function (d, i) {
      // produce staggard transition
      return (i / dataset.length) * 1000;
    })
    .duration(500)
    .ease("linear") //circle, elastic

    .attr("y", function (d) {
      return h - yScale(d.value);
    })
    .attr("height", function (d) {
      return yScale(d.value);
    })
    .attr("fill", function (d) {
      return "rgb(94,243," + d.value * 8 + ")";
    });
  svg
    .selectAll("text")
    .data(dataset, key)
    .transition()
    .delay(function (d, i) {
      // produce staggard transition
      return (i / dataset.length) * 1000;
    })
    .duration(500)
    .ease("linear")
    .text(function (d) {
      return d.value;
    })
    .attr("y", function (d) {
      return h - yScale(d.value) + 14;
    });
});
