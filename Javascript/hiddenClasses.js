function Calc(a, b) {
    this.a = a;
    this.b = b;
}

const calc1 = new Calc(1,2);
const calc2 = new Calc(3,4);

//wrong
calc1.x = 23;
calc1.y = 45;
calc2.y = 435;
calc1.x = 68;

delete calc1.x;


/**
 If properties are added later to the object
 and in a different order and not in its constructor
 the compiler will understand that the objects do not
 share the same "hidden classes" and that they are different
 so a new analysis has to be done by the compiler to try to optimize the code...

 By deleting an object property the compiler
 also understands that the hidden classes have been changed.

 The big question is to make sure that when the compiler
 takes the code to do the analysis, it understands that
 the objects calc1 and calc2 use the same "hidden classes" with the same properties.
 */

//right
function Calc(a, b, x, y) {
    this.a = a;
    this.b = b;
    this.x = x;
    this.y = y;
}

const calc1 = new Calc(1, 2, 23, 45);
const calc2 = new Calc(3, 4, 21, 32);
