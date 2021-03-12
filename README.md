# ExcelCoordinates

## Description
Convert **Excel Coordinates** to simple coordinate system, and vice versa.

## Usage
```javascript
const {
    YToNum,
    numToY,
    XToNum,
    numToX,
    YXToNumPair,
} = require('excel-coordinates')

console.log(
    " YToNum(string) \n",
    YToNum('A'), // -> 0
    YToNum('Z'), // -> 25
    YToNum('ZZ'), // -> 701
    YToNum('AAA'), // -> 702
    
    "\n numToY(number) \n",
    numToY(0), // -> 'A'
    numToY(25), // -> 'Z'
    numToY(701), // (26*26 + 25)-> 'ZZ'
    numToY(702), // -> 'AAA'

    "\n XToNum(string) \n",
    XToNum('1'), // -> 0
    XToNum('2'), // -> 1

    "\n numToX(number) \n",
    numToX(0), // -> '1'
    numToX(1), // -> '2'

    "\n YXToNumPair(string) \n",
    YXToNumPair('A1'), // -> [ 0, 0 ]
    YXToNumPair('Z26'), // -> [ 25, 25 ]
    YXToNumPair('ZZ26'), // -> [ 701, 25 ]
    YXToNumPair('AAA26'), // -> [ 702, 25 ]
)
```
> NOTE: Arguments Must be **strictly** of type that provided in function signitures in **TSDocs**, otherwise **nulls** will be returned.

For invalid arguments **nulls** will be returned:
```javascript
console.log(
    YToNum('A'), // -> 0, Argument Must match regex - /^([A-Z][A-Z]*)$/
    YToNum('asdsada'), // -> null
    YToNum(1), // -> null
    YToNum(undefined), // -> null
    YToNum(null), // -> null
    YToNum(true), // -> null

    XToNum('1'), // -> 0, Argument Must match regex - /^([1-9][0-9]*)$/
    XToNum('0'), // -> null
    XToNum(1), // -> null
    XToNum(undefined), // -> null
    XToNum(null), // -> null
    XToNum(true), // -> null
    
    numToY(0), // -> 'A', Argument Must be nonnegative integer number.
    numToY(-1), // -> null
    numToY(0.5), // -> null
    numToY('0'), // -> null

    numToX(0), // -> '1', Argument Must be nonnegative integer number.
    numToX(-1), // -> null
    numToX(0.5), // -> null
    numToX('0'), // -> null

    YXToNumPair('A1'), // [ 0, 0 ], Argument Must match regex - /^([A-Z][A-Z]*)([1-9][0-9]*)$/
    YXToNumPair('Z'), // null
    YXToNumPair('26'), // null
    YXToNumPair(0), // null
    YXToNumPair(true), // null
    YXToNumPair(null), // null
    YXToNumPair(undefined), // null
)
```