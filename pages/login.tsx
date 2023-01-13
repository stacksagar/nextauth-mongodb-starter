import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Common/Button";
import InputWithLabel from "../components/Common/InputWithLabel";
import { getSession } from "next-auth/react";
import GoogleSigninButton from "../components/Common/GoogleSigninButton";

import { useFormik } from "formik";
import login_validation from "../lib/formikValidation/login_validation";
import InputErrorMessage from "../components/Utils/InputErrorMessage";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import TostMessage from "../components/Utils/TostMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validation,
    onSubmit: LoginSubmit,
  });

  async function LoginSubmit(values: any) {
    setLoading(true);
    try {
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
      if (status?.error) throw Error(status?.error);
      if (status?.ok) router.push("/");
      setLoading(false);
      TostMessage("Login Successfull!", "success");
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Login your account</title>
      </Head>

      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <span className="mr-2">Login to</span>
            <img
              className="w-8 h-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/1372/1372789.png"
              alt="logo"
            />
            <span className="text-primary-700">SR</span>
            <span className="text-red-400 font-bold">BD</span>
            <span className="text-primary-700">TOPUP</span>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {error && (
                <p className="text-red-500 flex items-center gap-x-2">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <span>{error}</span>
                </p>
              )}
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <InputWithLabel
                    label="Email Address"
                    placeholder="Email Address"
                    type="email"
                    {...formik.getFieldProps("email")}
                    name="email"
                  />

                  <InputErrorMessage
                    touched={formik.touched.email}
                    error={formik.errors.email}
                  />
                </div>

                <div>
                  <InputWithLabel
                    label="New Password"
                    type="password"
                    {...formik.getFieldProps("password")}
                    name="password"
                  />

                  <InputErrorMessage
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                </div>

                <Button type="submit" loading={loading}>
                  Login
                </Button>
              </form>

              <GoogleSigninButton />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <span className="mr-1"> Don't have an account?</span>
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Create account!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
