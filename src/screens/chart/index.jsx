import Users from 'components/Users';
import React from 'react';
import { useQuery } from 'react-query';
import LineChartAxisInterval from 'screens/line/AreaChart';
import getFacts from 'useFetch';
import styled from 'styled-components';
import Stats from 'components/Stats';

const FlewDiv = styled.div`
  height: 344px;
  width: 1312px;
  border-radius: 4px;
  background: #242731;
  margin: 2px;
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Chart = () => {
  const { data, error, isLoading } = useQuery('dashboard', getFacts);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <FlewDiv>
      <Stats value="Graph" title="Data type" />
      <WrapperDiv>
        <LineChartAxisInterval data={data.chartData} />
        <Users data={data} />
      </WrapperDiv>
    </FlewDiv>
  );
};

export default Chart;
