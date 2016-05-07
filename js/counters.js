$(document).ready( function() {

    var daysToLastClass;
    var daysToCommencement;
    var daysToHome;
    var today = new Date();

    var lastClass = new Date("2016-05-13T07:00:00");
    daysToLastClass = Math.ceil( (lastClass - today) / (1000*3600*24) );

    var commencement = new Date("2016-05-20T07:00:00");
    daysToCommencement = Math.ceil( (commencement - today) / (1000*3600*24) );

    var home = new Date("2016-05-23T07:00:00");
    daysToHome = Math.ceil( (home - today) / (1000*3600*24) );

    $("#lastclass").append(daysToLastClass);
    $("#commencement").append(daysToCommencement);
    $("#home").append(daysToHome);
});
