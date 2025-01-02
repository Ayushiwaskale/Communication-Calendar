import React, { useState } from 'react';
import './CompaniesPage.css';

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([
    {
      name: 'Tech Innovations',
      location: 'San Francisco, CA',
      linkedin: 'https://www.linkedin.com/company/tech-innovations',
      emails: 'contact@techinnovations.com',
      phoneNumbers: '+1-234-567-8900',
      comments: 'Reached out for collaboration on AI projects.',
      communicationPeriodicity: '2 weeks',
    },
  ]);

  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '2 weeks',
  });

  const handleInputChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: '2 weeks',
    });
  };

  return (
    <div className="companies">
      <h2>Companies</h2>
      <div className="company-form">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCompany.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={newCompany.linkedin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="emails"
          placeholder="Emails"
          value={newCompany.emails}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumbers"
          placeholder="Phone Numbers"
          value={newCompany.phoneNumbers}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={newCompany.comments}
          onChange={handleInputChange}
        ></textarea>
        <select
          name="communicationPeriodicity"
          value={newCompany.communicationPeriodicity}
          onChange={handleInputChange}
        >
          <option value="2 weeks">2 Weeks</option>
          <option value="4 weeks">4 Weeks</option>
          <option value="1 month">1 Month</option>
        </select>
        <button onClick={addCompany}>Add Company</button>
      </div>

      <div className="company-list">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <div className="company-name">{company.name}</div>
            <div className="company-details">
              <div>Location: {company.location}</div>
              <div>LinkedIn: {company.linkedin}</div>
              <div>Emails: {company.emails}</div>
              <div>Phone: {company.phoneNumbers}</div>
              <div>Comments: {company.comments}</div>
              <div>Communication Periodicity: {company.communicationPeriodicity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
