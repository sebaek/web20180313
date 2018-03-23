var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $(function () {
      $("#my-button").click(function () {
        var text = $("#my-input").val();
        if (text) {
          var newElement = $("<li />");
          newElement.text(text);
          newElement.click(function () {
            $(this).slideUp("slow", function() {
              $(this).remove();
            });
          });
          $("#my-list").append(newElement);
        }

      });




    });
  </script>
  <title>Document</title>
</head>

<body>
  <input id="my-input" type="text">
  <button id="my-button">&plus;</button>
  <ul id="my-list">

  </ul>
</body>

</html>
    
    
    
    
    
    
    `
    
    
    
    );
}).listen(8080);
