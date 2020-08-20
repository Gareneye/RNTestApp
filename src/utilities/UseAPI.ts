import { useEffect, useState } from 'react';
import ApiService from './ApiService';

// eslint-disable react-hooks/rules-of-hooks

interface IArgs<DataType, ErrorType> {
  method: keyof typeof ApiService;
  params?: any[];
  onSuccess?: (data: DataType) => void;
  onFail?: (error: ErrorType) => void;
  data?: DataType;
}

/**
 * Prepare API for request execution
 * @param method ApiService method
 * @param action Action trigger
 * @param params Params for function from ApiService
 */
export const prepareApi = <DataType, ErrorType = any>(
  args: IArgs<DataType, ErrorType>,
) => {
  const [data, setData] = useState<DataType | undefined>(args.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>();

  const execute = (...fetchParams: any) => {
    setIsLoading(true);

    const params = [...(args.params ?? []), ...fetchParams];

    // tslint:disable-next-line: no-console
    console.log('prepareAPI', 'execute', args);
    // tslint:disable-next-line: no-console
    console.log('prepareAPI', 'params', params);

    (ApiService[args.method] as any)(...params)
      .then((response: DataType) => {
        // tslint:disable-next-line: no-console
        console.log('onSuccess', response);

        setData(response);
        args.onSuccess?.(response);
        setIsLoading(false);
      })
      .catch((responseError: ErrorType) => {
        // tslint:disable-next-line: no-console
        console.log('onFail', responseError);

        setError(responseError);
        args.onFail?.(responseError);
        setIsLoading(false);
      });
  };

  return { data, isLoading, error, execute };
};

/**
 * PrepareAPI with immediate execution
 */
export const useApi = <DataType, ErrorType = any>(
  args: IArgs<DataType, ErrorType>,
) => {
  const { execute, ...rest } = prepareApi<DataType, ErrorType>(args);

  useEffect(() => {
    execute();
  }, [execute]);

  return { ...rest };
};
