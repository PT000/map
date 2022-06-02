import { useParams, useNavigate } from 'react-router-dom';
import { getState} from '../statesData'

export default function State() {
    let navigate =useNavigate();
    let params = useParams();
    let state =getState(parseInt(params.stateId,10));

    

    return (
        <main style={{ padding: '1rem' }}>
          <h2>Total Due: {state.amount}</h2>
          <p>
            {state.name}: {state.number}
          </p>
          <p>Due Date: {state.due}</p>
          <p>
            <button
              onClick={() => {
               // deleteInvoice(state.number);
                navigate('/states');
              }}
            >
              Delete
            </button>
          </p>
        </main>
      );
}