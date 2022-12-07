export interface Employee {
  name: string;
  age: number;
  /**
   * @default false
   */
  isManager?: boolean;
}
