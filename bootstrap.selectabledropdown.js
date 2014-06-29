//Author: Philip Ermish
//Created: 5/12/2013
//License: GNU General Public License
// 	This program is free software: you can redistribute it and/or modify
// 	it under the terms of the GNU General Public License as published by
// 	the Free Software Foundation, either version 3 of the License, or
//	 (at your option) any later version.

// 	This program is distributed in the hope that it will be useful,
// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//	 GNU General Public License for more details.

// 	You should have received a copy of the GNU General Public License
// 	along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function($) {
    "use strict";

    function initialize(element, userSettings) {
        var settings = $.extend({}, $.fn.defaultSettings, userSettings); //Merge default Settings with the user Settings

        var dropdownElements = element.find('li');

        dropdownElements.on('click', function(){
            var currentElement = $(this);

            var optionContent = currentElement.find('a').text(); //Get option text
            var carot = settings.useCarot ? ' <span class="caret"></span>' : ''; //Add carot

            element.find('.dropdown-toggle').html(optionContent + carot); //update button text
        });
    };


    $.fn.defaultSettings = {
        useCarot: true
    };

    $.fn.selectableDropdown = function() {

        //Get user passed in settings
        var args = Array.prototype.slice.call(arguments, 0);
        var userSettings = args.length === 0 ? {} : $.extend({}, args[0]);

        //apply to each element
        this.each(function(){
            var currentElement = $(this);

            //if dropdown list isn't a child, try to move up a level
            currentElement  = currentElement.find('li').length
                              ? currentElement
                              : currentElement.parent();

            initialize(currentElement, userSettings);
        });


        return this;  //So jquery chaining will still work
    };

})(jQuery);

$(document).ready(function(){
    $('.selectable-dropdown').selectableDropdown(); //apply to class
});