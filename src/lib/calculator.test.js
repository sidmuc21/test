import { multiplier , adder , subtracter , divider } from "./calculator";
import {expect, test} from "vitest";

test('Multiplication Test', ()=> {
    let result = multiplier(4,3);
    expect(result).toEqual(12);
});

test('Addition Test', ()=> {
    let result = adder(4,3);
    expect(result).toEqual(7);
});

test('Subtraction Test', ()=> {
    let result = subtracter(4,3);
    expect(result).toEqual(1);
});

test('Division Test', ()=> {
    let result = divider(12,3);
    expect(result).toEqual(4);
});