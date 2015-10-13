'use strict';

function EnumValue(name, index, enumType) {
    this.name = name;
    this.index = index;
    this.enumType = enumType;
}

EnumValue.prototype.toString = function() {
    return this.name;
};

function Enum() {
    this.values = [];

    var numValues = arguments.length;
    for (var i = 0; i < numValues; i++) {
        var value = new EnumValue(arguments[i], i, this);
        this[arguments[i]] = value;
        this.values.push(value);
    }
}

Enum.prototype.typeCheck = function(enumValue) {
    if (enumValue.enumType !== this)
        throw 'value is not from this enum';
}

function EnumMap(enumType, map) {
    this.enumType = enumType;
    this.table = [];
    for (var key in map)
        this.table[enumType[key].index] = map[key];
}

EnumMap.prototype.get = function(enumValue) {
    this.enumType.typeCheck(enumValue);
    return this.table[enumValue.index];
};

Enum.prototype.map = function(map) {
    return new EnumMap(this, map);
}
