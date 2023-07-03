import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';

function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  // const userEmail=useSelector(selectUserEmail)
  const error = useSelector(getError);
  const items = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />

      {/* <p><span>{userEmail}'s</span> contacts</p> */}

      <Filter />
      {loading && <p>LOADIND...</p>}
      {error && <p>No feedback from server, try again, please</p>}
      {items.length > 0 && !error && <ContactList />}
    </div>
  );
}
export default Contacts;
