import React from "react";

class TransportationOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAirport: null,
      selectedHourly: null,
    };
  }

  handleAirportClick = (option) => {
    this.setState({ selectedAirport: option });
  };

  handleHourlyClick = (option) => {
    this.setState({ selectedHourly: option });
  };

  render() {
    const { selectedAirport, selectedHourly } = this.state;

    return (
      <div className="mt-4">
        <div className="mt-4">
          <h5 className="fs-14 mb-3">Airport</h5>

          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-6">
              <div
                className={`form-check card-radio ${
                  selectedAirport === "oneway" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleAirportClick("oneway")}
              >
                <input
                  id="airport01"
                  name="airport"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedAirport === "oneway"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="airport01">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">One Way</span>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div
                className={`form-check card-radio ${
                  selectedAirport === "twoway" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleAirportClick("twoway")}
              >
                <input
                  id="airport02"
                  name="airport"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedAirport === "twoway"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="airport02">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">Two Way</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="fs-14 mb-3">Hourly</h5>

          <div className="row g-4">
            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "2hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("2hr")}
              >
                <input
                  id="hourly01"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "2hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly01">
                  <span className="fs-14 p-1 ps-2 text-wrap d-block">2hr</span>
                </label>
              </div>
            </div>

            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "3hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("3hr")}
              >
                <input
                  id="hourly02"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "3hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly02">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">3hr</span>
                </label>
              </div>
            </div>
            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "6hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("6hr")}
              >
                <input
                  id="hourly03"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "6hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly03">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">6hr</span>
                </label>
              </div>
            </div>
            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "8hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("8hr")}
              >
                <input
                  id="hourly04"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "8hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly04">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">8hr</span>
                </label>
              </div>
            </div>
            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "9hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("9hr")}
              >
                <input
                  id="hourly05"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "9hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly05">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">9hr</span>
                </label>
              </div>
            </div>
            <div className="col-3 col-sm-2">
              <div
                className={`form-check card-radio ${
                  selectedHourly === "12hr" ? "border border-1 border-primary rounded" : "border border-2 border-dashed rounded"
                }`}
                onClick={() => this.handleHourlyClick("12hr")}
              >
                <input
                  id="hourly06"
                  name="hourly"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedHourly === "12hr"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="hourly06">
                  <span className="s-14 p-1 ps-2 text-wrap d-block">12hr</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransportationOptions;
