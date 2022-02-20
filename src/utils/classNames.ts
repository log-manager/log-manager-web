type ArgsType = string | false | undefined | null;

export function classNames(...args: ArgsType[]): string {
  return args.filter(Boolean).join(' ');
}
