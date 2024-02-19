import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './Styleguide.scss'
import Button from '../../components/shared/Button';
import { FaArrowLeft } from 'react-icons/fa6';
import Table from '../../components/shared/Table';
import { SelectOption } from '../../components/shared/Select/types';
import Spinner from '../../components/shared/Spinner';
import Widget from '../../components/shared/Widget';
import PieChart from '../../components/shared/Charts/PieChart';
import Modal from '../../components/shared/Modal';
import Select from '../../components/shared/Select';
import DateField from '../../components/shared/DateField';

const tableData = [
  {
    name: 'Test1',
    status: 'ACTIVE',
    date: new Date ().toLocaleDateString (),
    value: 2222.22,
    button: <Button name="Delete" btnType="primary"/>
  },
  {
    name: 'Test2',
    status: 'ACTIVE',
    date: new Date ().toLocaleDateString (),
    value: 2222.22,
    button: <Button name="Delete" btnType="primary"/>
  },
  {
    name: 'Test3',
    status: 'ACTIVE',
    date: new Date ().toLocaleDateString (),
    value: 2222.22,
    button: <Button name="Delete" btnType="primary"/>
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
  }
];

const Styleguide = () => {
  const [testState, setTestState] = useState (true);
  const [currentOption, setCurrentOption] = useState<SelectOption | null> (null);
  const [isModalOpen, setIsModalOpen] = useState (false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleOpenModal = () => setIsModalOpen (true);
  const handleCloseModal = () => setIsModalOpen (false);

  const handleSelectChange = (option: SelectOption) => setCurrentOption(option);

  const handleClick = () => setTestState (!testState);
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
            btnType="primary"
            onClick={handleClick}
            icon={<FaArrowLeft/>}
          />
        </div>

        <br/>

        <div>
          <Button
            name="Secondary"
            btnType="secondary"
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

      <div>
        <DateField placeholder='Select date' selectedDate={startDate} onChange={setStartDate} />
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
            color: '#2D6A4F',
            value: 112000
          },
          {
            name: 'Gold',
            color: '#52B788',
            value: 2344
          },
          {
            name: 'Property',
            color: '#1B4332',
            value: 77777
          },
        ]}
                  radiusProps={{
                    innerRadius: 120,
                    outerRadius: 170
                  }}
        />
      </div>

      <br/>

      <div>
        <Button name="Open modal" btnType="primary" onClick={handleOpenModal}/>
        {isModalOpen &&
          <Modal
            onClose={handleCloseModal}
            title="Test modal!"
            children={<p>This is my modal</p>}
          />
        }
      </div>

      <br/>

      <div>
      </div>
    </>
  )
}

export default Styleguide;
