// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

function prepRows(data) {
    // Init data
    data.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }


prepRows(tableData)

// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function On_Click() {

  // retrieve date entered on screen
  var date = d3.select("#filterdate").property("value");
  let filterdate = tableData;

  // if a proper date was entered then processs
  if (date) {
    // display rows having filterdate entered on screen
    filterdate = filterdate.filter(row => row.datetime === date);
  }

  // Display the table using the filtered data
  buildTable(filterdate);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", On_Click);

// Prep and load data table
buildTable(tableData);
