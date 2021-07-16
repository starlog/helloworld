'use strict';


/**
 *
 * no response value expected for this operation
 **/
exports.health = function() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
