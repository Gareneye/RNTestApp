import { Expose, Type } from 'class-transformer';
// tslint:disable: max-classes-per-file

/**
 * Example usage:
 * const model = plainToClass(ExampleModel, exampleJson);
 * const models = plainToClass(ExampleModel, exampleJson);
 */

export class AnotherExampleModel {
  @Expose({ name: 'RequiredVariable' })
  public readonly required!: string;
}

export class ExampleModel {
  @Expose({ name: 'RequiredVariable' })
  public readonly required!: string;

  @Type(() => AnotherExampleModel)
  @Expose({ name: 'OptionalVariable' })
  public readonly optional?: string;
}
