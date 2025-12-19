export interface NavigationItem {
  name: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  opened?: boolean;
}
