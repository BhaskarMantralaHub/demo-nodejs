/**
 * @link TestClass
 * This class is about testing something
 */
export class TestClass {
  /** @internal */
  private localString: string | undefined;

  /** static value */
  static staticParam = 'Hello';

  bParam = 'bParam value';

  aParam = 'aParam value';

  getLocalString() {
    return this.localString;
  }

  /**
   * Takes two parameters
   * @param param1 - valid param
   * @param param2 - valid param
   * @example
   * ```ts
   * testClass.method1('Hello', 'Hi');
   * ```
   */
  method1(param1: string, param2: string) {
    console.log({ param1, param2 });
  }
}

export const testClass = new TestClass();
