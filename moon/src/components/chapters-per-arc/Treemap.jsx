import { ResponsiveTreeMap } from '@nivo/treemap';

const TreeMap = ({ dataCPA, nivoTheme }) => {
  return (
    <ResponsiveTreeMap
      data={dataCPA}
      identity="name"
      value="chapter"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={'black'}
      parentLabelPadding={4}
      parentLabelTextColor={'black'}
      colors={{ scheme: 'paired' }}
      nodeOpacity={0.7}
      borderColor={{ from: 'color', modifiers: [['brighter', '1.8']] }}
      animate={false}
      theme={nivoTheme}
    />
  );
};

export default TreeMap;
