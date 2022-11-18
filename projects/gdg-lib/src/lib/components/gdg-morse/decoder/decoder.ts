export class Decoder {
  morseDictionary = new Map();
  constructor() {
    this.morseDictionary.set('A', '._');
    this.morseDictionary.set('B', '_...');
    this.morseDictionary.set('C', '_._.');
    this.morseDictionary.set('D', '_..');
    this.morseDictionary.set('E', '.');
    this.morseDictionary.set('F', '.._.');
    this.morseDictionary.set('G', '__.');
    this.morseDictionary.set('H', '....');
    this.morseDictionary.set('I', '..');
    this.morseDictionary.set('J', '.___');
    this.morseDictionary.set('K', '_._');
    this.morseDictionary.set('L', '._..');
    this.morseDictionary.set('M', '__');
    this.morseDictionary.set('N', '_.');
    this.morseDictionary.set('O', '___');
    this.morseDictionary.set('P', '.__.');
    this.morseDictionary.set('Q', '__._');
    this.morseDictionary.set('R', '._.');
    this.morseDictionary.set('S', '...');
    this.morseDictionary.set('T', '_');
    this.morseDictionary.set('U', '.._');
    this.morseDictionary.set('V', '..._');
    this.morseDictionary.set('W', '.__');
    this.morseDictionary.set('X', '_.._');
    this.morseDictionary.set('Y', '_.__');
    this.morseDictionary.set('Z', '__..');
    this.morseDictionary.set('0', '_____');
    this.morseDictionary.set('1', '.____');
    this.morseDictionary.set('2', '..___');
    this.morseDictionary.set('3', '...__');
    this.morseDictionary.set('4', '...._');
    this.morseDictionary.set('5', '.....');
    this.morseDictionary.set('6', '_....');
    this.morseDictionary.set('7', '__...');
    this.morseDictionary.set('8', '___..');
    this.morseDictionary.set('9', '____.');
    this.morseDictionary.set(' ', ' ')
  }


  public decode(input: string): string {
    let decodeText = '';
    const codes = input.split(' ');
    for (const code of codes) {
      try {
        // @ts-ignore
        decodeText += [...this.morseDictionary].find(([key, value]) => code === value)[0];
      } catch (error) {
        console.error('ERROR');
        console.error(error);
      }
    }
    return decodeText;
  }


  public encode(input: string): string {
    let encodeText = '';
    for (const char of input) {
      encodeText += this.morseDictionary.get(char.toUpperCase());
      encodeText += ' ';
    }
    return encodeText;
  }

}
