import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";

function Protected({ children, ...props }) {
	const { user } = useContext(AuthContext);
	return <Route {...props}>{user ? children : <Redirect to="/login" />}</Route>;
}
export default Protected;
