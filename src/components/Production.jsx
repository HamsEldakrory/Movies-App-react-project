import React from 'react';
import config from '../configs';

const Production = ({ productionCompanies }) => {
  if (productionCompanies.length) {
    return (
      <div className="production-container">
        {productionCompanies.map((company) =>
          company.logo_path ? (
            <img
              key={company.id}
              src={config.TMDB_IMAGE_BASE_URL + company.logo_path}
              alt={company.name}
              className="production-logo"
            />
          ) : (
            <span key={company.id} className="production-text">
              {company.name}
            </span>
          )
        )}
      </div>
    );
  }
};

export default Production;
