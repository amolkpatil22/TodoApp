import { Route, Routes } from "react-router-dom"
import { SignupPage } from "../pages/SignupPage/Signup"
import { LoginPage } from "../pages/LoginPage/Login"


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}