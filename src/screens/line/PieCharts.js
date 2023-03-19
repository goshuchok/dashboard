import Stats from 'components/Stats';
import { PieChart, Pie, Cell, Label, Legend } from 'recharts';
import {
  DivStyle,
  DivStyled,
  DivStyledLeft,
  LiStyle,
  UlStyle,
} from 'styles/Pie.styled';

const COLORS = ['#18A0FB', '#3CDC86', '#FFBB28', '#FF8042', '#ED2D95'];

const CustomLabel = ({ viewBox, labelText, labelTitle, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy - 30}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="12"
        fill="#A7A9AD"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="30"
        fill="#FFFFFF"
        fontWeight="600"
      >
        {labelTitle}
      </text>
      <text
        x={cx}
        y={cy + 30}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#FFFFFF"
        fontSize="12"
      >
        {value}
      </text>
    </g>
  );
};
const Bullet = ({ backgroundColor, size }) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};
const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <UlStyle className="LegendList">
      {payload.map((entry, index) => (
        <LiStyle key={`item-${index}`}>
          <DivStyled className="BulletLabel">
            <Bullet backgroundColor={entry.payload.fill} size="5px" />
            <DivStyled className="BulletLabelText">{entry.value}</DivStyled>
          </DivStyled>
          <DivStyledLeft>{entry.payload.value}</DivStyledLeft>
        </LiStyle>
      ))}
    </UlStyle>
  );
};
export default function PieCharts(data) {
  return (
    <DivStyle>
      <Stats value="Naperville" title="Location" />
      <PieChart width={400} height={300}>
        <Pie
          data={data.data}
          cx={120}
          cy={100}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            content={
              <CustomLabel
                labelText="Excessive"
                labelTitle="85%"
                value="+40 418 in last 30 days"
              />
            }
            position="center"
          />
        </Pie>
        <Legend content={<CustomizedLegend />} />
      </PieChart>
    </DivStyle>
  );
}
