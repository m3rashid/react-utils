import { UIEvent, useState } from 'react';

interface VirtualizedListProps {
  items: string[];
  itemHeight: number;
  listHeight: number;
}

export function VirtualizedList(props: VirtualizedListProps) {
  const [indices, setIndices] = useState<[number, number]>([
    0,
    Math.floor(props.listHeight / props.itemHeight),
  ]);

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    const start = Math.floor(e.currentTarget.scrollTop / props.itemHeight);
    const end = Math.floor(
      (e.currentTarget.scrollTop + props.listHeight) / props.itemHeight
    );
    setIndices([start, end]);
  }

  return (
    <div
      onScroll={handleScroll}
      style={{ maxHeight: props.listHeight }}
      className='w-96 border border-gray-300 p-2 overflow-auto bg-amber-200'
    >
      <div
        className='relative w-full'
        style={{ height: props.items.length * props.itemHeight }}
      >
        {props.items.slice(indices[0], indices[1] + 1).map((item, index) => (
          <div
            key={item}
            style={{
              height: props.itemHeight,
              top: (indices[0] + index) * props.itemHeight,
            }}
            className='px-4 py-1.5 border border-gray-300 rounded-md bg-white absolute left-0 w-full'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const bigList = Array.from({ length: 100_000 }, (_, i) => `Item ${i + 1}`);
export function RenderVirtualizedList() {
  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>Virtualized List</h1>
      <VirtualizedList items={bigList} itemHeight={40} listHeight={300} />
    </div>
  );
}
