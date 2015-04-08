# hideText Plugin for jQuery
Hide words in the content and disable text selection.

How to Use?
-----------

hideText depends on jQuery. Include them both in end of your HTML code:

    <script src="jquery.js" type="text/javascript"></script>
    <script src="jquery.hidetext.js" type="text/javascript"></script>

then in your code do:

    $(function() {
      $(selector).hideText();
    });

Plugin Option
-------------
| Name          | Type    | Default | Description                              |
|---------------|:-------:|:-------:|------------------------------------------|
| percent       | Number  | 5       |Percentage of words hidden in the content |
| antiSelection | Boolean | false   | Disable text selection                   |
