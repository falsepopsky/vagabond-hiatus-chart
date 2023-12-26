interface List {
  bgColor: string;
  name: string;
}

interface LegendObject {
  index: number;
  name: string;
  color: string;
}

const colorLegends = [
  'after:bg-[#FD514E]',
  'after:bg-[#F4F7F3]',
  'after:bg-[#70DDC6]',
  'after:bg-[#FFF875]',
  'after:bg-[#06BA63]',
  'after:bg-[#3777FF]',
  'after:bg-[#7D80DA]',
  'after:bg-[#95E784]',
  'after:bg-[#FFE156]',
  'after:bg-[#C94BFF]',
  'after:bg-[#4059AD]',
  'after:bg-[#03C887]',
  'after:bg-[#2426A5]',
];

const nameLegends = [
  'Hiatus',
  'Double weekly issue',
  'Published',
  'Takezō',
  'First Yoshioka',
  'Hōzōin',
  'Yagyū',
  'Baiken',
  'Kojirō',
  'Second Yoshioka',
  "Ichijōji's aftermath",
  'Wandering',
  'Farming',
  'Hosokawa',
];

const arcLegends = nameLegends.filter((name) => {
  return name !== 'Published';
});

export function List({ bgColor, name }: List) {
  return (
    <li
      className={`after:content[""] relative pl-4 after:absolute after:left-1 after:top-2 after:h-2 after:w-2 after:rounded-md ${bgColor}`}>
      {name}
    </li>
  );
}

export function ListLegends({ isHiatus }: { isHiatus: boolean }) {
  const createLegendObject = (isHiatus: boolean): LegendObject[] => {
    const legends: LegendObject[] = [];

    if (isHiatus) {
      for (let i = 0; i < 3; i++) {
        legends.push({ index: i, name: nameLegends[i], color: colorLegends[i] });
      }
    } else {
      for (let i = 0; i < colorLegends.length; i++) {
        legends.push({ index: i, name: arcLegends[i], color: colorLegends[i] });
      }
    }

    return legends;
  };

  const Legends = createLegendObject(isHiatus);

  const LegendsLists = Legends.map(({ index, name, color }) => <List key={index} name={name} bgColor={color} />);

  return <ol className='flex flex-wrap justify-center gap-3'>{LegendsLists}</ol>;
}
