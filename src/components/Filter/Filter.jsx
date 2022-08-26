import { Label, Input } from './Filter.styled';
import { changeFilter } from '../../redux/store';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  );
};
