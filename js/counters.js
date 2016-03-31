$(document).ready( function() {

    var daysToLastClass;
    var daysToCommencement;
    var today = new Date();

    var lastClass = new Date("2016-05-11T07:00:00");
    daysToLastClass = Math.ceil( (lastClass - today) / (1000*3600*24) );

    var commencement = new Date("2016-05-21T07:00:00");
    daysToCommencement = Math.ceil( (commencement - today) / (1000*3600*24) );

    $("#lastclass").append(daysToLastClass);
    $("#commencement").append(daysToCommencement);
});
