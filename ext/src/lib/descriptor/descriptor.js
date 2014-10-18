/**
 * Created by Boudewijn on 18-10-2014.
 */
function Descriptor() {

	var label = "";

	this.setLabel = function(value) {
		label = value;
	};

	this.getLabel = function() {
		return label;
	};


}