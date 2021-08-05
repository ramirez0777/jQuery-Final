$(document).ready(function() 
{
$('#demo').daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "startDate": "12/04/2020",
    "endDate": "12/10/2020",
    "minDate": "12/10/2020",
    "maxDate": "12/31/2025",
    "opens": "center"
}, function(start, end, label) {
  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});
/////////////////////////////////////////////////////////////////
// $('[data-toggle="confirmation"]').confirmation();

});