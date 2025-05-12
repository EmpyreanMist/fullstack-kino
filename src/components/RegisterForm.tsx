'use client';
import { useState } from 'react';
import PasswordField from './PasswordField';

export default function RegisterForm() {
  // To show valid years in future
  const date = new Date();
  let currentYear = date.getFullYear();

  // object to handle values from form.
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDay?: number;
    birthMonth: string;
    birthYear?: number;
    city: string;
    password1: string;
    comparePassword: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDay: undefined,
    birthMonth: '',
    birthYear: undefined,
    city: '',
    password1: '',
    comparePassword: '',
  });

  // Handles form value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    console.log(formData.password1, formData.comparePassword);

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Stopps submit if passwords aren't equal
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      !formData.password1 ||
      !formData.comparePassword ||
      formData.password1 !== formData.comparePassword
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-start py-5">
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow"
        style={{
          maxWidth: '700px',
          width: '100%',
          backgroundColor: '#3d3d3d',
        }}
      >
        <div className="mb-4">
          <h2 className="mb-3 text-white">Personlig information</h2>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label text-white">
                Förnamn *
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                id="firstName"
                value={formData.firstName}
                required
                placeholder="John"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label text-white">
                Efternamn *
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                id="lastName"
                value={formData.lastName}
                required
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="birthDay" className="form-label text-white">
                Födelsedatum *
              </label>
              <select
                id="birthDay"
                required
                onChange={handleChange}
                className="form-select mb-2 bg-secondary text-dark"
                value={formData.birthDay ?? ''}
              >
                <option value="" disabled>
                  Dag
                </option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label invisible">Månad</label>
              <select
                id="birthMonth"
                required
                onChange={handleChange}
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-dark"
                value={formData.birthMonth}
              >
                <option value="" disabled>
                  Månad
                </option>
                {[
                  'Januari',
                  'Februari',
                  'Mars',
                  'April',
                  'Maj',
                  'Juni',
                  'Juli',
                  'Augusti',
                  'September',
                  'Oktober',
                  'November',
                  'December',
                ].map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label invisible">År</label>
              <select
                id="birthYear"
                required
                onChange={handleChange}
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-dark"
                value={formData.birthYear ?? ''}
              >
                <option value="" disabled>
                  År
                </option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={currentYear - i}>
                    {currentYear - i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="phoneCode" className="form-label text-white">
                Telefonnummer *
              </label>
              <div className="input-group">
                <input
                  onChange={handleChange}
                  type="tel"
                  pattern="^(\+46|0)[\s\d]{7,14}$"
                  className="form-control bg-secondary text-white"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="t.ex. 0701234567 eller +46701234567"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label text-white">
                Stad
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control bg-secondary text-white"
                id="city"
                value={formData.city}
                placeholder="Åre"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-white">E-post och lösenord</h2>
          <div className="row mb-3">
            <PasswordField formData={formData} handleChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              E-postadress *
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control bg-secondary text-white"
              id="email"
              value={formData.email}
              required
              placeholder="email@example.com"
            />
          </div>
        </div>

        {/* Sends the form*/}
        <button type="submit" className="btn btn-primary mt-5 mt-3 mx-auto d-block">
          Registrera dig
        </button>
      </form>
    </div>
  );
}
