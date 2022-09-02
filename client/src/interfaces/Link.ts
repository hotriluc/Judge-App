import { TablerIcon } from '@tabler/icons';

export interface ILink {
  icon: TablerIcon;
  label: string;
  path: string;
  links?: Array<Omit<ILink, 'icon'>>;
}
