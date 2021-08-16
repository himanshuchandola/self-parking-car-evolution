import { Bit, Bits, bitsToFloat16 } from '../floats';

const testCases16Bits: [number, string][] = [
  [-65504, '1111101111111111'],
  [-10344, '1111000100001101'],
  [-27.15625, '1100111011001010'],
  [-1, '1011110000000000'],
  [-0.09997558, '1010111001100110'],
  [0, '0000000000000000'],
  [5.9604644775390625e-8, '0000000000000001'],
  [0.000004529, '0000000001001100'],
  [0.0999755859375, '0010111001100110'],
  [0.199951171875, '0011001001100110'],
  [0.300048828125, '0011010011001101'],
  [1, '0011110000000000'],
  [1.5, '0011111000000000'],
  [1.75, '0011111100000000'],
  [1.875, '0011111110000000'],
  [65504, '0111101111111111'],
];

describe('float', () => {
  it('should convert floating point binary bits to floating point decimal number', () => {
    for (let testCaseIndex = 0; testCaseIndex < testCases16Bits.length; testCaseIndex += 1) {
      const [decimal, binary] = testCases16Bits[testCaseIndex];
      const bits: Bits = binary
        .split('')
        .map<Bit>((bitString) => parseInt(bitString, 10) === 1 ? 1 : 0);
      expect(bitsToFloat16(bits)).toBeCloseTo(decimal, 4);
    }
  });
});

export {};
