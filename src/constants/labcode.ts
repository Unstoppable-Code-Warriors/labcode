export const LABCODE_TEST_CODES = [
  'L8',
  'F8', 
  'LA',
  'FA',
  'O5',
  'G2',
  'G15',
  'G20',
  'LH',
  'FH',
  'WE',
  'CA',
  'FI',
  'CNV',
  'DG',
  'S',
  'HPV'
] as const;

export type LabcodeTestCode = typeof LABCODE_TEST_CODES[number];
