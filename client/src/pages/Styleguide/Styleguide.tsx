import React, { useState } from 'react';
import './Styleguide.scss'
import Button from '../../components/shared/Button';
import { FaArrowLeft } from 'react-icons/fa6';
import Table from '../../components/shared/Table';
import Select from '../../components/shared/Select';

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

const Styleguide = () => {
  const [ testState, setTestState ] = useState(true);
  const [ currentOption, setCurrentOption ] = useState<string | number | null>(null);

  console.log(currentOption);

  const handleSelectChange = (value: string | number) => setCurrentOption(value)

  const handleClick = () => setTestState(!testState);
  return (
    <>
      <div className='test'>Test sass</div>

      <div>
        <h1 className='test-h1'>Heading 1</h1>
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
        <Select onChange={handleSelectChange} selectedValue={currentOption} />
      </div>
    </>
  )
}

export default Styleguide;
