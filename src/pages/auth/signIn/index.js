import { useState } from "react";
import authBackgroundImage from "../../../../src/assets/images/auth/auth-background.svg";
import xreLogo from "../../../../src/assets/images/organization/xre-logo.svg";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
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
              Sign in to your account
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
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                className="border border-gray-300 px-4 py-2 rounded-md"
                type="password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  type="checkbox"
                />
                <span className="text-sm font-normal text-gray-900">
                  Remember me
                </span>
              </label>
              <a
                className="text-sm text-[#840000] hover:underline font-medium"
                href="/forgot-password"
              >
                Forgot your password?
              </a>
            </div>
            <button className="font-medium text-sm w-full bg-[#840000] text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">
              Sign in
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
