import { Navigate } from "react-router-dom";
import MainLayout from "../components/layouts";
import PropTypes from "prop-types";

const login = true;

function GuardAuth({ children }) {
  if (!login) return <Navigate to="/login" />;

  return <MainLayout>{children}</MainLayout>;
}

GuardAuth.propTypes = {
  children: PropTypes.element,
};

function GuardLogin({ children }) {
  if (login) return <Navigate to="/dashboard" />;

  return children;
}

GuardLogin.propTypes = {
  children: PropTypes.element,
};

export { GuardAuth, GuardLogin };
