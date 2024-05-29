const getAuthConfig = () => {
  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENTID;
  const auth0RedirectUri = window.location.origin;

  return { auth0Domain, auth0ClientId, auth0RedirectUri };
};

export default getAuthConfig;
