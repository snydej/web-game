"use strict";

function EnumValue(name, index, enumType) {
    this.name = name;
    this.index = index;
    this.enumType = enumType;
}

EnumValue.prototype.toString = function() {
    return this.name;
}

function Enum() {
    var numValues = arguments.length;
    for (var i = 0; i < numValues; i++)
        this[arguments[i]] = new EnumValue(arguments[i], i, this);
}
