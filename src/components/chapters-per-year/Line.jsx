import { ResponsiveLine } from '@nivo/line';

const Line = ({ config, dataCPY, themeNivo }) => {
  return (
    <ResponsiveLine
      data={dataCPY}
      theme={themeNivo}
      colors={config.colors}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={config.yScale}
      axisTop={null}
      axisRight={null}
      axisBottom={config.axisBottom}
      axisLeft={config.axisLeft}
      enableGridX={false}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={1}
      pointBorderColor="#ffffff"
      enableArea={true}
      areaOpacity={0.75}
      enableSlices="x"
      enableCrosshair={false}
      legends={config.legends}
      defs={config.defs}
      fill={config.fill}
    />
  );
};

export default Line;
