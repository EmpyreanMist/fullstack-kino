'use client';

import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function AboutUs() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Tack för ditt meddelande!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    
    <div className="bg-dark text-light container-fluid p-5 min-vh-100 d-flex flex-column">

        
      {/* Info Section */}
      <section className="text-white mb-5">
        <h2>Om Projektet</h2>
        <p className="lead">
          Info här
        </p>
      </section>

      <section>
        <h2>Kontakta Oss</h2>
        <form onSubmit={handleSubmit}>
          <div className="text-white mb-3">
            <label htmlFor="name" className="form-label">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white mb-3">
            <label htmlFor="email" className="form-label">E-post</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-white mb-3">
            <label htmlFor="message" className="form-label">Meddelande</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="text-white btn btn-primary">Skicka</button>
        </form>
      </section>
    </div>
  );
}
