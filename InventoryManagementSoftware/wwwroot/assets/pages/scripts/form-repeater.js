var FormRepeater = function () {

    return {
        //main function to initiate the module
        init: function () {
        	$('.mt-repeater').each(function(){
                $(this).repeater({
        			show: function () {
	                	$(this).slideDown();
		            },

		            hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
		            },

		            ready: function (setIndexes) {

		            }

        		});
        	});
        }

    };

}();

jQuery(document).ready(function() {
    FormRepeater.init();
});
