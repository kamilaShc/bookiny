import { useSyncExternalStore } from "react";
import useYears from "../hooks/useYears";

interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
}

const FiltersPanel = ({ years, onSelectYear }: Props) => {
  return (
    <div className="filter-panel mb-3">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select year
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {years.map((year) => (
            <a
              className="dropdown-item"
              href="#"
              key={year}
              onClick={() => onSelectYear(year)}
            >
              {year}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
