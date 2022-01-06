jQuery(document).ready(function() {


    
    jQuery('.onlynumber').keyup(function() {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
    jQuery('.onlytext').keyup(function() {
        this.value = this.value.replace(/[^a-zA-z \.]/g, '');
    });
    jQuery('.onlyemail').keyup(function() {
        this.value = this.value.replace(/[^0-9a-zA-z@.\.]/g, '');
    });
} );

