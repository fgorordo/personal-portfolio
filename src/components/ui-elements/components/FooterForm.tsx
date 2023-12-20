"use client";
import { Field, Form, Formik, FormikHelpers } from "formik"
import { Button } from "./Button";
import { IoBarbell, IoNotifications } from "react-icons/io5";

interface FormValues {
    email: string;
};

const formInitialValues: FormValues = {
    email: "",
};


export const FooterForm = () => {
    return (
        <Formik initialValues={formInitialValues} onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => { console.log(values); setSubmitting(false) }}>
            <Form>
                <div className="flex gap-2">
                    <Field id={"email"} name="email" type="email" placeholder="jdoe@google.com" className="bg-background rounded-lg p-3 border border-input-stroke placeholder:text-placeholder flex-1" />
                    <Button type="submit" buttonText="Suscribirse" color="secondary" size="small" rightIcon={<IoNotifications/>} />
                </div>
            </Form>
        </Formik>
    );
};
