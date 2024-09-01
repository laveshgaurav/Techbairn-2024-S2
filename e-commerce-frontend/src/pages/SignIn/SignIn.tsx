import React, { useState } from 'react';
import { T_SignInBody } from '../../@types/Types';
import { getInventory, postLogin } from '../../services/http.service';
import { useAppContext } from '../../contexts/AppContext';

function SignIn() {
  const { setAccessToken, setIsLoggedIn, setUserData } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [useInput, setUserInput] = useState<T_SignInBody>({
    email: '',
    password: '',
  });

  const [inputError, setInputError] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError('');
    setUserInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await postLogin(useInput);
      console.log(response);
      if (response.status === 200) {
        setAccessToken(response?.data?.access_token);
        localStorage.setItem('accessToken', response?.data?.access_token);
        setUserData(response?.data?.user);
        localStorage.setItem('userData', JSON.stringify(response?.data?.user));
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log('SignIn Error', e);
      if (e?.status === 400) {
        setInputError(e?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex min-w-[480px] flex-col gap-y-2 rounded-md p-8">
        <h1 className="text-[24px] font-semibold text-[#141414]">Sign In</h1>
        <input
          placeholder="Enter Email"
          className="rounded-md border border-gray-400 bg-[#d7d7d7] p-2 outline-none"
          onChange={handleInput}
          value={useInput.email}
          name="email"
        />
        <input
          placeholder="Enter Password"
          className="rounded-md border border-gray-400 bg-[#d7d7d7] p-2 outline-none"
          type="password"
          onChange={handleInput}
          value={useInput.password}
          name="password"
        />
        <div>
          <button
            className={`w-full rounded-md p-2 text-white ${loading ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-gray-600'}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          {inputError && (
            <h6 className="font-bold text-red-600">{inputError}</h6>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
