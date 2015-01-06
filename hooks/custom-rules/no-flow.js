/**
 * @fileoverview A rule to ensure each file has as the first line
 * @author Darshan Kapadia
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var count = 0 ;

    function checkCount(node) {
        if (count !== 1) {
            context.report(node, "File should have a /* @flow */ as the first line. Please run flow on all your files");
        }
    }

    return {

        "BlockComment": function checkFlowComment(node) {
            if (node.value === " @flow ") {
                count++;
            }
        },

        "Program:exit": checkCount
    };
};