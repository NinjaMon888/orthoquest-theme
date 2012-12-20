// http://docs.jquery.com/Plugins/Validation/validate

jQuery.noConflict();

jQuery.validator.setDefaults({

  submitHandler : function() {
    tx_srfeuserregister_encrypt(this);
    return true;
  }
});

jQuery("#tx-srfeuserregister-pi1-fe_users_form").validate({

  meta : "validate",
  errorClass : "ym-error",
  validClass : "ym-valid",
  
  errorPlacement : function(error, element) {
    error.appendTo(element.parent());
  },

  highlight : function(element, errorClass, validClass) {
    jQuery(element).addClass(errorClass).closest("div").addClass(errorClass).removeClass(validClass);
  },

  unhighlight : function(element, errorClass, validClass) {
    jQuery(element).addClass(validClass).closest("div").removeClass(errorClass);
  },

  // set this class to error-labels to indicate valid fields
  success : function(label) {
    label.removeClass("ym-error")
  }
});
