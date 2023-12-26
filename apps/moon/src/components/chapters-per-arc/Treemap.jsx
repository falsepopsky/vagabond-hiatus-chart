import { ResponsiveTreeMap } from '@nivo/treemap';
import { themeNivo } from '../../themes/nivo';

const TreeMap = ({ dataCPA }) => (
  <ResponsiveTreeMap
    data={dataCPA}
    identity='name'
    value='chapter'
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    labelSkipSize={12}
    labelTextColor={'black'}
    parentLabelPadding={4}
    parentLabelTextColor={'black'}
    colors={{ scheme: 'paired' }}
    nodeOpacity={0.7}
    borderColor={{ from: 'color', modifiers: [['brighter', '1.8']] }}
    animate={false}
    theme={themeNivo}
  />
);

export default TreeMap;
