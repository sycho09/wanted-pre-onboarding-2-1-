import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import SelectStatus from './SelectStatus';
import { FirstFilter, SecondFilter } from '../utils/atoms';
import { FilterListValues } from '../utils/constants';

export default function FilterContainer() {
  const [firstFilter, setFirstFilter] = useRecoilState(FirstFilter);
  const [secondFilter, setSecondFilter] = useRecoilState(SecondFilter);
  const [secondList, setSecondList] = useState([]);

  useEffect(() => {
    const getSecondList = FilterListValues.filter((el) => el !== firstFilter);
    setSecondList(getSecondList);
  }, [firstFilter]);

  return (
    <>
      <SelectStatus
        SelectList={FilterListValues}
        selected={firstFilter}
        selectHandler={setFirstFilter}
      />

      <SelectStatus
        SelectList={secondList.length > 0 ? secondList : FilterListValues}
        selected={secondFilter}
        selectHandler={setSecondFilter}
        isDisabled={!firstFilter}
      />
    </>
  );
}
