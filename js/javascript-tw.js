
// Update Copyright Year
$('#hc-year').text(new Date().getFullYear());

// Configure Slide
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
})

// Wait for document to be ready before binding functions to click/change events of elements
$(document).ready(function(){ 
	

    // Handle click event of 'hc-submit' Button. If any of the 'hc-form-order' form fields are invalid stop submission.
    $("#hc-submit").click(function(event) {

        // Get the 'hc-form-contact'
        var form = $("#hc-form-contact");
    
        // If any of the 'hc-form-contact' form fields are invalid stop submission
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        // Flag that the form was validated
        form.addClass('was-validated');

    });

	
});


