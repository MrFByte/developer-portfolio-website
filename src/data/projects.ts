export type ProjectCategory = 'web' | 'mini-web' | 'live-product' | 'app' | 'iot' | 'other';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  category: ProjectCategory;
  /** ISO date (YYYY-MM-DD). Newest first; entries without one keep their gist order at the end. */
  date?: string;
  /** Pin a core project: lower numbers show first (1 = top). Leave unset for side projects. */
  priority?: number;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  web: 'Web',
  'mini-web': 'Mini Web',
  'live-product': 'Live Products',
  app: 'App',
  iot: 'IoT',
  other: 'Other',
};

/**
 * Projects are served from a GitHub Gist so they can be edited without a code change.
 * Fetched at build time, so the project cards are present in the static HTML for SEO.
 * Edit: https://gist.github.com/MrFByte/f8d4d8b982258cdc1097a0af05c3550d (projects.json)
 */
const PROJECTS_URL = 'https://gist.githubusercontent.com/MrFByte/f8d4d8b982258cdc1097a0af05c3550d/raw/projects.json';

const response = await fetch(PROJECTS_URL);
if (!response.ok) throw new Error(`Failed to load projects from gist: ${response.status}`);

// Pinned projects (with `priority`) come first, lowest number first.
// Everything else follows, newest `date` first. Entries with no date keep their gist order.
// Array.prototype.sort is stable, so ties keep the gist order.
const projects: Project[] = (await response.json() as Project[]).sort((a, b) => {
  const aPriority = a.priority ?? Infinity;
  const bPriority = b.priority ?? Infinity;
  if (aPriority !== bPriority) return aPriority < bPriority ? -1 : 1;

  const aDate = a.date ?? '';
  const bDate = b.date ?? '';
  if (aDate === bDate) return 0;
  if (!aDate) return 1;
  if (!bDate) return -1;
  return aDate < bDate ? 1 : -1;
});

export default projects;
