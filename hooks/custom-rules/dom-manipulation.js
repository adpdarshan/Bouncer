/**
 * @fileoverview Rule to flag invalid DOM manipulations
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

    function matchdollarnotaion(node){
        return node.callee.name === "$" && node.callee.type === "Identifier";
    }

    return {

        "CallExpression": function(node) {
            if(matchdollarnotaion(node)){
                context.report(node, "Direct Dom Manipulation not allowed. Try using $el");
            }
        }
    };
};
