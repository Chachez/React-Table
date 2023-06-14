import "./App.css";
import TableComponent from "./components/useTable";

const columns = [
  { id: "date", label: "Date", minWidth: 170 },
  { id: "account", label: "Account", minWidth: 100 },
  { id: "debit", label: "Debit", minWidth: 100 },
  { id: "credit", label: "Credit", minWidth: 100 },
  { id: "credit", label: "Description", minWidth: 100 },
  { id: "Amount", label: "Amount", minWidth: 100 },
];

// const baseURL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  return (
    <div className="App">
      <TableComponent columns={columns} />
    </div>
  );
};

export default App;
