function demo() {
    $("#demo1").hideText();
    $("#demo2").hideText({
        percent: 10
    });
    $("#demo3").hideText({
        percent: 10,
        antiSelection: true
    });
}
$(function() {
    demo();
});
