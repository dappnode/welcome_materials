export interface ActionStep {
  title: string;
  image: string;
  component?: () => JSX.Element;
}
