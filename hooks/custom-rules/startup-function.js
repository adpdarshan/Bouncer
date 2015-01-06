/**
 * @fileoverview A rule to ensure feature file contains startup Method.
 * @author Darshan Kapadia
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

     "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var count = 0;

    function checkCount(node) {
        if(count === 0)
        {
            context.report(node, "File should have a startup function. It will be the entry point to the system");
        }
        else if (count > 1){
            context.report(node, "File should have only 1 startup function");
        }
    }

    function checkStartupFunction(node) {

        if (node.parent.key && node.parent.key.name === "startup") {
            count++;
        }
        else if(node.id && node.id.name === "startup"){
            count++;
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionExpression": checkStartupFunction,
        "FunctionDeclaration": checkStartupFunction,
        "Program:exit": checkCount
    };
};