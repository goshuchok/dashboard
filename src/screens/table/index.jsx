import { Checkbox } from 'components/Checkbox';
import React, { useState } from 'react';
import { useTable } from 'react-table';
import SettingsIcon from 'image/settings_icon.svg';
import VectorDown from 'image/vector_down.svg';
import VectorUp from 'image/vector_up.svg';
import {
  DivModal,
  DivStyle,
  DivTable,
  ImagesStyle,
  ImgSetting,
  ImgVector,
  InputStyle,
  Label,
  LabelStyle,
  ModalStyle,
  TableStyle,
  TbodyStyle,
  TdStyle,
  TextLeft,
  TextRight,
  TheadStyle,
  ThStyle,
  TrStyle,
} from 'styles/Table.styled';

const Table = ({ data, columns }) => {
  const [show, toggleShow] = useState(true);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns,
    data,
  });
  return (
    <DivTable>
      <DivStyle>
        <TextLeft>General Sales / Time</TextLeft>
        <TextRight onClick={() => toggleShow(!show)}>
          <ImagesStyle>
            <ImgSetting src={SettingsIcon} alt="icon" />
            Table settings:{' '}
            {show ? (
              <ImgVector src={VectorDown} alt="vector" />
            ) : (
              <ImgVector src={VectorUp} alt="vector" />
            )}
          </ImagesStyle>
        </TextRight>
        {show || (
          <ModalStyle>
            <LabelStyle>
              <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
            </LabelStyle>

            {allColumns.map((column) => (
              <DivModal key={column.id}>
                <Label>
                  <InputStyle
                    type="checkbox"
                    {...column.getToggleHiddenProps()}
                  />{' '}
                  {column.Header}
                </Label>
              </DivModal>
            ))}
            <br />
          </ModalStyle>
        )}
      </DivStyle>
      <TableStyle {...getTableProps()}>
        <TheadStyle>
          {headerGroups.map((headerGroup) => (
            <TrStyle {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <ThStyle {...column.getHeaderProps()}>
                  {column.render('Header')}
                </ThStyle>
              ))}
            </TrStyle>
          ))}
        </TheadStyle>
        <TbodyStyle {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TrStyle
                {...row.getRowProps()}
                onClick={handleClick}
                style={{ backgroundColor: active ? '#FFFFFF0F' : '' }}
              >
                {row.cells.map((cell) => {
                  return (
                    <TdStyle {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TdStyle>
                  );
                })}
              </TrStyle>
            );
          })}
        </TbodyStyle>
      </TableStyle>
    </DivTable>
  );
};
export default Table;
