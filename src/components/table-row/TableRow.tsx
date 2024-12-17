import { FaArrowLeft } from "react-icons/fa6";

type TableRowProps = {
  rowData: {
    year: number;
    project: string;
    name: string;
    stack: string[];
    link: string | null;
    linkLabel: string | null;
  };
};

export default function TableRow({ rowData }: TableRowProps) {
  const { year, project, name, stack, link, linkLabel } = rowData;
  return (
    <tr className="border-b border-cyan-600/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="text-gray-500">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug">
        <div className="block sm:hidden">
          <a
            className="inline-flex items-center text-gray-800 text-sm sm:hidden"
            target="_blank"
            rel="noopener noreferrer"
            href={link ?? ""}
          >
            {name} {project}
            {link && (
              <FaArrowLeft className="fill-gray-800 text-xs rotate-[135deg] translate-x-[3px]" />
            )}
          </a>
        </div>
        <div className="hidden sm:block text-gray-800 text-md">{project}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell text-sm text-gray-500">
        {name}
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex gap-1 flex-wrap max-w-[375px]">
          {stack.map((item, idx) => (
            <li key={idx}>
              <span className="px-3 py-1 rounded-full bg-cyan-600 bg-opacity-20 text-xs">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 pr-4 align-top sm:table-cell">
        {link && linkLabel && (
          <a
            className="group inline-flex items-center gap-1 text-sm text-gray-500 hover:text-cyan-600 hover:text-opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            {linkLabel}
            <FaArrowLeft className="fill-gray-500 text-xs rotate-[135deg] -translate-x-[2px] translate-y-[2px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:fill-cyan-600 group-hover:opacity-50 transition-all" />
          </a>
        )}
      </td>
    </tr>
  );
}
