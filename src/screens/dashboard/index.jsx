import Card from 'components/Card';
import React from 'react';
import { useQuery } from 'react-query';
import PieCharts from 'screens/line/PieCharts';
import getFacts from 'useFetch';
import Users from 'image/user.svg';
import Setting from 'image/setting.svg';
import Protect from 'image/protect.svg';
import Resours from 'image/resours.svg';
import Game from 'image/game.svg';
import Table from 'screens/table';
import Chart from 'screens/chart';
import UserIcon from 'image/user_icon.svg';
import {
  DivUser,
  FlexDiv,
  FlexStyle,
  FlexTop,
  HStyle,
  ImgUser,
  PStyle,
} from 'styles/Dashboard.styled';

const Dashboard = () => {
  const { data, error, isLoading } = useQuery('dashboard', getFacts);
  const icons = [Users, Setting, Protect, Resours, Game];
  const columns = React.useMemo(
    () => [
      {
        Header: 'Card model',
        accessor: 'model.name',
      },
      {
        Header: 'Card name',
        accessor: 'card_name',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Limited',
        accessor: 'limited',
      },
      {
        Header: '№ Operations',
        accessor: 'operations',
      },
      {
        Header: 'Date of lost operations',
        accessor: 'date',
      },
      {
        Header: 'Rating',
        accessor: 'rating',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Options',
        accessor: 'options',
      },
    ],
    []
  );

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  let result = Object.entries(data.statistic).map(([k, v], index) => ({
    name: k,
    value: v,
    icon: icons[index],
  }));

  return (
    <FlexDiv>
      <FlexTop>
        <HStyle>Dashboard</HStyle>
        <DivUser>
          <ImgUser src={UserIcon} alt="icon" />
          <PStyle>Username</PStyle>
        </DivUser>
      </FlexTop>
      <FlexStyle>
        {result.map((item) => (
          <Card name={item.name} icon={item.icon} value={item.value} />
        ))}
      </FlexStyle>
      <FlexStyle>
        <Chart />
        <PieCharts data={result} />
      </FlexStyle>
      <Table data={data.general_sales_time} columns={columns} />
    </FlexDiv>
  );
};

export default Dashboard;
