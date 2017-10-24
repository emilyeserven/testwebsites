e.preventDefault();

$.ajax({
   type: 'post',
   url: 'data.php',
   data: $('form').serialize(),
   success: function(response) {
      $('#DisplayDiv').html(response);
   }
});
