// import { LoginPage } from "../../assets/images";

// export default function Login() {
//     return (
//         <div className="grid grid-cols-2 gap-8">
//             <div>
//                 <img src={LoginPage} alt="login-image" width={808} height={880} loading="lazy" />
//             </div>
//             <div className="max-w-[353px] w-full ">
//                 <div className="grid items-center justify-center">
//                     <div className="mb-6">
//                         <h2 className="text-[28px] font-semibold text-[#003C51] mb-2">Welcome to the Service Desk Portal</h2>
//                         <p className="text-sm font-semibold text-[#A0AEC0]">Enter your email and password to sign in</p>
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="" className="text-[#2D3748] text-sm font-normal mb-1">Email</label>
//                         <input type="text" className="px-5 py-4 border border-[#E2E8F0] rounded-2xl bg-white w-full text-sm font-normal text-[#A0AEC0]" placeholder="Your email address" name="" id="" />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="" className="text-[#2D3748] text-sm font-normal mb-1">Password</label>
//                         <input type="text" className="px-5 py-4 border border-[#E2E8F0] rounded-2xl bg-white w-full text-sm font-normal text-[#A0AEC0]" placeholder="Your password" name="" id="" />
//                     </div>
//                     <div className="flex gap-2 mb-9">
//                         <input type="chackbox" className="border w-9 h-4.5 rounded-[97px]" name="" id="" />
//                         <h3 className="text-xs font-normal text-[#2D3748]">Remember me </h3>
//                     </div>
//                     <button className="px-2 py-3 rounded-xl bg-[#087BB3] text-sm font-bold text-white mb-2">Sign In</button>
//                     <div className="flex justify-center">
//                         <p className="text-sm font-normal text-[#A0AEC0]">Don't have an account?</p>
//                         <p className="text-sm font-bold text-[#087BB3]"> Sign up</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React, { useState } from "react";
// import { LoginPage } from "../../assets/images";

// export default function Login() {
//   const [isLogin, setIsLogin] = useState(true); // toggle between login & signup
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required.");
//       return;
//     }

//     if (!isLogin && password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // Here you can connect to your API or authentication service
//     if (isLogin) {
//       console.log("Logging in:", { email, password, rememberMe });
//       alert(`Logged in as ${email}`);
//     } else {
//       console.log("Signing up:", { email, password, rememberMe });
//       alert(`Account created for ${email}`);
//     }

//     // Reset form
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     setRememberMe(false);
//   };

//   return (
//     <div className="grid grid-cols-2  min-h-screen items-center ">
//       <div>
//         <img src={LoginPage} alt="login-image" className="w-full h-auto rounded-xl" loading="lazy" />
//       </div>
//       <div className="max-w-[353px] w-full mx-auto">
//         <div className="grid justify-center">
//           <div className="mb-6 ">
//             <h2 className="text-[28px] font-semibold text-[#003C51] mb-2">
//               {isLogin ? "Welcome to the Service Desk Portal" : "Create an Account"}
//             </h2>
//             <p className="text-sm font-semibold text-[#A0AEC0]">
//               {isLogin
//                 ? "Enter your email and password to sign in"
//                 : "Fill in your details to create an account"}
//             </p>
//           </div>

//           {error && (
//             <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
//           )}

//           <form onSubmit={handleSubmit} className="grid gap-6">
//             <div>
//               <label className="text-[#2D3748] text-sm font-normal mb-1">Email</label>
//               <input
//                 type="email"
//                 className="px-5 py-4 border border-[#E2E8F0] rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748]"
//                 placeholder="Your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="text-[#2D3748] text-sm font-normal mb-1">Password</label>
//               <input
//                 type="password"
//                 className="px-5 py-4 border border-[#E2E8F0] rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748]"
//                 placeholder="Your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             {!isLogin && (
//               <div>
//                 <label className="text-[#2D3748] text-sm font-normal mb-1">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="px-5 py-4 border border-[#E2E8F0] rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748]"
//                   placeholder="Confirm password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>
//             )}

//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 rounded"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               <label className="text-xs font-normal text-[#2D3748]">
//                 Remember me
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="px-5 py-3 rounded-xl bg-[#087BB3] text-sm font-bold text-white"
//             >
//               {isLogin ? "Sign In" : "Sign Up"}
//             </button>
//           </form>

//           <div className="flex justify-center gap-1 mt-4 text-sm">
//             <p className="text-[#A0AEC0]">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//             </p>
//             <button
//               className="text-[#087BB3] font-bold"
//               onClick={() => {
//                 setIsLogin(!isLogin);
//                 setError("");
//               }}
//             >
//               {isLogin ? "Sign Up" : "Sign In"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { LoginPage, Logo } from "../../assets/images";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = { email: "", password: "", confirmPassword: "" };

        if (!email) {
            newErrors.email = "Email is required.";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password is required.";
            valid = false;
        }

        if (!isLogin && password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }

        setErrors(newErrors);
        if (!valid) return;

        if (isLogin) {
            const correctEmail = "admin@chand.com";
            const correctPassword = "123456";

            if (email === correctEmail && password === correctPassword) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", email);
                alert(`Logged in as ${email}`);

                window.location.href = "/";
            } else {
                alert("Invalid email or password");
            }
        } else {
            console.log("Signing up:", { email, password, rememberMe });
            alert(`Account created for ${email}`);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            window.location.href = "/";
        }

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRememberMe(false);
        setErrors({ email: "", password: "", confirmPassword: "" });
    };


    return (
        <div className="grid md:grid-cols-2 items-center  h-full overflow-hidden ">
            <div className="relative order-1 min-h-[600px] md:min-h-screen">
                {/* <img
                    src={LoginPage}
                    alt="login-image"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                /> */}
                <img
                    src={LoginPage}
                    alt="login-image"
                    className="w-full h-auto rounded-xl"
                    width={808}
                    height={880}
                    fetchpriority="high"
                    loading="eager"
                />

            </div>
            <div className="order-2 py-8">
                <main className="max-w-[500px] mx-auto px-4 flex flex-col justify-center h-full">
                    <div className="h-fit border p-5 border-[#E2E8F0] rounded-xl shadow">
                        <div className="mb-6 text-center">
                            <div className="flex justify-center  mb-6">
                                <img src={Logo} alt="logo" width={200} height={45} style={{ width: "200px", height: "45px" }} />
                            </div>
                            <h2 className="font-sans text-[26px] font-semibold text-[#003C51] mb-2">
                                {isLogin ? "Welcome to the Service Desk Portal" : "Create an Account"}
                            </h2>
                            <p className="text-sm font-semibold text-[#4A5568]">
                                {isLogin
                                    ? "Enter your email and password to sign in"
                                    : "Fill in your details to create an account"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid gap-6
">
                            <div>
                                <label className="text-[#2D3748] text-sm font-normal mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.email ? "" : ""
                                        }`}
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    // <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>

                                )}
                            </div>

                            <div>
                                <label className="text-[#2D3748] text-sm font-normal mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.password ? "" : ""
                                        }`}
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="text-[#2D3748] text-sm font-normal mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`px-5 py-4 border border-[#E2E8F0] shadow-xs rounded-2xl bg-white w-full text-sm font-normal text-[#2D3748] ${errors.confirmPassword ? "" : ""
                                            }`}
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="text-xs font-normal text-[#2D3748]">
                                    Remember me
                                </label>
                            </div> */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="w-4 h-4 rounded"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-xs font-normal text-[#2D3748]"
                                >
                                    Remember me
                                </label>
                            </div>


                            <button
                                type="submit"
                                className="px-5 py-3 cursor-pointer rounded-xl bg-[#087BB3] text-sm font-bold text-white"
                            >
                                {isLogin ? "Sign In" : "Sign Up"}
                            </button>
                        </form>

                        {/* <div className="flex justify-center gap-1 mt-4 text-sm">
                            <p className="text-[#A0AEC0]">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                            </p>
                            <button
                                className="text-[#087BB3] cursor-pointer font-bold"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setErrors({ email: "", password: "", confirmPassword: "" });
                                }}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </div> */}
                        <div className="flex justify-center gap-1 mt-4 text-sm">
                            <p className="text-[#4A5568]">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                            </p>
                            <button
                                className="text-[#087BB3] cursor-pointer font-bold"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setErrors({ email: "", password: "", confirmPassword: "" });
                                }}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

