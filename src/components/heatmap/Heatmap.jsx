import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../../themes/nivo';

let toolTipHeatmap = ({ color, xKey, yKey }) => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <div
      style={{
        height: '20px',
        width: '20px',
        marginRight: '4px',
        backgroundColor: color,
        borderRadius: '50%',
      }}></div>
    <strong
      style={{
        color: 'black',
      }}>
      Year {yKey} / #{xKey}
    </strong>
  </div>
);

const Heatmap = ({ database, colors, configHeatmap }) => {
  return (
    <ResponsiveHeatMapCanvas
      data={database}
      keys={configHeatmap.keysHeatmap}
      indexBy="year"
      margin={configHeatmap.margin}
      theme={themeNivo}
      pixelRatio={1}
      tooltip={toolTipHeatmap}
      sizeVariation={0.01}
      padding={1}
      colors={colors}
      axisTop={null}
      axisRight={null}
      axisBottom={configHeatmap.axisBottom}
      axisLeft={configHeatmap.axisLeft}
      enableGridY={true}
      cellOpacity={1}
      cellBorderColor="#000"
      enableLabels={false}
      animate={false}
      cellHoverOthersOpacity={0.5}
    />
  );
};

export default Heatmap;
