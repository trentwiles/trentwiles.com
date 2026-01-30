import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderData from "../useHeaderData";

interface StationData {
  station: string;
  spring2018: number;
  fall2024: number;
  isNew?: boolean;
}

interface ChangeResult {
  text: string;
  className: string;
  value: number;
}

interface StationDataWithChange extends StationData {
  change: ChangeResult;
}

type SortKey = "station" | "spring2018" | "fall2024" | "change";
type SortDirection = "asc" | "desc";

interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

const stationData: StationData[] = [
  { station: "South Station", spring2018: 28416, fall2024: 22467 },
  { station: "North Station", spring2018: 18427, fall2024: 11186 },
  { station: "Back Bay", spring2018: 8103, fall2024: 6786 },
  { station: "Ruggles", spring2018: 2640, fall2024: 3166 },
  { station: "Salem", spring2018: 2326, fall2024: 1739 },
  { station: "Providence", spring2018: 2091, fall2024: 1462 },
  { station: "Lansdowne", spring2018: 1195, fall2024: 1348 },
  { station: "Boston Landing", spring2018: 600, fall2024: 1266 },
  { station: "Attleboro", spring2018: 1547, fall2024: 1220 },
  { station: "Mansfield", spring2018: 1966, fall2024: 1143 },
  { station: "Worcester", spring2018: 1298, fall2024: 1139 },
  { station: "Canton Junction", spring2018: 1115, fall2024: 1105 },
  { station: "JFK/UMass", spring2018: 370, fall2024: 1095 },
  { station: "Route 128", spring2018: 1721, fall2024: 1016 },
  { station: "Beverly", spring2018: 1382, fall2024: 1011 },
  { station: "Lowell", spring2018: 1522, fall2024: 977 },
  { station: "Framingham", spring2018: 1130, fall2024: 904 },
  { station: "Readville", spring2018: 426, fall2024: 826 },
  { station: "Quincy Center", spring2018: 773, fall2024: 801 },
  { station: "Stoughton", spring2018: 917, fall2024: 766 },
  { station: "Sharon", spring2018: 1308, fall2024: 756 },
  { station: "Swampscott", spring2018: 891, fall2024: 737 },
  { station: "Anderson/Woburn", spring2018: 1296, fall2024: 677 },
  { station: "Porter Square", spring2018: 1468, fall2024: 676 },
  { station: "Pawtucket/Central Falls", spring2018: 0, fall2024: 658, isNew: true },
  { station: "Middleborough/Lakeville", spring2018: 867, fall2024: 638 },
  { station: "Kingston", spring2018: 657, fall2024: 634 },
  { station: "Norwood Central", spring2018: 1041, fall2024: 624 },
  { station: "North Billerica", spring2018: 922, fall2024: 604 },
  { station: "Brockton", spring2018: 576, fall2024: 560 },
  { station: "Braintree", spring2018: 204, fall2024: 538 },
  { station: "West Natick", spring2018: 944, fall2024: 533 },
  { station: "Bridgewater", spring2018: 600, fall2024: 529 },
  { station: "Fairmount", spring2018: 543, fall2024: 528 },
  { station: "Forest Hills", spring2018: 142, fall2024: 521 },
  { station: "Roslindale Village", spring2018: 479, fall2024: 517 },
  { station: "South Weymouth", spring2018: 581, fall2024: 515 },
  { station: "Forge Park/495", spring2018: 683, fall2024: 485 },
  { station: "Lynn", spring2018: 549, fall2024: 470 },
  { station: "Wellesley Square", spring2018: 626, fall2024: 470 },
  { station: "Montello", spring2018: 416, fall2024: 467 },
  { station: "South Acton", spring2018: 991, fall2024: 463 },
  { station: "Waltham", spring2018: 521, fall2024: 460 },
  { station: "Norwood Depot", spring2018: 285, fall2024: 451 },
  { station: "Dedham Corp Center", spring2018: 763, fall2024: 437 },
  { station: "Hyde Park", spring2018: 526, fall2024: 435 },
  { station: "Norfolk", spring2018: 875, fall2024: 430 },
  { station: "Morton Street", spring2018: 264, fall2024: 427 },
  { station: "Talbot Avenue", spring2018: 213, fall2024: 427 },
  { station: "Greenbush", spring2018: 441, fall2024: 425 },
  { station: "Southborough", spring2018: 525, fall2024: 425 },
  { station: "Four Corners/Geneva", spring2018: 245, fall2024: 424 },
  { station: "Newtonville", spring2018: 476, fall2024: 421 },
  { station: "Natick Center", spring2018: 736, fall2024: 419 },
  { station: "Blue Hill Avenue", spring2018: 0, fall2024: 419, isNew: true },
  { station: "West Medford", spring2018: 628, fall2024: 415 },
  { station: "Westborough", spring2018: 754, fall2024: 409 },
  { station: "Holbrook/Randolph", spring2018: 473, fall2024: 406 },
  { station: "Hersey", spring2018: 525, fall2024: 405 },
  { station: "Franklin", spring2018: 633, fall2024: 404 },
  { station: "Ashland", spring2018: 931, fall2024: 393 },
  { station: "Brandeis/Roberts", spring2018: 369, fall2024: 386 },
  { station: "Wilmington", spring2018: 584, fall2024: 377 },
  { station: "Abington", spring2018: 645, fall2024: 376 },
  { station: "Grafton", spring2018: 528, fall2024: 367 },
  { station: "Chelsea", spring2018: 352, fall2024: 365 },
  { station: "Uphams Corner", spring2018: 151, fall2024: 364 },
  { station: "Weymouth Landing/East Braintree", spring2018: 507, fall2024: 364 },
  { station: "Campello", spring2018: 334, fall2024: 357 },
  { station: "West Roxbury", spring2018: 444, fall2024: 356 },
  { station: "Newburyport", spring2018: 463, fall2024: 349 },
  { station: "Wedgemere", spring2018: 310, fall2024: 346 },
  { station: "Highland", spring2018: 394, fall2024: 338 },
  { station: "Canton Center", spring2018: 470, fall2024: 334 },
  { station: "Walpole", spring2018: 744, fall2024: 326 },
  { station: "East Weymouth", spring2018: 587, fall2024: 320 },
  { station: "Littleton/Rte 495", spring2018: 490, fall2024: 319 },
  { station: "Bellevue", spring2018: 340, fall2024: 319 },
  { station: "Wellesley Hills", spring2018: 336, fall2024: 301 },
  { station: "Lawrence", spring2018: 482, fall2024: 298 },
  { station: "Endicott", spring2018: 256, fall2024: 297 },
  { station: "Bradford", spring2018: 170, fall2024: 294 },
  { station: "Concord", spring2018: 367, fall2024: 287 },
  { station: "Needham Junction", spring2018: 366, fall2024: 284 },
  { station: "Gloucester", spring2018: 296, fall2024: 275 },
  { station: "West Concord", spring2018: 359, fall2024: 263 },
  { station: "Fitchburg", spring2018: 287, fall2024: 250 },
  { station: "Andover", spring2018: 409, fall2024: 247 },
  { station: "Wellesley Farms", spring2018: 298, fall2024: 247 },
  { station: "Needham Heights", spring2018: 329, fall2024: 242 },
  { station: "Whitman", spring2018: 362, fall2024: 239 },
  { station: "Windsor Gardens", spring2018: 257, fall2024: 228 },
  { station: "West Newton", spring2018: 256, fall2024: 227 },
  { station: "Reading", spring2018: 855, fall2024: 209 },
  { station: "Ipswich", spring2018: 407, fall2024: 205 },
  { station: "Needham Center", spring2018: 224, fall2024: 199 },
  { station: "Newmarket", spring2018: 75, fall2024: 191 },
  { station: "Ayer", spring2018: 276, fall2024: 190 },
  { station: "Montserrat", spring2018: 254, fall2024: 185 },
  { station: "Wakefield", spring2018: 483, fall2024: 183 },
  { station: "Hanson", spring2018: 380, fall2024: 182 },
  { station: "Waverley", spring2018: 115, fall2024: 179 },
  { station: "Auburndale", spring2018: 248, fall2024: 171 },
  { station: "North Beverly", spring2018: 202, fall2024: 170 },
  { station: "Ballardvale", spring2018: 200, fall2024: 167 },
  { station: "West Hingham", spring2018: 325, fall2024: 167 },
  { station: "Islington", spring2018: 128, fall2024: 166 },
  { station: "Belmont", spring2018: 159, fall2024: 163 },
  { station: "Hamilton/Wenham", spring2018: 262, fall2024: 162 },
  { station: "Wickford Junction", spring2018: 235, fall2024: 157 },
  { station: "North Scituate", spring2018: 336, fall2024: 153 },
  { station: "Foxboro", spring2018: 0, fall2024: 150, isNew: true },
  { station: "Lincoln", spring2018: 288, fall2024: 149 },
  { station: "North Leominster", spring2018: 239, fall2024: 146 },
  { station: "Halifax", spring2018: 276, fall2024: 146 },
  { station: "Rockport", spring2018: 165, fall2024: 140 },
  { station: "Cohasset", spring2018: 351, fall2024: 133 },
  { station: "Kendal Green", spring2018: 114, fall2024: 130 },
  { station: "TF Green Airport", spring2018: 227, fall2024: 124 },
  { station: "Manchester", spring2018: 198, fall2024: 121 },
  { station: "Nantasket Junction", spring2018: 218, fall2024: 120 },
  { station: "Winchester Center", spring2018: 456, fall2024: 115 },
  { station: "Shirley", spring2018: 155, fall2024: 103 },
  { station: "Malden Center", spring2018: 147, fall2024: 101 },
  { station: "Melrose Highlands", spring2018: 306, fall2024: 86 },
  { station: "Wachusett", spring2018: 132, fall2024: 83 },
  { station: "Beverly Farms", spring2018: 107, fall2024: 83 },
  { station: "Greenwood", spring2018: 92, fall2024: 77 },
  { station: "Melrose/Cedar Park", spring2018: 99, fall2024: 63 },
  { station: "Rowley", spring2018: 113, fall2024: 62 },
  { station: "Wyoming Hill", spring2018: 138, fall2024: 51 },
  { station: "West Gloucester", spring2018: 37, fall2024: 38 },
  { station: "Oak Grove", spring2018: 0, fall2024: 38, isNew: true },
  { station: "River Works", spring2018: 27, fall2024: 36 },
  { station: "North Wilmington", spring2018: 58, fall2024: 27 },
  { station: "South Attleboro", spring2018: 1144, fall2024: 19 },
  { station: "Hastings*", spring2018: 18, fall2024: 0 },
  { station: "Silver Hill*", spring2018: 11, fall2024: 0 },
  { station: "Plimptonville*", spring2018: 12, fall2024: 0 },
  { station: "Haverhill**", spring2018: 290, fall2024: 0 },
  { station: "Plymouth*", spring2018: 21, fall2024: 0 },
  { station: "Mishawum*", spring2018: 32, fall2024: 0 },
  { station: "Prides Crossing*", spring2018: 15, fall2024: 0 },
];

function calculateChange(spring2018: number, fall2024: number, isNew?: boolean): ChangeResult {
  if (isNew) return { text: "NEW", className: "change new", value: Infinity };
  if (spring2018 === 0) return { text: "N/A", className: "change", value: 0 };
  const pctChange = Math.round(((fall2024 - spring2018) / spring2018) * 100);
  const sign = pctChange >= 0 ? "+" : "";
  const className = pctChange >= 0 ? "change positive" : "change negative";
  return { text: `${sign}${pctChange}%`, className, value: pctChange };
}

function formatNumber(num: number): string {
  return num.toLocaleString();
}

export default function CommuterRidership() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "fall2024", direction: "desc" });

  const sortedData = useMemo<StationDataWithChange[]>(() => {
    const sorted = stationData.map((row): StationDataWithChange => ({
      ...row,
      change: calculateChange(row.spring2018, row.fall2024, row.isNew)
    }));

    sorted.sort((a, b) => {
      let aVal: string | number;
      let bVal: string | number;

      switch (sortConfig.key) {
        case "station":
          aVal = a.station.toLowerCase();
          bVal = b.station.toLowerCase();
          break;
        case "spring2018":
          aVal = a.spring2018;
          bVal = b.spring2018;
          break;
        case "fall2024":
          aVal = a.fall2024;
          bVal = b.fall2024;
          break;
        case "change":
          aVal = a.change.value;
          bVal = b.change.value;
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [sortConfig]);

  const handleSort = (key: SortKey): void => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "desc" ? "asc" : "desc"
    }));
  };

  const getSortIndicator = (key: SortKey): string => {
    if (sortConfig.key !== key) return " ↕";
    return sortConfig.direction === "asc" ? " ↑" : " ↓";
  };

  const headerStyle: React.CSSProperties = {
    cursor: "pointer",
    userSelect: "none",
  };

  const pseudoCellStyle: React.CSSProperties = {
    color: "rgb(34, 44, 230)",
    backgroundColor: "rgba(0, 0, 0, 0)",
    fontWeight: 700
  };

  return (
    <>
      <Header {...useHeaderData()} />
      <main className="container py-6">
        <h1>MBTA Commuter Rail Ridership</h1>
        <p className="subtitle">Average weekday boardings by station, Spring 2018 vs. Fall 2024</p>

        <table className="table table-stack-on-mobile my-5">
          <thead>
            <tr>
              <th className="col-a" style={headerStyle} onClick={() => handleSort("station")}>
                Station{getSortIndicator("station")}
              </th>
              <th className="col-b" style={headerStyle} onClick={() => handleSort("spring2018")}>
                Spring 2018{getSortIndicator("spring2018")}
              </th>
              <th className="col-c" style={headerStyle} onClick={() => handleSort("fall2024")}>
                Fall 2024{getSortIndicator("fall2024")}
              </th>
              <th className="col-d" style={headerStyle} onClick={() => handleSort("change")}>
                Change{getSortIndicator("change")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <tr key={row.station}>
                <td className="psuedo-cell" aria-hidden="true" style={pseudoCellStyle}>Station</td>
                <td className="col-a">{row.station}</td>
                <td className="psuedo-cell" aria-hidden="true" style={pseudoCellStyle}>Spring 2018</td>
                <td className="col-b">{formatNumber(row.spring2018)}</td>
                <td className="psuedo-cell" aria-hidden="true" style={pseudoCellStyle}>Fall 2024</td>
                <td className="col-c">{formatNumber(row.fall2024)}</td>
                <td className="psuedo-cell" aria-hidden="true" style={pseudoCellStyle}>Change</td>
                <td className={`col-d ${row.change.className}`}>{row.change.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <small>Data sourced from the <a href="https://mbta-massdot.opendata.arcgis.com/datasets/MassDOT::mbta-commuter-rail-ridership-by-trip-season-route-line-and-stop-/explore" target="_blank" rel="noopener noreferrer">MBTA</a></small>
        <br/>
        <small><i>* Station closed between 2018 and 2024</i></small>
        <br />
        <small><i>** Haverhill was closed for bridge work from July 15, 2024, to June 30, 2025</i></small>
      </main>
      <Footer />
    </>
  );
}