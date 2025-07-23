var winner = "";
onEvent("houseDD", "input", function( ) {
  winner = getProperty("houseDD", "value");
});
onEvent("sportsDis", "click", function( ) {
  setScreen("screen2");
  readRecords("Houses", {"HouseNames": winner}, function(records) {
    var temp = {};
    temp.id = (records[0]).id;
    temp.HouseNames = winner;
    records[0].Sports = records[0].Sports + 1;
    temp.Sports = records[0].Sports;
    temp.Arts = records[0].Arts;
    records[0].Total = records[0].Total + 1;
    temp.Total = records[0].Total;

    updateRecord("Houses", temp, function(record, success) {
      if (success) {
        setText("lbl4", records[0].HouseNames + " house has won a medal in sports" );
      }
    });
  });
});
onEvent("artsDis", "click", function( ) {
  setScreen("screen2");
  readRecords("Houses", {"HouseNames": winner}, function(records) {
    var temp = {};
    temp.id = records[0].id;
    temp.HouseNames = winner;
    records[0].Arts = records[0].Arts + 1;
    temp.Arts = records[0].Arts;
    temp.Sports = records[0].Sports;
    records[0].Total = records[0].Total + 1;
    temp.Total = records[0].Total;

    updateRecord("Houses", temp, function(record, success) {
      if (success) {
        setText("lbl4", records[0].HouseNames + " house has won a medal in Arts");
      }
    });
  });
});
onEvent("btnNext", "click", function( ) {
  setScreen("screen3");
});
var option = [];
option.color = "blue";
onEvent("btnTotal", "click", function( ) {
  option.title = "Total";
  drawChartFromRecords("chart1", "bar", "Houses", ["HouseNames", "Total"]);
});
onEvent("btnSports", "click", function( ) {
  option.title = "Sports";
  drawChartFromRecords("chart1", "bar", "Houses", ["HouseNames", "Sports"]);
});

onEvent("btnArts", "click", function( ) {
  option.title = "Arts";
  drawChartFromRecords("chart1", "bar", "Houses", ["HouseNames", "Arts"]);
});
