import logo from "./logo.svg";
import ClearFiltersBtn from "./ui-elements/filtersClearBtn";
import "./App.css";

function App() {
  return (
    <div id="filters-wrap">
      <div id="sidebar-ctr">
        <div id="sidebar-header">
          <div>Filter by:</div>
          <ClearFiltersBtn disabled={true} />
        </div>
      </div>
      <div id="pms-results-ctr">
        <div id="pms-results-header">
          <select class="default-select"></select>
        </div>
        <div id="pms-results-grid"></div>
        <div id="pms-results-pagination"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
