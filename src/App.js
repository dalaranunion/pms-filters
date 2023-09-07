import logo from "./logo.svg";
import ClearFiltersBtn from "./ui-elements/filtersClearBtn";
import "./App.css";
import productsJson from "./products.json";

// // Pull JSON file and process it
// let jsonText = document.getElementById("pms-json").innerHTML;
// // Fix formatting before processing
// jsonText = jsonText.replaceAll(/},\s*]}/g, "}]}").replace("]},]}", "]}]}");
//const products = JSON.parse(jsonText);

const products = JSON.parse(productsJson);

function App() {
  return (
    <div id="filters-wrap" className="contentwidth guttercontentwidthhalf">
      <div id="sidebar-ctr" className="guttercontentwidthhalf">
        <div id="sidebar-header">
          <div>Filter by:</div>
          <ClearFiltersBtn disabled={true} />
        </div>
      </div>
      <div id="pms-results-ctr" className="guttercontentwidthhalf">
        <div id="pms-results-header">
          <select className="default-select"></select>
        </div>
        <div id="pms-results-grid"></div>
        <div id="pms-results-pagination"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
