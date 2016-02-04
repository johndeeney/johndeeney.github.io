$(document).ready( function() {

    var daysToIthaca;
    var daysToSpring;
    var daysToLastClass;
    var daysToCommencement;
    var today = new Date();
    var ithaca = new Date("2016-02-18T07:00:00");
    daysToIthaca = Math.ceil( (ithaca - today) / (1000*3600*24) );

    var spring = new Date("2016-03-15T07:00:00");
    daysToSpring = Math.ceil( (spring - today) / (1000*3600*24) );

    var lastClass = new Date("2016-05-11T07:00:00");
    daysToLastClass = Math.ceil( (lastClass - today) / (1000*3600*24) );

    var commencement = new Date("2016-05-21T07:00:00");
    daysToCommencement = Math.ceil( (commencement - today) / (1000*3600*24) );

    $("#erica1").append(daysToIthaca);
    $("#erica2").append(daysToSpring);
    $("#lastclass").append(daysToLastClass);
    $("#commencement").append(daysToCommencement);
});
