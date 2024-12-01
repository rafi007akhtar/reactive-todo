import "./App.scss";
import NewTask from "./components/NewTask";

function App() {
  return (
    <div className="app grid gap-4">
      <aside className="side-bar col-start-1 col-end-3">
        This will hold the categories
      </aside>

      <NewTask />

      {/* <main className="main-content mt-8">
        This will hold the task list <br />
      </main> */}
    </div>
  );
}

export default App;
