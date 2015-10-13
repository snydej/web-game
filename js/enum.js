'use strict';

function _EnumValue(name, index, typeRef) {
    this.name = name;
    this.index = index;
    this._typeRef = typeRef;
}

_EnumValue.prototype.toString = function() {
    return this.name;
};

function Enum() {
    this.values = [];
    this._typeRef = {};

    var numValues = arguments.length;
    for (var i = 0; i < numValues; i++) {
        var value = new _EnumValue(arguments[i], i, this._typeRef);
        this[arguments[i]] = value;
        this.values.push(value);
    }
}

Enum.prototype.typeCheck = function(enumValue) {
    if (enumValue._typeRef !== this._typeRef)
        throw 'value is not from this enum';
}

function _EnumMap(enumType, map) {
    this.enumType = enumType;
    this.table = [];
    for (var key in map)
        this.table[enumType[key].index] = map[key];
}

_EnumMap.prototype.get = function(enumValue) {
    this.enumType.typeCheck(enumValue);
    return this.table[enumValue.index];
};

Enum.prototype.map = function(map) {
    return new _EnumMap(this, map);
}
