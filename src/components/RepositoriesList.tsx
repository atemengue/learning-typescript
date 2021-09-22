/** @format */

import { useState } from 'react';
import { useActions } from '../hooks/useActions';

/** @format */

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

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
