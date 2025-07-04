type Props = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export function ProjectCard({ title, description, tech, repo, demo }: Props) {
  return (
    <article className="border rounded-xl p-6 shadow-sm dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm mb-2">
        {tech.map((t) => (
          <li key={t} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
            {t}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        {repo && (
          <a href={repo} className="text-indigo-600 hover:underline" target="_blank">
            Código
          </a>
        )}
        {demo && (
          <a href={demo} className="text-indigo-600 hover:underline" target="_blank">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
