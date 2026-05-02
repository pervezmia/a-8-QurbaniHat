"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGooglePlus } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.email.value;
    const url = e.target.url.value;
    console.log({ email, password, name, url });

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      url,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Register Successfully Done!");
      router.push("/");
    }
    if (error) {
      toast.error("Something is Wrong!");
    }

    console.log({ data, error });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <>
      <h3 className="text-center font-bold text-xl mt-5">
        This is Register page
      </h3>
      <div className="flex items-center justify-center ">
        <div className="border p-6 rounded-xl my-4">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="url"
              validate={(value) => {
                if (!value) {
                  return "Url must be enter";
                }
                return null;
              }}
            >
              <Label>Photo Url</Label>
              <Input placeholder="Enter your url" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <Button type="submit">
                <Check />
                Submit
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
          
          <div>
            <p className="text-center font-bold">Or</p>
            <Button onClick={handleGoogleSignIn} variant="outline" className={"w-full"}>
              {" "}
              <FaGooglePlus /> Sign In with Google
            </Button>
          </div>
          <p className="text-xs mt-3">
            Already Register go to{" "}
            <Link href={"/signin"} className="text-green-400">
              <span> log in </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
