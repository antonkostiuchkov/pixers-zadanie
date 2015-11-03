$(function () {

  animateLabels ();

  // Getting info from a server and populating the page
  var url = 'http://rest.learncode.academy/api/test/users/';
  var $users = $('#users');
  var $email = $('#email');
  var $password = $('#password');
  var $form = $('form');

  function addUser (user) {
    $users.append('<li><p><strong>Email</strong>: ' + user.email + '; </p><p><strong>Password</strong>: ' + user.password + ';</p><button class="remove" data-id=' + user.id + '>Remove</button></li>');
  };

  $.ajax({
    url: url,
    type: 'GET',
    success: function (users) {
      $.each(users, function(i, user) {
        addUser(user);
      });
    },
    error: function () {
      alert('Service error');
    }
  });


  //On Submit button click post to the server
  $('#add-user').on('click', function(e) {
    var passwRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
    var $required = $('.required');
    var $invalid = $('.invalid');

    // Validation
    if ($email.val() == "" || $password.val() == "") {
      // Show requested email
      $required.show();
    }
    else if (passwRegex.test($password.val()) && emailRegex.test($email.val())) {

      var user = {
        email: $email.val(),
        password: $password.val()
      };

      $.ajax({
        url: url,
        type: 'POST',
        data: user,
        success: function (newUser) {

          addUser(newUser);
          console.log('success!');

          $('.success-login').show();
          $form.hide();

          // Remove values from inputs
          $email.val("");
          $password.val("");
          $invalid.hide();
          $required.hide();
          $('form .input-group input').removeClass('has-value');
          loginAgain ();
        },
        error: function () {
          alert('Service error');
        }
      });


    } else {
      $invalid.show();
      $required.hide();
    };
    e.preventDefault();

  });

  // On Remove button click delete user
  $users.delegate('.remove', 'click', function() {
    var $this = $(this);
    var $li = $this.closest('li');

    $.ajax({
      url: url + $this.attr('data-id'),
      type: 'DELETE',
      success: function () {
        $li.fadeOut('100', function() {
          $this.remove();
        });
      }
    });
  });
});




function animateLabels () {
  $('form .input-group input').focusout(function(){
      $this = $(this);
      var text_val = $this.val();

      if(text_val === "") {
        $this.removeClass('has-value');
      } else {
        $this.addClass('has-value');
      }
    });
};


// After successful login show form again
function loginAgain () {
  $('.again').on('click', function() {
    $('form').show();
    $(this).parent().hide();
  });
};