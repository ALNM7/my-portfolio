import type { TableSpec } from '../../data/types';

export function DataTable({ spec }: { spec: TableSpec }) {
  return (
    <figure className="card overflow-hidden">
      {spec.caption && (
        <figcaption className="border-b border-line px-5 py-3.5 text-[0.8125rem] font-medium text-fg">
          {spec.caption}
        </figcaption>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] border-collapse text-left">
          <thead>
            <tr>
              {spec.head.map((cell) => (
                <th
                  key={cell}
                  scope="col"
                  className="label-mono border-b border-line px-5 py-2.5 whitespace-nowrap"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row) => (
              <tr key={row.join('|')} className="border-b border-line last:border-0">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={
                      i === 0
                        ? 'px-5 py-3 align-top text-[0.8125rem] font-medium text-fg'
                        : 'tabular px-5 py-3 align-top text-[0.8125rem] text-fg-dim'
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {spec.footnote && (
        <p className="border-t border-line px-5 py-3.5 text-[0.75rem] leading-relaxed text-fg-faint">
          {spec.footnote}
        </p>
      )}
    </figure>
  );
}
