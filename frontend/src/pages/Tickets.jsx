import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import { Spinner } from '../components/Spinner';
import { BackButton } from '../components/BackButton';

export const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
};
