import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Designing Homes That Reflect Your Personality
          </p>
        </div>
        <div className="flex flex-row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                {/* <i className={d.icon}></i> */}
                <img src={d.image} ></img>
                <div className="service-desc">
                  <h3 style={{ fontWeight: "bold" }}>{d.name}</h3>
                  <div className="list-style">
                    <div style={{textAlign:"left"}}>
                      <ul>
                        {d.types
                          ? d.types.map((t, i) => (
                            <li key={`${t.title}-${i}`}>
                              <span style={{ fontSize: "14px", fontWeight: "bold" }}>{t.title}</span>
                              <span>{t.description}</span>
                            </li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
