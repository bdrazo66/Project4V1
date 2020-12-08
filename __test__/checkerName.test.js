const { test, expect } = require("@jest/globals");

import { toBindingIdentifierName } from '@babel/types';
import { checkForName } from '../src/client/js/nameChecker'
test('checker name func', () => {


    const x = 5;
    expect(x).toBe(5)




});