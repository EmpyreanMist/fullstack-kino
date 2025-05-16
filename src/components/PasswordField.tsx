import React from 'react';
import { isPasswordValid, doPasswordsMatch } from '../utils/validation';

type PasswordFieldsProps = {
  formData: {
    password1: string;
    comparePassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordFields({ formData, handleChange }: PasswordFieldsProps) {
  return (
    <>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label text-white">
          Lösenord *
        </label>

        {/* Input for the first password */}
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
        {/* Input to confirm password */}
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

      {/* Feedback divs */}
      {formData.password1 && (
        <small
          className={`d-block mt-2 ${
            isPasswordValid(formData.password1) ? 'text-success' : 'text-danger'
          }`}
        >
          {isPasswordValid(formData.password1) ? (
            <div
              className="alert alert-success"
              style={{
                display: `${
                  isPasswordValid(formData.password1) &&
                  doPasswordsMatch(formData.password1, formData.comparePassword)
                    ? 'none'
                    : 'block'
                }`,
              }}
              role="alert"
            >
              Ditt lösenord är starkt nog! Bekräfta lösenordet tills det visar grönt!
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Ditt lösenord måste innehåll minst 8 tecken, minst en stor bokstav och ett
              specialtecken!
            </div>
          )}
        </small>
      )}
    </>
  );
}
