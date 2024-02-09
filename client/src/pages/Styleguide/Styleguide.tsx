import React, { useState } from 'react';
import './Styleguide.scss'
import Button from '../../components/shared/Button';
import { FaArrowLeft } from 'react-icons/fa6';
import Table from '../../components/shared/Table';
import Select from '../../components/shared/Select';
import { SelectOption } from '../../components/shared/Select/types';
import Spinner from '../../components/shared/Spinner';
import Widget from '../../components/shared/Widget';
import PieChart from '../../components/shared/Charts/PieChart';

const tableData = [
  {
    name: 'Test1',
    status: 'ACTIVE',
    date: new Date().toLocaleDateString(),
    value: 2222.22,
    button: <Button name='Delete' type='primary'/>
  },
  {
    name: 'Test2',
    status: 'ACTIVE',
    date: new Date().toLocaleDateString(),
    value: 2222.22,
    button: <Button name='Delete' type='primary'/>
  },
  {
    name: 'Test3',
    status: 'ACTIVE',
    date: new Date().toLocaleDateString(),
    value: 2222.22,
    button: <Button name='Delete' type='primary'/>
  }
];

const options = [
  {
    label: 'Ivan',
    value: 'vankata'
  },
  {
    label: 'Rayna',
    value: 'rayna'
  },
  {
    label: 'Gosho',
    value: 'gosho'
  },
  {
    label: 'Ivan',
    value: 'vankata'
  },
  {
    label: 'Rayna',
    value: 'rayna'
  }
]

const Styleguide = () => {
  const [ testState, setTestState ] = useState(true);
  const [ currentOption, setCurrentOption ] = useState<string | null>(null);

  console.log(currentOption);

  const handleSelectChange = (option: SelectOption) => setCurrentOption(option.label)

  const handleClick = () => setTestState(!testState);
  return (
    <>
      <div className="test">Test sass</div>

      <div>
        <h1 className="test-h1">Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
        <p>Paragraph</p>
      </div>

      <br/>

      <div>
        <div>
          <Button
            name="Primary"
            type="primary"
            onClick={handleClick}
            icon={<FaArrowLeft/>}
          />
        </div>

        <br/>

        <div>
          <Button
            name="Secondary"
            type="secondary"
          />
        </div>
      </div>

      <br/>

      <div>
        <Table
          columns={['Name', 'Status', 'Date', 'Value', '']}
          data={tableData}
        />
      </div>

      <br/>

      <div>
        <Select
          onChange={handleSelectChange}
          selectedValue={currentOption}
          placeholder="Select..."
          options={options}
        />
      </div>

      <br/>

      <div>
        <Spinner height={50} width={50}/>
      </div>

      <br/>

      <div>
        <Widget title="Test widget">
          <div>Lets test</div>
        </Widget>
      </div>

      <br/>
      <h2>Pie chart</h2>
      <div>
        <PieChart height={400} data={[
          {
            name: 'Crypto',
            color: '#B7E4C7',
            value: 11200
          },
          {
            name: 'Stocks',
            color: '#40916C',
            value: 11200
          },
          {
            name: 'Land',
            color: '#95D5B2',
            value: 11200
          },
          {
            name: 'Casha',
            color: '#2D6A4F',
            value: 55
          },
          {
            name: 'Gold',
            color: '#52B788',
            value: 5435
          },{
            name: 'Landa',
            color: '#95D5B2',
            value: 66
          },
          {
            name: 'Cash',
            color: '#2D6A4F',
            value: 2222
          },
          {
            name: 'Gold',
            color: '#52B788',
            value: 11200
          }
        ]}
        radiusProps={{
        innerRadius: 120,
        outerRadius: 170
        }}
        />
      </div>
    </>
  )
}

export default Styleguide;
