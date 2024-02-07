import { VscLoading } from 'react-icons/vsc';
import './Spinner.scss';
import { SpinnerProps } from './types';

const Spinner = ({ height, width, color, externalClass }: SpinnerProps) => {
  const customStyles = {
    width,
    height,
    color
  }

  return (
    <>
      <VscLoading className={`spinner ${externalClass ?? ''}`}  style={customStyles} />
    </>
  )
}

export default Spinner;
