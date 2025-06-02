'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import '@/styles/movieInfo/MovieDetails.css';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <section className="py-5">
        <div className="container movie-details-card">
          <div className="row gx-4 align-items-center justify-content-between">
            <div className="col-md-5 order-2 order-md-1">
              <div className="mt-5 mt-md-0">
                <h2 className="display-5 fw-bold">Om oss</h2>
                <p className="lead">
                  Kino i Åre är en mysig biograf med fokus på kvalitetsfilm. Här visas både nya
                  storfilmer och utvalda independent- och dokumentärfilmer.
                </p>
                <p className="lead">
                  Belägen i hjärtat av Åre erbjuder Kino en varm och trivsam miljö där både lokalbor
                  och besökare kan njuta av filmupplevelser året runt.
                </p>
              </div>
            </div>
            <div className="col-md-6 offset-md-1 order-1 order-md-2">
              <div className="row gx-2 gx-lg-3">
                <div className="col-6">
                  <div className="mb-2">
                    <Image
                      className="img-fluid rounded-3"
                      src="/kino-vd.png"
                      alt="Bild"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2">
                    <Image
                      className="img-fluid rounded-3"
                      src="/screen.png"
                      alt="Bild"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2">
                    <Image
                      className="img-fluid rounded-3"
                      src="/kino.png"
                      alt="Bild"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2">
                    <Image
                      className="img-fluid rounded-3"
                      src="/nature.png"
                      alt="Bild"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container movie-details-card">
        <h2 className="text-center">Kontakta Oss</h2>
        <form onSubmit={handleSubmit}>
          <div className="text-white mb-3">
            <label htmlFor="name" className="form-label">
              Namn
            </label>
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
            <label htmlFor="email" className="form-label">
              E-post
            </label>
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
            <label htmlFor="message" className="form-label">
              Meddelande
            </label>
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

          <button type="submit" className="text-white btn btn-primary d-block mx-auto mt-4">
            Skicka
          </button>
        </form>
      </section>
    </div>
  );
}
