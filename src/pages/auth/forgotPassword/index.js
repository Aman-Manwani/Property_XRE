import { useState } from "react";

import authBackgroundImage from "../../../../src/assets/images/auth/auth-background.svg";
import xreLogo from "../../../../src/assets/images/organization/xre-logo.svg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-2/6 bg-gray-100 flex justify-center items-center p-12">
        <div className="max-w-md w-full">
          <div className="mb-8 flex flex-col gap-6">
            <div>
              <img alt="Logo" src={xreLogo} />
            </div>
            <h2 className="font-extrabold text-3xl leading-9">
              Forgot your password
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                className="border border-gray-300 px-4 py-2 rounded-md"
                id="email"
                type="email"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div className="text-sm font-normal flex justify-end">
              Resend in
              <span className="text-[#840000] ml-4">0:29</span>
            </div>
            <button className="font-medium text-sm w-full bg-[#840000] text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">
              Email Me
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-4/6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${authBackgroundImage})`,
        }}
      />
    </div>
  );
}
