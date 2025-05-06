export default function RegisterForm() {
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
              <input type="text" className="form-control bg-secondary text-white" id="firstName" />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label text-white">
                Efternamn *
              </label>
              <input type="text" className="form-control bg-secondary text-white" id="lastName" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="birthDay" className="form-label text-white">
                Födelsedatum *
              </label>
              <select id="birthDay" className="form-select mb-2 bg-secondary text-white">
                <option>Dag</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label invisible">Månad</label>
              <select
                id="birthMonth"
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-white"
              >
                <option>Månad</option>
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
                id="birthYear"
                className="form-select mb-2 mt-4 mt-md-0 bg-secondary text-white"
              >
                <option>År</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i}>{2025 - i}</option>
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
                <select
                  id="phoneCode"
                  className="form-select bg-secondary text-white"
                  style={{ maxWidth: '100px' }}
                >
                  <option>+46</option>
                  <option>+47</option>
                </select>
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="postalCode" className="form-label text-white">
                Postnummer *
              </label>
              <input type="text" className="form-control bg-secondary text-white" id="postalCode" />
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
              <input
                type="password"
                className="form-control bg-secondary text-white"
                id="password"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label text-white">
                Bekräfta lösenord *
              </label>
              <input
                type="password"
                className="form-control bg-secondary text-white"
                id="confirmPassword"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              E-postadress *
            </label>
            <input type="email" className="form-control bg-secondary text-white" id="email" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-5 mt-3 mx-auto d-block">
          Registrera dig
        </button>
      </form>
    </div>
  );
}
