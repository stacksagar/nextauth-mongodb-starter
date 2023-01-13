import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Common/Button";
import CheckInput from "../components/Common/CheckInput";
import InputWithLabel from "../components/Common/InputWithLabel";
import GoogleSigninButton from "../components/Common/GoogleSigninButton";

import { getSession, signIn } from "next-auth/react";

import { useFormik } from "formik";
import signup_validation from "../lib/formikValidation/signup_validation";
import InputErrorMessage from "../components/Utils/InputErrorMessage";
import axios from "axios";
import { useRouter } from "next/router";
import TostMessage from "../components/Utils/TostMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      acceptTos: false,
    },
    onSubmit: signup,
    validate: signup_validation,
  });

  function signup(values: any) {
    setLoading(true);

    axios
      .post("http://localhost:3000/api/auth/signup", values)
      .then((result) => {
        signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
          callbackUrl: "/",
        }).then((status) => {
          if (status?.error) {
            setError(status?.error);
            return;
          }
          if (status?.ok) router.push("/");
          TostMessage("Successfully Registered!", "success");
        });
      })
      .catch((error: any) => {
        const errorMessage = error.response.data.message;
        if (errorMessage || error?.message) {
          setError(errorMessage || error?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Head>
        <title>Register new account</title>
      </Head>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
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
                    label="Your Name"
                    placeholder="Name"
                    type="name"
                    {...formik.getFieldProps("name")}
                    name="name"
                  />

                  <InputErrorMessage
                    touched={formik.touched.name}
                    error={formik.errors.name}
                  />
                </div>

                <div>
                  <InputWithLabel
                    label="Password"
                    placeholder="Password"
                    type="password"
                    {...formik.getFieldProps("password")}
                    name="password"
                  />

                  <InputErrorMessage
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <CheckInput
                      id="terms"
                      {...formik.getFieldProps("acceptTos")}
                    />
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the
                        <span className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
                          <Link href="/terms-and-conditions">
                            Terms and Conditions
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <InputErrorMessage
                    touched={formik.touched.acceptTos}
                    error={formik.errors.acceptTos}
                  />
                </div>

                <Button type="submit" loading={loading}>
                  Create an account
                </Button>
              </form>{" "}
              <GoogleSigninButton />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <span className="mr-1">Already have an account?</span>
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default signup;

export async function getServerSideProps({ req }: { req: any }) {
  const session = await getSession({ req });
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
}
