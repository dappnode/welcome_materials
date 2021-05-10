export interface ActionStep {
  title: string;
  image: {
    name: string;
    width: number;
    height: number;
  };
  component?: () => JSX.Element;
}
