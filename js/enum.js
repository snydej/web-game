"use strict";

function EnumValue(name, index, enumType) {
    this.name = name;
    this.index = index;
    this.enumType = enumType;
}

EnumValue.prototype.toString = function() {
    return this.name;
}

function Enum(enumSpec) {
    for (var enumValue in enumSpec)
        this[enumValue] = new EnumValue(enumValue, enumSpec[enumValue], this);
}
