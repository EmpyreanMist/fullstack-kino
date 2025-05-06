'use client';
import { useState } from 'react';

export default function RegisterForm() {
  // to handle the year form input
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

  // Checks if password meets the requirements
  const isPasswordValid = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasMinLength && hasUppercase && hasSpecialChar;
  };

  // Checks if both password are equal
  const doPasswordsMatch = (password1: string, comparePassword: string) => {
    return password1 === comparePassword;
  };

  // Handles form value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    console.log(formData.password1, formData.comparePassword);

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-start py-5">
      <form
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
                className="form-select mb-2 bg-secondary text-dark"
                onChange={handleChange}
              >
                <option value={formData.birthDay ?? ''} hidden>
                  Dag
                </option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label invisible">Månad</label>
              <select
                onChange={handleChange}
                id="birthMonth"
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-dark"
              >
                <option value="" hidden>
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
                  <option key={idx}>{month}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label invisible">År</label>
              <select
                onChange={handleChange}
                id="birthYear"
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-dark"
              >
                <option hidden>År</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i}>{currentYear - i}</option>
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
            <div className="col-md-6">
              <label htmlFor="password" className="form-label text-white">
                Lösenord *
              </label>

              {/* Input för första lösenordet */}
              <input
                onChange={handleChange}
                type="password"
                className={`form-control text-white ${
                  !formData.password1
                    ? 'bg-secondary'
                    : isPasswordValid(formData.password1) &&
                      doPasswordsMatch(formData.password1, formData.comparePassword)
                    ? 'bg-success'
                    : 'bg-warning'
                }`}
                id="password1"
                value={formData.password1}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label text-white">
                Bekräfta lösenord *
              </label>
              {/* Input för att bekräfta lösenord */}
              <input
                type="password"
                id="comparePassword"
                onChange={handleChange}
                value={formData.comparePassword}
                required
                className={`form-control text-white ${
                  !formData.comparePassword
                    ? 'bg-secondary'
                    : isPasswordValid(formData.password1) &&
                      doPasswordsMatch(formData.password1, formData.comparePassword)
                    ? 'bg-success'
                    : 'bg-warning'
                }`}
              />
            </div>
          </div>

          {/* När man skriver i första lösenordet så visas direkt feedback, körs bara om någon har börjat skriva */}
          {formData.password1 && (
            <small
              className={`d-block mt-2 ${
                isPasswordValid(formData.password1) ? 'text-success' : 'text-danger'
              }`}
            >
              {isPasswordValid(formData.password1)
                ? 'Lösenordet är starkt nog'
                : 'Minst 8 tecken, 1 stor bokstav & 1 specialtecken krävs'}
            </small>
          )}

          {/* Jämför lösenorden mot varandra och ger feedback om de matchar */}
          {formData.comparePassword && (
            <small
              className={`d-block mt-2 ${
                doPasswordsMatch(formData.password1, formData.comparePassword)
                  ? 'text-success'
                  : 'text-danger'
              }`}
            >
              {doPasswordsMatch(formData.password1, formData.comparePassword)
                ? 'Lösenorden matchar'
                : 'Lösenorden matchar inte'}
            </small>
          )}

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

        {/* Skickar formuläret vidare */}
        <button type="submit" className="btn btn-primary mt-5 mt-3 mx-auto d-block">
          Registrera dig
        </button>
      </form>
    </div>
  );
}
