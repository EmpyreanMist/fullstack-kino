'use client';
/* import { supabase } from '../lib/supabaseClient'; */
import { useState } from 'react';
import PasswordField from './PasswordField';

export default function RegisterForm() {
  const [emailWarning, setEmailWarning] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);
  // object to convert month into number
  const months: {
    [key: string]: string;

    Januari: string;
    Februari: string;
    Mars: string;
    April: string;
    Maj: string;
    Juni: string;
    Juli: string;
    Augusti: string;
    September: string;
    Oktober: string;
    November: string;
    December: string;
  } = {
    Januari: '01',
    Februari: '02',
    Mars: '03',
    April: '04',
    Maj: '05',
    Juni: '06',
    Juli: '07',
    Augusti: '08',
    September: '09',
    Oktober: '10',
    November: '11',
    December: '12',
  };

  // To show valid years in future
  const date = new Date();
  const currentYear = date.getFullYear();

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

    setFormData(prev => ({ ...prev, [id]: value }));
    console.log(formData);
  };

  // Stopps submit if passwords aren't equal
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailWarning(false);
    setPhoneWarning(false);

    if (
      !formData.password1 ||
      !formData.comparePassword ||
      formData.password1 !== formData.comparePassword
    ) {
      return;
    }

    if (!formData.birthDay || !formData.birthYear) {
      return;
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const monthNumber = months[formData.birthMonth];
      const dayPadded = String(formData.birthDay).padStart(2, '0');
      const birthDateString = `${formData.birthYear}-${monthNumber}-${dayPadded}`;

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password1,
          fullName,
          birthDateString,
          phone: formData.phoneNumber,
          city: formData.city,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error === 'Emailen är redan registrerad') {
          setEmailWarning(true);
        } else if (result.error === 'Telefonnumret är redan registrerat') {
          setPhoneWarning(true);
        }
        throw new Error(result.error || 'Något gick fel vid registreringen.');
      }

      alert('Du har skapat ett konto!');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('Okänt fel:', error);
        alert('Ett okänt fel inträffade.');
      }
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
                              {
                 phoneWarning  && (
                  <div className="alert alert-warning mt-2" role="alert">
                    Telefonnumret är redan registrerat
                  </div>
                )
              }
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
              {
                emailWarning && (
                  <div className="alert alert-warning mt-2" role="alert">
                    Email adressen finns redan registrerad!
                  </div>
                )
              }
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
