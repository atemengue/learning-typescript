/** @format */

import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={(e) => setTerm(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default RepositoriesList;
